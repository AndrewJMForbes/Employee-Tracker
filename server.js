const inquirer = require('inquirer')
const db = require('./db/queries')
function init(){

    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'actions',
            choices:[
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Add A Department',
                    'Add A Role',
                    'Add An Employee',
                    `Update An Employee's Role`,
                    `Quit Application`,
            ]
        }
    ]).then((response)=>{
        console.log(response.actions)
        if(response.actions == 'View All Departments'){
            console.log('Yay')
            getDepts();

        }
        else if(response.actions == 'View All Roles'){
           getRoles();
        }
        else if(response.actions == 'View All Employees'){
            getEmployees();
        }
        else if(response.actions == 'Add A Department'){
            addDeptInfo();
        }
        else if(response.actions == 'Add A Role'){
            addRole();
        }
        else if(response.actions == 'Add An Employee'){
            addEmployee();
        }
        else if(response.actions == `Update An Employee's Role`){
            updateEmployeeRole();
        }
        else if(response.actions == 'quit'){
            console.log('Exit')
            process.exit();
        }
    })
}
;

function getDepts(){
    db.viewDepartments().then(([rows]) =>{
        console.table(rows)
     }).then(()=>init())
}
function getRoles(){
    db.viewRoles().then(([rows]) =>{
        console.table(rows)
     }).then(()=>init())
}
function getEmployees(){
    db.viewEmployees().then(([rows]) =>{
        console.table(rows)
     }).then(()=>init())
}
function addDeptInfo(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'name'
        }
    ]).then((response)=>{
        db.addDept(response.name)
        .then(console.log(`Added the ${response.name} department.`))
    }).then(()=>init())
}
function addRole(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of the role?',
            name: 'title'
        },
        {
            type: 'number',
            message: `What is the role's salary?`,
            name: 'salary'
        },
        {
            type: 'number',
            message: 'What is the department ID?',
            name: 'department'
        }

    ]).then((response)=>{
        db.addRole(response.title, response.salary, response.department)
        .then(console.log(`Added the ${response.title} role.`))
    }).then(()=>init())
}
function addEmployee(){
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the employee's first name?`,
            name: 'fName'
        },
        {
            type: 'input',
            message: `What is the employee's last name?`,
            name: 'lName'
        },
        {
            type: 'number',
            message: `What is the role ID?`,
            name: 'role'
        },
        {
            type: 'number',
            message: 'What is the manager ID?',
            name: 'managerID'
        }

    ]).then((response)=>{
        if(response.managerID){
            db.addEmployee(response.fName, response.lName, response.role, response.managerID)
        .then(console.log(`Added ${response.fName} ${response.lName} to employee table.`))
        }else{
            db.addEmployee(response.fName, response.lName, response.role, null)
        .then(console.log(`Added ${response.fName} ${response.lName} to employee table.`))
        }
        
    }).then(()=>init())
}
function updateEmployeeRole(){
    inquirer.prompt([
        {
            type: 'number',
            message: 'What is the employee ID?',
            name: 'employee'
        },
        {
            type: 'number',
            message: `What is the role ID?`,
            name: 'role'
        },

    ]).then((response)=>{
        db.updateEmployeeRole(response.role,response.employee)
        .then(console.log(`Updated employee with ID: ${response.employee} to role with ID: ${response.role}`))
    }).then(()=>init())
}
init();