describe('Logging in, starting the video at the beginning, then hitting the pause button 10 seconds in to the video', function() {
  it('Gets, types and asserts', function() {
    // Start at the login page
    cy.visit('https://kyber.arche.services/curriculum/4567b1f1-07f0-4764-8d4a-351d624e5445/activity/2b6b9266-079d-4f14-b169-0c0360d1dc08')

    // Click the "Sign In" button with proper credentials
    cy.get('input[type=text]').type('gregg+tester@archemedx.com')
    cy.get('input[type=password]').type(' ')
    cy.get('.c00308').click()
    // Make sure we land on the proper page
    cy.contains('Standard Test Activity')
    // Start video at the beginning
    cy.get('button.c0020.c00427').contains('Start At The Beginning').click({force: true})
    cy.wait(11000)
    // Hit pause at the 10sec mark
    cy.get('.fa-pause').click({force: true})
    // Make sure hitting pause has been successful
    cy.get('.fa-play-circle')
  })
})

describe('Logging in, starting at the beginning of the video then hitting neutral space in the player to pause 10 seconds in to the video', function() {
  it('Gets, types and asserts', function() {
    // Start at the login page
    cy.visit('https://kyber.arche.services/curriculum/4567b1f1-07f0-4764-8d4a-351d624e5445/activity/2b6b9266-079d-4f14-b169-0c0360d1dc08')

    // Click the "Sign In" button with proper credentials
    cy.get('input[type=text]').type('gregg+tester@archemedx.com')
    cy.get('input[type=password]').type(' ')
    cy.get('.c00308').click()
    // Make sure we land on the proper page
    cy.contains('Standard Test Activity')
    cy.get('button.c0020.c00427').contains('Start At The Beginning').click({force: true})
    cy.wait(11000)
    // Hit pause in the neutral space of the player at the 10sec mark
    cy.get('.vjs-tech').click()
    // Make sure hitting pause has been successful
    cy.get('.fa-play-circle')
  })
})

describe('Logging in, hitting resume the video, then hitting the pause button 10 seconds from that point', function() {
  it('Gets, types and asserts', function() {
    // Start at the login page
    cy.visit('https://kyber.arche.services/curriculum/4567b1f1-07f0-4764-8d4a-351d624e5445/activity/2b6b9266-079d-4f14-b169-0c0360d1dc08')

    // Click the "Sign In" button with proper credentials
    cy.get('input[type=text]').type('gregg+tester@archemedx.com')
    cy.get('input[type=password]').type(' ')
    cy.get('.c00308').click()
    // Make sure we land on the proper page
    cy.contains('Standard Test Activity')
    // Resume the video
    cy.get('button.c0020.c00427').contains('Resume Where You Left Off').click({force: true})
    cy.wait(11000)
    // Hit pause 10 seconds later
    cy.get('.fa-pause').click({force: true})
    // Make sure hitting pause has been successful
    cy.get('.fa-play-circle')
  })
})

describe('Logging in, hitting resume the video, then hitting neutral space to pause 10 seconds from that point', function() {
  it('Gets, types and asserts', function() {
    // Start at the login page
    cy.visit('https://kyber.arche.services/curriculum/4567b1f1-07f0-4764-8d4a-351d624e5445/activity/2b6b9266-079d-4f14-b169-0c0360d1dc08')

    // Click the "Sign In" button with proper credentials
    cy.get('input[type=text]').type('gregg+tester@archemedx.com')
    cy.get('input[type=password]').type(' ')
    cy.get('.c00308').click()
    // Make sure we land on the proper page
    cy.contains('Standard Test Activity')
    // Resume the video
    cy.get('button.c0020.c00427').contains('Resume Where You Left Off').click({force: true})
    cy.wait(11000)
    // Hit neutral space to pause 10 seconds later
    cy.get('.vjs-tech').click()
    // Make sure hitting pause has been successful
    cy.get('.fa-play-circle')
  })
})