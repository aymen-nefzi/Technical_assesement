import EmployeePage from '../page_objects/Employees_city';
import Login from '../page_objects/Login'
const employeePage = new EmployeePage();
const login = new Login();
describe('Employee city Tests', () => {
    beforeEach(() => {
        login.visit();
        employeePage.isContentTableVisible();  
    });
    it('checks if the table exists',()=>{
        login.visit();
        employeePage.isContentTableVisible();
    })
    it('checks if the columns headers are correct',()=>{
        
        employeePage.checkColumnHeaderExists('FirstName');
        employeePage.checkColumnHeaderExists('LastName');
        employeePage.checkColumnHeaderExists('Title');
        employeePage.checkColumnHeaderExists('City');
    })
    it('check the employee city',()=>{
        employeePage.selectAnEmployee(2);
    })
    it('check multiple emplyees cities', () => {
        employeePage.selectMultipleEmployees();
  });

  });

