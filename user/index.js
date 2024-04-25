import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './src/database/reposetry/connection.js';
const port=8003;
const app=express();
app.use(express.json());
config()
connectDB()

app.use('/',(req,res,next)=>
{
    res.status(200).json({
        success:true,
        message:"this is  from user side"
    })
})

app.listen(port,()=>{
console.log(`server is live at ${port}`)
})