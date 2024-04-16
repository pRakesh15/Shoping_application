import express from 'express';
import cors from 'cors'
import proxy from 'express-http-proxy';
const port=8000;
const app=express();
app.use(cors());

app.use(express.json());

app.use("/user",proxy("http://localhost:8003/"));
app.use("/",proxy("http://localhost:8002/"));//product landing peg
app.use("/order",proxy("http://localhost:8001/"));


app.listen(port,()=>{
console.log(`server is live at ${port}`)
})