const managerService = require("../services/managerService");
import { Request, Response } from "express";
// const  { Request, Response } = require ('express')

class managerController{
   


    async rejectLeave(req: Request, res: Response){
        try {
            const result = managerService.rejectLeave(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({error:'Error in rejecting'});
        }
    }

    async approveLeave(req: Request, res: Response){
        try {
            const result = managerService.approveLeave(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({error:'Error in approving'});
        }
    }
    
}

module.exports = new managerController();

export {}