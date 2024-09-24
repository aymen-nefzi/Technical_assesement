class Login {
    visit() {
        cy.visit('http://localhost:8080/employees.html');
        cy.get('body').should('be.visible');
        cy.wait(2000);
    }
  
    enterUsername(username) {
        cy.get('input[placeholder="username"]').should('exist')
        cy.get('input[placeholder="username"]').should('be.visible')
        cy.get('input[placeholder="username"]').type(username);
    }
  
    enterPassword(password) {
        cy.get('input[placeholder="password"]').should('exist')
        cy.get('input[placeholder="password"]').should('be.visible')
        cy.get('input[placeholder="password"]').type(password);
    }
  
    clickSignIn() {
        cy.wait(3000);
        cy.get('input[value="Sign in"]').should('exist');
        cy.get('input[value="Sign in"]').should('not.be.disabled');
        cy.get('input[value="Sign in"]').click();
    }
    invalidSignIn() {
      cy.wait(3000);
      cy.get('input[value="Sign in"]').should('exist');
      cy.get('input[value="Sign in"]').should('be.disabled');
  }
  }
  export default Login;  