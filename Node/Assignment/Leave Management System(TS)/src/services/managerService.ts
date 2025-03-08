import { Ileave } from "../repositories/leave";

const managerRepository = require("../repositories/managerRepository");

class managerService{

    async getPendingLeave(){
        return await managerRepository.getPedingLeave();
    }
    async rejectLeave(){
        return await managerRepository.rejectLeave();
    }
    async approveLeave(){
        return await managerRepository.approveLeave();
    }

}

module.exports = new managerService();

export {};

