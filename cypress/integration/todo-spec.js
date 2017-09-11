const url = 'http://todomvc.com/examples/angularjs'

describe.only('TodoMVC main features', function () {
  beforeEach(() => cy.visit(url))
  it('adds and removes items', () => {
    const todo = 'Learn Cypress'
    cy.get('#new-todo').type(todo).type('{enter}')
    cy.get('#new-todo').type(todo).type('{enter}')
    cy.get('#new-todo').type(todo).type('{enter}')
    cy.get('input.toggle').click({multiple: true})
    cy.contains('Clear completed').click()
  })
})

describe('TodoMVC main features with assertions', function () {
  beforeEach(() => cy.visit(url))
  it('adds and removes items', () => {
    const todo = 'Learn Cypress'
    cy.get('#new-todo').type(todo).type('{enter}')
    cy.get('#new-todo').type(todo).type('{enter}')
    cy.get('#new-todo').type(todo).type('{enter}')
    cy.contains('#todo-count', 3)
    cy.get('#todo-list li').should('have.length', 3)
    cy.get('input.toggle').click({multiple: true})
    cy.contains('#todo-count', 0)
    cy.contains('Clear completed').click()
    cy.get('#todo-list li').should('have.length', 0)
  })
})
