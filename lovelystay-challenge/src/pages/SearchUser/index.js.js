import { useState } from "react";
import './SearchUsers.css';
import {BiSearchAlt} from 'react-icons/bi';
import {BsGithub} from 'react-icons/bs';
import {DiGithubFull} from 'react-icons/di';
import {useNavigate} from 'react-router-dom';


export default function SearchUser({setUserData}){
    const [username, setUsername] = useState('');
    let navigate = useNavigate();
    const fetchUsers = async () => {
        if(username !==''){
            await fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                const json = response.json();
                if(response.ok) {
                    return json
                } else {
                    throw json
                }
            })
            .then((data) => {
                setUserData(data);
                setUsername('');
                navigate('/user-info');
            })
            .catch(e => alert('Username Not Found'));
        } else {
            alert('Please type a username');
        }
    }
        
    return(
        <div className="search-page">
            <div className="github-logo">
                <BsGithub/>
                <DiGithubFull/>
            </div>
            <div className="search-section">
                <input className="search-input" type='text' placeholder="Type a username..." onChange={(e)=>setUsername(e.target.value)} autoFocus/>
                <button className="search-button" type="submit" onClick={fetchUsers}><BiSearchAlt/></button>
            </div>
        </div>
    )
}