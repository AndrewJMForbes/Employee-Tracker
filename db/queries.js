const connection = require('./connection')
class DB{
    constructor(connection){
        this.connection = connection;
    }
    viewDepartments(){
        return this.connection.promise().query(`SELECT * FROM department`)
    }
    viewRoles(){
        return this.connection.promise().query(`SELECT * FROM role`)
    }
    viewEmployees(){
        return this.connection.promise().query(`SELECT * FROM employee`)
    }
    addEmployee(fName, lName, role_id, manager_id){
        return this.connection.promise().query(`INSERT INTO employee (first_name, last_name, role_id,manager_id) VALUES (?,?,?,?)`, [fName, lName, role_id, manager_id])
    }
    addRole(title, salary, department_id){
        return this.connection.promise().query(`INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`, [title, salary, department_id])
    }
    addDept(name){
        return this.connection.promise().query(`INSERT INTO department(name) VALUES (?)`,name)
    }
    updateEmployeeRole(role_id, employee_id){
        return this.connection.promise().query(`UPDATE employee SET role_id = ? WHERE id = ? `,[role_id, employee_id])
    }
}

module.exports = new DB(connection);