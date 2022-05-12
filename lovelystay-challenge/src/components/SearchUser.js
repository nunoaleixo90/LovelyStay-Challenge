import { useState } from "react";
import '../styles/SearchUsers.css';
import {BiSearchAlt} from 'react-icons/bi'

export default function SearchUser({setUserData}){
    const [username, setUsername] = useState('');

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
            })
            .catch(e => alert('Username Not Found'));
        } else {
            alert('Please type a username');
        }
        
    }
        
    return(
        <div className="search-page">
            <div className="search-section">
                <input className="search-input" type='text' placeholder="Type a username..." onChange={(e)=>setUsername(e.target.value)} autoFocus/>
                <button className="search-button" type="submit" onClick={fetchUsers}><BiSearchAlt/></button>
            </div>
        </div>
    )
}