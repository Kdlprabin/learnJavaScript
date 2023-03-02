const express = require('express');

const app = express();
const PORT = 3001;

app.listen(PORT, () => {console.log(`listening at port ${PORT}`)})


app.use(express.json());

const data = [
    {'pen': 'item'},
    {'pencil':"item"}
]

app.get('/',(req,res)=>{
    return res.status(200).json({
        success: true,
        message: 'You get all the information',
        data: data
    })
})

app.post('/',(req,res)=>{
    console.log(req.body);
    data.push(req.body);
    return res.status(200).json({
        success: true,
        message: 'Added item successfully'
    })
})