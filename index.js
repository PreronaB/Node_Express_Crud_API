import express from 'express';
import bodyParser from 'body-parser'; //helps take in incoming post request bodies

import usersRoutes from './routes/users.js';

const app= express();
const PORT=5000;

app.use(bodyParser.json()) //informs that we will use json data in the app

app.use('/users', usersRoutes);

app.get('/',(req,res) => {
    // console.log('[TEST]');

    res.send('Hello from homepage.');
});
app.listen(PORT, () => console.log(`Server running on port:  http://localhost:${PORT}`));

