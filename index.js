import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';

import dotenv from 'dotenv';
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
app.use(cors(({
    origin: 'https://gmail-cl.netlify.app', // Replace with your Netlify URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true // If you are using cookies or HTTP authentication
})));
app.use(express.urlencoded());
app.use(express.json());
app.use('/', routes);

// const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));