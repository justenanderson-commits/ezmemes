describe('EZ Memes app', () => {
  // it('should show an error if there is a network problem', () => {
  //   cy.intercept('https://www.reddit.com/r/memezzz.json', {
  //     method: 'GET',
  //     fixture: '',
  //   })
  //   cy.visit('http://localhost:3000/')
  //   cy.get('.text--error').contains(
  //     "Couldn't communicate with the server. Try again later."
  //   )
  // }) 
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('https://www.reddit.com/r/memes.json', {
      method: 'GET',
      fixture: '../fixtures/saved_memes.json',
    })
  })

  it('has a title', () => {
    cy.get('.nav-bar').contains('EZMemes')
    cy.get('.nav-bar').contains('Home')
    cy.get('.nav-bar').contains('My Memes')
  })

  it('displays a meme on page load', () => {
    cy.get('.meme-img').should('have.attr', 'alt-text', 'Random meme image')
    cy.get('.meme-img').should(
      'have.attr',
      'src',
      'https://i.redd.it/9sgbkfnagx4a1.jpg'
    )
  })

  it('displays a footer on page load', () => {
    cy.get('.footer').contains('Created by Justen Anderson ⓒ 2023')
  })

  // it('should show a random meme when the next button is clicked', () => {})

  // it('should add the current meme to the saved memes collection when the save button is clicked', () => {})
})
