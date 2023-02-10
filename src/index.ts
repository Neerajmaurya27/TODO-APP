import express from 'express';
import cors from 'cors';
import { CurdManager } from './curd.manager';

 const app = express();

// Swagger docs related
const swaggerUi = require('swagger-ui-express');
import * as swaggerDocument from './swagger.json'


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// MIDDLEWARE SERVEICE :: ALLOW AJAX CALL
app.use(cors());

// Helps to read the input data in json format.
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// WILL DEVELOP API
app.get("/",async(req, res)=>{
    // const output = {data : "get"}
    const output =await CurdManager.read();
    
    res.json(output);
})

app.post("/",async(req, res)=>{
    const input = req.body;
    // const output = {data : "post", todo : input.todo}
    const  output = await CurdManager.create(input)
    console.log(output)
    res.json(output);
})

app.put("/",async (req, res)=>{
    const input = req.body;
    const output = await CurdManager.update(input)
    // res.json()
    // const output = {data : "put", todo:input.todo}
    res.json(output);
})

app.delete("/",async (req, res)=>{
    const input = req.body ;
    const output = await CurdManager.delete(input)
    res.json(output);
})


app.listen(3000, () =>{
    console.log('server started')
})
