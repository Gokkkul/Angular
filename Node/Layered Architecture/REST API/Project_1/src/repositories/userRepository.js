const { poolPromise } = require("../config/database");

class UserRepository{

    async getPendingLeaves(){
        const pool = await poolPromise;
        const result = await pool.request().query('select * from users_tbl');
        return result.recordset;
    }

    async getUserById(id){
        const pool = await poolPromise;
        const result = await pool.request().query(`select * from users_tbl where user_id = ${id}`);
        return result.recordset[0];
    }
}

module.exports = new UserRepository