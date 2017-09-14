const url = 'http://todomvc.com/examples/angularjs'

it('opens todo app', () => {
  cy.visit(url)
})

// it('is focused on new item', () => {
//   cy.visit(url)
//   cy.focused().should('have.id', 'new-todo')
// })

// describe('New Todo', () => {
//   beforeEach(() => {
//     cy.visit(url)
//   })

//   it('loads the page', () => {
//     cy.contains('h1', 'todos')
//   })

//   const firstTodo = 'Learn Cypress'
//   it('adds 1 todo', () => {
//     cy.get('#new-todo')
//       .type(firstTodo)
//       .type('{enter}')
//     cy.get('#todo-list')
//       .find('li')
//       .first()
//       .find('label').should('contain', firstTodo)
//   })

//   it('adds 1 todo on iPhone', () => {
//     cy.viewport('iphone-6')
//     cy.get('#new-todo')
//       .type(firstTodo)
//       .type('{enter}')
//     cy.get('#todo-list')
//       .find('li')
//       .first()
//       .find('label').should('contain', firstTodo)
//   })
// })

// common frameworks

// const url = 'http://localhost:3000'
// const url = 'http://todomvc.com/examples/angular2/'

// Vue and Polymer uses different CSS names
// .new-todo instead of #new-todo
// .todo-list instead of #todo-list
// const url = 'http://todomvc.com/examples/vue/'
// const url = 'http://todomvc.com/examples/polymer/index.html'
