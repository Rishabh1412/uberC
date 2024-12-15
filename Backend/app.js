const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const eventRoutes = require('./routes/event.routes');
const authRoutes=require('./routes/auth.routes')
const connectToDb=require('./db/db')
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(cors());
connectToDb();
app.use(express.json());
app.use(cookieParser()); // if you're sending JSON data
app.use('/events', eventRoutes);
app.use('/auth',authRoutes); // example route for events

// Basic route
app.get('/', (req, res) => {
    res.send('Hello world');
});

module.exports = app;
