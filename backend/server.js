const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// In-memory "database" to store users (for simplicity)
const users = [];

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON data

// Signup route
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    console.log('Received data:', req.body);  // Log incoming data

    // Check if the user already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Add the new user to the in-memory database
    users.push({ username, email, password });

    // Return success message
    res.status(201).json({ message: 'User created successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
