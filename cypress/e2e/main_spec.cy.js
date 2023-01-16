describe('EZ Memes app', () => {
  beforeEach(() => {
    cy.intercept('https://www.reddit.com/r/memes.json', {
      method: 'GET',
      fixture: '../fixtures/saved_memes.json'
    })
    cy.visit('http://localhost:3001/')
  })
  it('has a title', () => {
    cy.get('.nav-bar').contains('EZMemes')
    cy.get('.nav-bar').contains('Home')
    cy.get('.nav-bar').contains('My Memes')
  })

  it('displays a meme on page load', () => {
    cy.get('.meme-img').should('have.attr', 'alt-text', 'Random meme image')
  })
})