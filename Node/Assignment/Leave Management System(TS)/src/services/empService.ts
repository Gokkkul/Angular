import { Ileave } from "../repositories/leave";

const empRepository = require("../repositories/empRepository");

class empService{

    async getEmployees(){
        return await empRepository.getEmployees();
    }

    async getPendingLeave(){
        return await empRepository.getPedingLeave();
    }

    async addLeave(data:Ileave){
        return await empRepository.addLeave(data);
    }

    async getLeavesById(id:number){
        return await empRepository.getLeavesById(id);
    }

    
}

module.exports = new empService();

export {};

