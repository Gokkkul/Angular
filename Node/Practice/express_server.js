const express = require('express');

app = express();

const PORT = 3000;

app.get("/", (req,res) => {
    res.send("Hello from Gokul...")
})



app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}...`);
});