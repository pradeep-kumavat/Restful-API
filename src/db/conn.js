const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentsapi")
.then(()=>{
    console.log("connection successfully with server");
}).catch(()=>{
    console.log("no connection");
});

