const express=require("express");
const dotenv=require("dotenv")
const port= process.env.PORT || 6000;
const app=express();
app.use("/api/contacts" ,require("./routes/Contacts"));

app.listen(port,()=>{
    console.log(`Server running in ${port}`)
})