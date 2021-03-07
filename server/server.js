require('dotenv').config({ path: './config.env' });
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// db connection
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', require('./routes/products'));

app.listen(PORT, () => console.log(`Server is running at port : ${PORT}`));