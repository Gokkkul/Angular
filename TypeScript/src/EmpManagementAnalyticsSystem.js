var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var roles;
(function (roles) {
    roles["Manager"] = "Manager";
    roles["Developer"] = "Developer";
    roles["Intern"] = "Intern";
})(roles || (roles = {}));
;
// Update Employee
function updateEmployee(employee, updates) {
    return __assign(__assign({}, employee), updates);
}
function generateEmployeeSummary(employee) {
    return {
        name: employee.name,
        role: employee.role,
    };
}
function groupEmployeeByRole(employees) {
    return employees.reduce(function (map, employee) {
        if (!map[employee.role]) {
            map[employee.role] = [];
        }
        map[employee.role].push(employee);
        return map;
    }, {});
}
var employees = [];
employees.push({
    id: 1,
    name: "Tony Stark",
    email: "tonystark@gmail.com",
    role: roles.Manager,
    status: "active"
});
employees.push({
    id: 2,
    name: "Steve Rogers",
    email: "steverogers@gmail.com",
    role: roles.Developer,
    status: "active"
});
employees.push({
    id: 3,
    name: "Peter Parker",
    email: "peterparker@gmail.com",
    role: roles.Developer,
    status: "active"
});
employees.push({
    id: 4,
    name: "Bruce Wayne",
    email: "brucewayne@gmail.com",
    role: roles.Intern,
    status: "active"
});
var Tony = employees[0];
Tony = updateEmployee(Tony, { status: "inactive" });
var EmployeeMap = groupEmployeeByRole(employees);
console.log("Employees grouped by role");
console.table(EmployeeMap);
;
var employeeSummaries = employees.map(generateEmployeeSummary);
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
