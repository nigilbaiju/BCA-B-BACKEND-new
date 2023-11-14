const express=require("express")

const app=new express();

app.listen(3005,(request,response)=>{
    console.log("Port is running in 3005")
})

app.get('/',(request,response)=>{
    response.send("hi database")
})