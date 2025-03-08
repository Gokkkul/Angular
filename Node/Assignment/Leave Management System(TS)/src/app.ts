const express = require('express');
const empRoutes = require("./routes/empRoutes");
const app = express();

app.use(express.json());

app.use("/employees", empRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`Sever is running on ${PORT}`);
});

