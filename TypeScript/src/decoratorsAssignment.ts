class User{
    constructor(public id: number, public name: string, public role: string){

    }
}

const rolePermissions: Record<string, string[]> = {
    Admin: ['viewReports', 'editReports', 'deleteReports'],
    Manager: ['viewReports','editReports'],
    Employee: ['viewReports']
};

function Authorize(action: string){
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (user: User, ...args: any[]){
            if(rolePermissions[user.role] && rolePermissions[user.role].includes(action)){
                return originalMethod.apply(this,[user, ...args]);
            }else{
                console.error(`Access Denied: ${user.name} does not have permission to ${action}`);
                return `Access Denied for ${user.name}`;
            }
        };
    };
}

class ReportService{

    @Authorize('viewReports')
    viewReports(user: User): string{
        return `${user.name} is viewing the reports.`
    }

    @Authorize('editReports')
    editReports(user: User): string{
        return `${user.name} is editing the reports.`
    }

    @Authorize('deleteReports')
    deleteReports(user: User): string{
        return `${user.name} is deleting the reports.`
    }
}

const adminUser = new User(1,'Tony Stark', 'Admin');
const managerUser = new User(2,'Steve Rogers', 'Manager');
const employeeUser = new User(3,'Thor', 'Employee');

const reportService = new ReportService();

console.log(reportService.viewReports(adminUser));
console.log(reportService.editReports(adminUser));
console.log(reportService.deleteReports(adminUser));

console.log(reportService.viewReports(managerUser));
console.log(reportService.editReports(managerUser));
console.log(reportService.deleteReports(managerUser));

console.log(reportService.viewReports(employeeUser));
console.log(reportService.editReports(employeeUser));
console.log(reportService.deleteReports(employeeUser));


