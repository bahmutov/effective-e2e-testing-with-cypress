// common frameworks
const url = 'http://todomvc.com/examples/angularjs'
// const url = 'http://todomvc.com/examples/angular2/'

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
  cy.focused().should('have.id', 'new-todo')
})

describe.only('TodoMVC main features', () => {
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

describe('TodoMVC main features with assertions', () => {
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

context('New Todo', () => {
  beforeEach(() => {
    cy.visit(url)
  })

  const firstTodo = 'Learn Cypress'

  it('adds 1 todo', () => {
    cy.get('#new-todo').type(firstTodo).type('{enter}')
    cy.get('#todo-list li')
      .first()
      .find('label').should('contain', firstTodo)
  })
})
