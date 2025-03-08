const userService = require("../services/userService");

class UserController{
    async getAllUsers(req, res){
        try{
            const users = await userService.getAllUsers();
            res.json(users)
        }
        catch(err){
            res.status(500).json({error: err.message});
        }
    }

    async getUserById(req, res){
        try{
            const users = await userService.getUserById(req.params.id);
            res.json(users);
        }
        catch(err){
            res.status(500).json({error: err.message});
        }
    }
}

module.exports = new UserController;