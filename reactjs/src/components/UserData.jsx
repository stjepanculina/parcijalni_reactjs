import React, { useState, useEffect } from 'react';

const UserData = ({ username, onReset }) => {
    const [userData, setUserData] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                const userData = await userResponse.json();
                setUserData(userData);

                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
                const reposData = await reposResponse.json();
                setRepos(reposData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [username]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <img src={userData.avatar_url} alt="User Avatar" style={{ width: '150px', borderRadius: '50%' }} />
            <h2>{userData.name}</h2>
            <p><strong>Location:</strong> {userData.location}</p>
            <p><strong>Bio:</strong> {userData.bio}</p>
            <h3>Repositories:</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {repos.map(repo => (
                        <tr key={repo.id}>
                            <td>{repo.id}</td>
                            <td><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={onReset}>Reset</button>
        </div>
    );
};

export default UserData;