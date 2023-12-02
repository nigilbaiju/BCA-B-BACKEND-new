const express=require("express");
const cors=require("cors")

const studmodel = require("./model/student");

const app=new express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());




app.get('/',(request,response)=>{
    response.send("hi database")
})

//For Saving student data

app.post('/snew',(request,response)=>{
    new studmodel(request.body).save();
    response.send("Record saved Sucessfully")
})

//For retriving student data
app.get('/sview',async(request,response)=>{
    var data = await studmodel.find();
    response.send(data)
})

//For update status of student -delete
app.put('/updatestatus/:id',async(request,response)=>{
    let id = request.params.id
    await studmodel.findByIdAndUpdate(id,{$set:{Status:"INACTIVE"}})
    response.send("Record Deleted")
})

//For modifing the details student
app.put('/sedit/:id',async(request,response)=>{
    let id = request.params.id
    await studmodel.findByIdAndUpdate(id,request.body)
    response.send("Record updated")
})


app.listen(3005,(request,response)=>{
    console.log("Port is running in 3005")
})