// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let profiles = [
    { id: 1, name: 'John Doe', photo: 'url_to_photo', description: 'Software Engineer', address: '123 Main St, San Francisco' },
    // Add more profiles
];

// Routes
app.get('/api/profiles', (req, res) => {
    res.json(profiles);
});

app.get('/api/profiles/:id', (req, res) => {
    const profile = profiles.find(p => p.id === parseInt(req.params.id));
    if (profile) {
        res.json(profile);
    } else {
        res.status(404).send('Profile not found');
    }
});

// Run server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
