const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to handle JSON data
app.use(express.json());

// Connect to MongoDB (database URL)
mongoose.connect('mongodb://localhost:27017/notesPortal', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB...", err));

// Basic route to check server
app.get('/', (req, res) => {
    res.send('Hello from the Notes Portal Backend!');
});

// Start the server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
