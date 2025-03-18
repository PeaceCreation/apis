import  express  from 'express';
import {  initDB } from './utils/db.js';
import { User } from './models/index.js';
import authRouter from './routes/auth.routes.js';

// import function to connect DB


// call initDB
initDB();

const app = express();
app.use(express.json());
// Routers
app.use('/api/auth', authRouter);
// Routers;

 const port = process.env.PORT || 3000 ;
app.listen(port, ()=>{
    console.log(`Server is  on :  ${port}`);
})
