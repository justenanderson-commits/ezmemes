describe('My memes opage of EZ Memes', () => {
  beforeEach(() => {
    cy.intercept('https://www.reddit.com/r/memes.json', {
      method: 'GET',
      fixture: '../fixtures/saved_memes.json',
    })
    cy.visit('http://localhost:3000/my-memes/')
  })

  it('should say "Save Some Memes" if there are no saved memes', () => {
    cy.visit('http://localhost:3000/my-memes/')
    cy.get('.save-meme-message').contains('Save some memes')
  })

//   it('should have a grid of saved memes', () => {
//     cy.get('.image')
//       .eq(0)
//       .should('have.attr', 'src', 'https://i.redd.it/9sgbkfnagx4a1.jpg')
//     cy.get('.image')
//       .eq(1)
//       .should('have.attr', 'src', 'https://i.redd.it/9sgbkfnagx4a1.jpg')
//     cy.get('.image')
//       .eq(2)
//       .should('have.attr', 'src', 'https://i.redd.it/9sgbkfnagx4a1.jpg')
//   })
// })

// it('should show an error if there is a network problem', () => {
//   cy.intercept('https://www.reddit.com/r/memezzz.json', {
//     method: 'GET',
//     fixture: '',
//   })
//   cy.visit('http://localhost:3000/')
//   cy.get('.text--error').contains(
//     "Couldn't communicate with the server. Try again later."
//   )
})
