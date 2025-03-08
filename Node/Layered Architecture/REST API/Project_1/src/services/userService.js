const userRepository = require("../repositories/userRepository");

class UserService{

    async getAllUsers(){
        return await userRepository.getAllUsers();
    }
    async getUserById(id){
        return await userRepository.getUserById(id);
    }
    
}

module.exports = new UserService();

