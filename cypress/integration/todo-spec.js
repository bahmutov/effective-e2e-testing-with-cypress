const url = 'http://todomvc.com/examples/angular2/'
it('opens todo app', () => {
  cy.visit(url)
})

it('is focused on new item', () => {
  cy.visit(url)
  cy.focused().should('have.class', 'new-todo')
})

context.only('New Todo', () => {
  beforeEach(() => {
    cy.visit(url)
  })

  const firstTodo = 'Learn Cypress'

  it('adds 1 todo', () => {
    cy.get('.new-todo').type(firstTodo).type('{enter}')
    cy.get('.todo-list li')
      .first()
      .find('label').should('eq', firstTodo)
  })
})
