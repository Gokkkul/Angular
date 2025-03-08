import { Ileave } from "./leave";

const { poolPromise } = require("../config/database");

class empRepository{

    async getPedingLeave(){
        const pool = await poolPromise;
        const result = await pool.request().query(`select * from leaves_table2008 where status = 'Pending'`);
        return result.recordset;
    }

    

    async getEmployees(){
        const pool = await poolPromise;
        const result = await pool.request().query(`select * from employee_leaves_tbl`);
        return result.recordset;
    }

    async addLeave(data: Ileave) {
        const pool = await poolPromise;
        await pool.request()
            .input('id', data.id)
            .input('employee_id', data.employee_id)
            .input('start_Date', data.start_Date)
            .input('end_Date', data.end_Date)
            .input('leave_type', data.leave_type)
            .input('status', data.status)
            .input('reason', data.reason)
            .query(
                `INSERT INTO leaves_table2008 
                (id, employee_id, start_Date, end_Date, leave_type, status, reason)
                VALUES (@id, @employee_id, @start_Date, @end_Date, @leave_type, @status, @reason)`
            );
        return 'Records added successfully...!';
    }

    async getLeavesById(id: number){
        const pool = await poolPromise;
        const result = await pool.request().query(`select * from leaves_table2008 where id = ${id}`);
        return result.recordset;
    }
    

  
}

module.exports = new empRepository()
export {}