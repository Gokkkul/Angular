class User{
    constructor(id, name, email, isActive = true){
     this.id = id;
     this.name = name;
     this.email = email;
     this.isActive = isActive;   
    }
}
module.exports = User