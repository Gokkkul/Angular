const empService = require("../services/empService");
import { Request, Response } from "express";
// const  { Request, Response } = require ('express')

class empController{
    // async getPendingLeaves(req: Request, res: Response){
    //     try{
    //         const users = await userService.getAllUsers();
    //         res.json(users)
    //     }
    //     catch(err){
    //         res.status(500).json({error: err.message});
    //     }
    // }

    // async getUserById(req, res){
    //     try{
    //         const users = await userService.getUserById(req.params.id);
    //         res.json(users);
    //     }
    //     catch(err){
    //         res.status(500).json({error: err.message});
    //     }
    // }

    async getEmployees(req: Request, res: Response){
        try {
            const emp = await empService.getEmployees();
            res.json(emp);
        } catch (err: any) {
            res.status(500).json({error: err.message});
        }
    }

    async getPendingLeaves(req: Request, res: Response) {
        try {
            const pendingLeaves = await empService.getPendingLeave();
            res.json(pendingLeaves);
        } catch (error) {
            console.error('Error fetching pending leaves:', error);
            res.status(500).json({ message: 'An error occurred while fetching pending leaves.' });
        }
    }

    async addLeave(req: Request, res: Response){
        try {
            const data = req.body
            
            const addleave = await empService.addLeave({id:data.id, employee_id: data.employee_id, start_Date: data.start_Date, end_Date: data.end_Date, leave_type: data.leave_type, status: data.status, reason: data.reason});
            res.json(addleave);
        } catch (error) {
            res.status(500).json({ message: 'An error occurred while adding leaves.', error })
        }
    }

    async getLeavesById(req: Request, res: Response){
        try {
            console.log(req.params.id);
            const leavesById = await empService.getLeavesById(req.params.id);
            res.json(leavesById);
        } catch (error) {
            res.status(500).json({ message: 'An error occurred while fetching leaves by Id.' });
        
        }
    }
    
}

module.exports = new empController();

export {}