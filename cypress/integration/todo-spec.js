const url = 'http://todomvc.com/examples/angular2/'
it('opens todo app', () => {
  cy.visit(url)
})

it('is focused on new item', () => {
  cy.visit(url)
  cy.focused().should('have.class', 'new-todo')
})
