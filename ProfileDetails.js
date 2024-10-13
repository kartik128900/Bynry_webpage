// src/components/ProfileDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MapComponent from './MapComponent';

function ProfileDetails() {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get(`/api/profiles/${id}`)  // Fetch profile by ID
            .then(response => setProfile(response.data))
            .catch(error => console.log(error));
    }, [id]);

    if (!profile) return <div>Loading...</div>;

    return (
        <div className="profile-details">
            <img src={profile.photo} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <h4>Location:</h4>
            <MapComponent address={profile.address} />
        </div>
    );
}

export default ProfileDetails;
