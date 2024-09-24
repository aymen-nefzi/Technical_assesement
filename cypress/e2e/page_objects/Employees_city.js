class EmployeePage {
    
    isContentTableVisible() {
        cy.get('#contenttabletreeGrid').should('be.visible');
    }

    checkColumnHeaderExists(columnName) {
        cy.get('.jqx-grid-column-header.jqx-widget-header.jqx-disableselect')
            .find('span')
            .contains(columnName)
            .then((element) => {
                expect(element).to.exist;
            });
    }
    selectAnEmployee(id){
        cy.get("[class='jqx-tree-grid-collapse-button jqx-grid-group-collapse jqx-icon-arrow-right']").click();
        cy.get(`#row${id}treeGrid`).find('.jqx-checkbox-default').click();
        cy.get('#btn').click();
    let cellValue ;
    let firstname;
    cy.get(`#row${id}treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-title`).invoke('text').then((text)=>{
        firstname=text.trim();
    })
    cy.get(`#row${id}treeGrid > td:nth-child(4)`).invoke('text').then((text) => {      
       cellValue = text.trim();
     }).then(() =>
      { 
    cy.log(`The cell value is: ${cellValue}`);
     cy.get('.jqx-listitem-state-normal').should('be.visible');
     if (!cellValue){
        cy.get('.jqx-listitem-state-normal').should('contain', `${firstname} city is not mentioned`);
     }else{
        cy.get('.jqx-listitem-state-normal').should('contain', `${firstname} is from `+ cellValue);
     }
      });
    }
    selectMultipleEmployees(){
        cy.get('.jqx-cell.jqx-grid-cell.jqx-item.jqx-grid-cell-nowrap').first().find('.jqx-checkbox-default').click();
        cy.get('.jqx-cell.jqx-grid-cell.jqx-item.jqx-grid-cell-nowrap').eq(1).find('.jqx-checkbox-default').click();
        cy.get('.jqx-cell.jqx-grid-cell.jqx-item.jqx-grid-cell-nowrap').eq(3).find('.jqx-checkbox-default').click();
        cy.get('.jqx-cell.jqx-grid-cell.jqx-item.jqx-grid-cell-nowrap').eq(5).find('.jqx-checkbox-default').click();
        cy.get('#btn').click();
        const rowIds = ['#row0treeGrid', '#row1treeGrid', '#row3treeGrid', '#row5treeGrid'];
        const cellValues = [];   
        rowIds.forEach((rowId) => {
        cy.get(`${rowId} > td:nth-child(4)`)
            .invoke('text')
            .then((text) => {
            cellValues.push(text.trim());
            });
        });
        cy.then(() => {
      cellValues.forEach((value, index) => {
        cy.get('#listBoxSelected').should('contain', 'is from '+cellValues[index]);
      });
      
    });   

    cy.get('.jqx-listitem-element').should('have.length', 4);
    }

}
export default EmployeePage;
