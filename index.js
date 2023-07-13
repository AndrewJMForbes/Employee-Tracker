const inquirer = require('inquirer')
const db = require('./db/query')

function init(){

  inquirer.prompt([
      {
          type: 'list',
          message: 'What would you like to do?',
          name: 'actions',
          choices:[
              {
                  name:'View All Departments',
                  value:'viewDepts'
              },
              {
                  name:'View All Roles',
                  value:'viewRoles'
              },
              {
                  name:'View All Employees',
                  value:'viewEmployees'
              },
              {
                  name:'Add A Department',
                  value:'addDept'
              },
              {
                  name:'Add A Role',
                  value:'addRole'
              },
              {
                  name:'Add An Employee',
                  value:'addEmployee'
              },
              {
                  name:`Update An Employee's Role`,
                  value:'updateEmployee'
              },
              {
                  name:`Quit Application`,
                  value:'quit'
              },
          ]
      }
  ]).then((response)=>{
      if(response.actions == 'viewDepts'){
           getDepts();
      }
      else if(response.actions == 'viewRoles'){
         getRoles();
      }
      else if(response.actions == 'viewEmployees'){
          getEmployees();
      }
      else if(response.actions == 'addDept'){
          addDeptInfo();
      }
      else if(response.actions == 'addRole'){
          addRole();
      }
      else if(response.actions == 'addEmployee'){
          addEmployee();
      }
      if(response.actions == 'updateEmployee'){
          updateEmployeeRole();
      }
      else if(response.actions == 'quit'){
          process.exit();
      }
  })
}
init();