const express = require('express')
const app = express()
const userRoute = require('./routes/user')

app.use('/user',userRoute)

app.listen(3000,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log('server Started at 3000');
    }
})