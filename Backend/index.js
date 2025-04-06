import express from 'express';
import cors from 'cors';
import { connectDB } from './src/config/db.js';
import Search from './src/Routes/Get-meals.js';
import AccountCreation from './src/Routes/CreateAccount.js';
import AccountLogin from './src/Routes/LoginAccount.js';
const app = express();
app.use(express.json());
app.use(cors());
app.listen(5000, () => {
    console.log('Server is running on port 5000');
    connectDB();
})
app.get('/api', Search);
app.post('/api', AccountCreation);
app.post('/api', AccountLogin);