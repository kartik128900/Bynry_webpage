// src/components/ProfileList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProfileList() {
    const [profiles, setProfiles] = useState([]);

    // Fetch profiles from API
    useEffect(() => {
        axios.get('/api/profiles')  // Backend route to fetch profiles
            .then(response => setProfiles(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="profile-list">
            <h2>Profiles</h2>
            {profiles.map(profile => (
                <div key={profile.id} className="profile-card">
                    <img src={profile.photo} alt={profile.name} />
                    <h3>{profile.name}</h3>
                    <p>{profile.description}</p>
                    <Link to={`/profile/${profile.id}`}>
                        <button>Summary</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProfileList;
