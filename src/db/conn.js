// const mongoose=require('mongoose');
import mongoose from 'mongoose'

mongoose.connect(process.env.REACT_APP_DATABASE_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Success");
}).catch((err)=>{
    console.log(err);
});