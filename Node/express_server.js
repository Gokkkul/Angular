const express = require('express');

app = express();

app.get("/", (req,res) => {
    user = {
        id: 1,
        name: 'Gokul'
    }
    // res.send("Welcome to home page")
    res.send(user);
})

app.listen(3000, ()=>{
    console.log("Server create at localhost:3000");
    
});