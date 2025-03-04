const express = require("express");
const {sql, poolPromise} = require("./database_connectivity");
const { AssertionError } = require("assert");

const app = express();

app.use(express.json());

app.get("/data", async (req,res) => {
    try{
        const pool = await poolPromise;
        const result = await pool.request().query("select * from customer_tbl");
        res.json(result.recordset);
    }catch(err){
        res.status(500).send(err.message);
    }
});


app.post("/data", async(req, res) =>{
    try{
        const { cust_id, cust_name, cust_age, cust_city } = req.body;
        const pool = await poolPromise;
        await pool
        .request()
        .input("cust_id", sql.Int, cust_id )
        .input("cust_name", sql.Int, cust_name )
        .input("cust_age", sql.Int, cust_age )
        .input("cust_city", sql.Int, cust_city )
    }
    catch(error){
        console.log(error);
    }
})

app.put("/data/:id", async(req, res) =>{
    try{
        const {cust_id} = req.params;
    }
    catch(error){
        console.log(error);
        
    }
})

app.listen(5000, () => {
    console.log("Server started at localhost:5000");
    
})