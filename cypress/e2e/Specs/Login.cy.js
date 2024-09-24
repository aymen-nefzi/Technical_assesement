import Login from '../page_objects/Login'
describe('Login Tests', () => {
  const login = new Login();

  it('should login with valid credentials', () => {
      login.visit();
      login.enterUsername('Test');
      login.enterPassword('Test');
      login.clickSignIn();
  });
  it('should login with invalid credentials', () => {
    login.visit();
    login.enterUsername('Invalid');
    login.enterPassword('Invalid');
    login.invalidSignIn();
});
});

