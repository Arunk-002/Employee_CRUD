const express = require('express')
const app = express()




app.listen(3000,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log('server Started at 3000');
    }
})