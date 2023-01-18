describe('EZ Memes app', () => {
  it('should show an error if there is a network problem', () => {
    cy.intercept('https://www.reddit.com/r/memes.json', {
      method: 'GET',
      fixture: '',
    })
    cy.visit('http://localhost:3000/')
    cy.get('body').contains(
      "Couldn't communicate with the server. Try again later."
    )
  })

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
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.meme-img').should('be.visible')
  })

  it('displays a footer on page load', () => {
    cy.get('.footer').contains('Created by Justen Anderson ⓒ 2023')
  })

  it('should show a random meme when the next button is clicked', () => {
    cy.get('.next-button').click()
    cy.get('.meme-img').should('have.attr', 'alt', 'Random meme image')
    cy.get('.meme-img').should(
      'have.attr',
      'src',
      'https://i.redd.it/9sgbkfnagx4a1.jpg'
    )
  })

  it('should add the current meme to the saved memes collection when the save button is clicked', () => {
    cy.get('.save-button').click()
    cy.get('.next-button').click()
    cy.get('.save-button').click()
    cy.get('.next-button').click()
    cy.get('.save-button').click()
    cy.get('.next-button').click()
    cy.get('[data-cy="my-memes"]').click()
    cy.url().should('eq', 'http://localhost:3000/my-memes')
    cy.get('.my-memes').should('be.visible')
    cy.get(':nth-child(1) > .saved-image').should(
      'be.visible')
    cy.get(':nth-child(2) > .saved-image').should(
      'have.attr',
      'src',
      'https://i.redd.it/9sgbkfnagx4a1.jpg'
    )
    cy.get(':nth-child(3) > .saved-image').should(
      'have.attr',
      'src',
      'https://i.redd.it/9sgbkfnagx4a1.jpg'
    )
    cy.get(':nth-child(4) > .saved-image').should('not.exist')
  })

  it('should delete saved memes when the delete button is clicked', () => {
    cy.get('.save-button').click()
    cy.get('.next-button').click()
    cy.get('[data-cy="my-memes"]').click()
    cy.get('.saved-meme-container').should('be.visible')
    cy.get('.saved-meme-container > button').click()
    cy.get('.save-meme-message').contains('You haven\'t saved any memes. Go save some!')
  })

  it('should say "You haven\'t saved any memes. Go save some!" if there are no saved memes and display a meme about not having memes', () => {
    cy.visit('http://localhost:3000/my-memes/')
    cy.get('.save-meme-message').contains('You haven\'t saved any memes. Go save some!')
    cy.get('.no-meme-image').should('be.visible')
  })
})
