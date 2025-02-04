import express from 'express';
import { startProcess } from './start.js';
const app = express();

app.get('/generate-proposal', async(req, res)=>{
    const result = await startProcess();
    res.send({result:result});
})


app.listen(4000, ()=>{
    console.log('connected');
})
