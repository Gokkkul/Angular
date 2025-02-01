
// Creating userRoles enum
enum userRoles{
    Admin = "Admin",
    Manager = "Manager",
    Employee = "Employee"
}

// Creating User interface
interface User{
    id: number,
    name: string,
    email: string,
    role: userRoles | string,
    phoneNumber?: string
}


    

// Creating a createUser function
let users: User[] = [];
function createUser(user: User): User {
    users.push(user)
    return user
}

// Creating a function use filter user by roles
function getUserByRole(role: userRoles | string): void{
    for (let i = 0; i < users.length; i++) {
        if (users[i].role==role) {
            console.log(users[i])
        }
        
    }
}











// let users: User[] = [];
// function createUser(id: number, name: string, email: string, role: userRoles | string, phoneNumber?: string): void {
    //     let user={
        //         id:id,
        //         name:name,
        //         email:email,
        //         role:role,
        //         phoneNumber:phoneNumber
        //     }
        //     users.push(user)
        // }
