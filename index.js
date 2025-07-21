

import express from "express"
import 'dotenv/config'
import mongoose from "mongoose"


const app = express();
const PORT = 4000


mongoose.connect(process.env.MONGODBURI)
.then(()=> console.log("MongoDb connected"))
.catch((err)=> console.log("MongoDb connection error", err))



app.get("/" , (req , res)=>{

    res.send("Todo App Api")

})

app.listen(PORT , ()=>{
    console.log(`Server Is Running On Port ${PORT}`)
})

