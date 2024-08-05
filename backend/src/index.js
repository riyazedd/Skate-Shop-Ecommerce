import express from 'express'
import Connection from './database/Connection.js';
import router from './router/web.js';
import cors from 'cors';

const app=express();
new Connection();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.static('public'));
app.use(router);


app.listen(3000,()=>{
    console.log("Server running in port 3000")
})