const express = require('express');
const {sql, poolPromise} = require("./database_connectivity");

app = express();

app.get("/data", async (req,res) => {
    try{
        const pool = await poolPromise;
        const result = await pool.request().query("select * from orders_tbl");
        res.json(result.recordset);
    }catch(err){
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => {
    console.log('Server started at localhost:3000');
})