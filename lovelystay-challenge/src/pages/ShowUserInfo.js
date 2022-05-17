import '../styles/ShowUserInfo.css';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ShowUserInfo({userData}){
    let navigate = useNavigate();
    const [reposData, setReposData] = useState([]);

    useEffect(()=>{
        fetchRepos();
    },[])

    async function fetchRepos(){
        const data = await fetch(userData.repos_url)
        .then(response => response.json())
        setReposData(data);
    }
    
    const renderRepos = () => {
        return(
            <>
                {reposData.map(data => 
                    <tr key = {data.id}>
                        <td>{data.name}</td>
                        <td>{data.description}</td>
                    </tr>
                )}
            </>
        )
    }

    return(
        <div className="user-info-container">
            <div className='back-button'>
                <button onClick={() => navigate('/')}> Back </button>
            </div>
            <div className="info-sections">
                <div className="first-section">
                    <img src={userData.avatar_url} alt='avatar' />
                </div>
                <div className="second-section">
                    <p>Name: {userData.name}</p>
                    <p>Repositories number: {userData.public_repos}</p>
                </div>
            </div>
            <div className='list-repos-section'>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        {renderRepos()}
                    </tbody>
                    
                </table>
            </div>
        </div>
    )
}