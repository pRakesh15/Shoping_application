import express from 'express';
const port=8002;
const app=express();

app.use(express.json());

app.use('/',(req,res,next)=>
{
    res.status(200).json({
        success:true,
        message:"this is  from product side"
    })
})

app.listen(port,()=>{
console.log(`server is live at ${port}`)
})