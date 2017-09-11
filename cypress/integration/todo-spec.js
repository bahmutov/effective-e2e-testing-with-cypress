// common frameworks
// const url = 'http://todomvc.com/examples/angularjs'
const url = 'http://todomvc.com/examples/angular2/'

// Vue and Polymer uses different CSS names
// .new-todo instead of #new-todo
// .todo-list instead of #todo-list
// const url = 'http://todomvc.com/examples/vue/'
// const url = 'http://todomvc.com/examples/polymer/index.html'

it('opens todo app', () => {
  cy.visit(url)
})

it('is focused on new item', () => {
  cy.visit(url)
  cy.focused().should('have.class', 'new-todo')
})

context('New Todo', () => {
  beforeEach(() => {
    cy.visit(url)
  })

  const firstTodo = 'Learn Cypress'

  it('adds 1 todo', () => {
    cy.get('.new-todo').type(firstTodo).type('{enter}')
    cy.get('.todo-list li')
      .first()
      .find('label').should('contain', firstTodo)
  })
})
