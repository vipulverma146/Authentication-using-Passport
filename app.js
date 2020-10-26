const express=require('express');
const port=3000;
const app=express();

// routes is attached

app.use('/',require('./routes/index'));


app.listen(port,(err)=>{
    if(err){console.log(`error:${err}`);}

    console.log(`Server is running on :${port}`);

});
