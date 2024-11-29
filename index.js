const express = require('express')
const app = express()
const mongoose = require('mongoose')

const userRoute = require('./routes/user')

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use('/api/users',userRoute)

const connectDb = ()=>{
  try {
    mongoose.connect('mongodb://localhost:27017/crud').then((err)=>{
        console.log('Database coonected');
    })
  } catch (error) {
    
  }
}
connectDb()
app.listen(3000,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log('server Started at 3000');
    }
})