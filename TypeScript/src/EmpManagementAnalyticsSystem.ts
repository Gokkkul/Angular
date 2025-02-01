enum roles{
    Manager = "Manager",
    Developer = "Developer",
    Intern = "Intern"
};

interface Employee{
    id: number,
    name: string,
    email: string,
    role: roles, 
    status: "active" | "inactive"
}


type updateEmployee = Partial<Employee>;

// Update Employee
function updateEmployee(employee: Employee, updates: Partial<Employee>): Employee{
    return {... employee, ...updates};
}

type EmployeeSummary = Pick<Employee, "name" | "role">;

function generateEmployeeSummary(employee: Employee): EmployeeSummary {
    return{
        name: employee.name,
        role: employee.role,
    };
}

type EmployeeMap = Record<string, Employee[]>;

function groupEmployeeByRole(employees: Employee[]): EmployeeMap{
    return employees.reduce((map, employee) => {
        if (!map[employee.role]){
            map[employee.role] = [];
        }
        map[employee.role].push(employee);
        return map;
    }, {} as EmployeeMap)
}

let employees: Employee [] = [];

employees.push({
    id: 1,
    name: "Tony Stark",
    email: "tonystark@gmail.com",
    role: roles.Manager,
    status: "active"
})

employees.push({
    id: 2,
    name: "Steve Rogers",
    email: "steverogers@gmail.com",
    role: roles.Developer,
    status: "active"
})

employees.push({
    id: 3,
    name: "Peter Parker",
    email: "peterparker@gmail.com",
    role: roles.Developer,
    status: "active"
})

employees.push({
    id: 4,
    name: "Bruce Wayne",
    email: "brucewayne@gmail.com",
    role: roles.Intern,
    status: "active"
})



let Tony = employees[0];
Tony = updateEmployee(Tony, {status: "inactive"});

const EmployeeMap = groupEmployeeByRole(employees);
console.log("Employees grouped by role");

console.table(EmployeeMap);;

const employeeSummaries = employees.map(generateEmployeeSummary);
console.log("Employee Sumaries");

console.table(employeeSummaries);



// type employeeByRole = Record<roles, Employee[]>;

// const employee: Employee[] = [
//     {id: 101, name: "Tony Stark", email: "tonystark@gmail.com", role: roles.Manager, status:"active"},
//     {id: 102, name: "Steve Rogers", email: "steverogers@gmail.com", role: roles.Developer, status: "active"},
//     {id: 103, name: "Peter Parker", email: "peterparker@gmail.com", role: roles.Intern, status: "active"}
// ]


// create interface
// id , activity, date
// logger function - id task/work, considtion - if role not manager and task conatain approve print error msg
// log in array 

// interface Activity{
//     activityId: number;
//     empId: number;
//     activity: string;
//     timestamp: Date;
// }

// const activities: Activity[] = [];

// function logActitvity(empId:number, activity: string) {
//     const emp = employee.find(emp => emp.id === empId);
//     if(employee && emp?.status  === 'active'){
//         activities.push({
//             empId, activityId: 0, activity: "", timestamp: new Date()
//         });
//     }
// }


