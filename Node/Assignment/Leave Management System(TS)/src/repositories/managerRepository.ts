const { poolPromise } = require("../config/database");

class managerRepository{

    async getPedingLeave(){
        const pool = await poolPromise;
        const result = await pool.request().query(`select * from leaves_table2008 where status = 'Pending'`);
        return result.recordset;
    }

    async approveLeave(id: number){
        const pool = await poolPromise;
        const result = await pool.request().input('id', id).query(`Update leaves_table2008 set status = 'Approve' where employee_id = @id`)
    }

    async rejectLeave(id: number){
        const pool = await poolPromise;
        const result = await pool.request().input('id', id).query(`Update leaves_table2008 set status = 'Pending' where employee_id = @id`)
    }
}

module.exports = new managerRepository()
export {}