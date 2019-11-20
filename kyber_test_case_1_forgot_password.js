describe('Follows the Forgot Password link', function() {
  it('Gets and asserts', function() {
    cy.visit('https://kyber.arche.services/curriculum/4567b1f1-07f0-4764-8d4a-351d624e5445/activity/2b6b9266-079d-4f14-b169-0c0360d1dc08')
    //Upon visiting the URL, this test clicks the Forgot Password link, and makes sure it leads to the expected URL
    cy.contains('Forgot Password').click()
    // Should be on a new URL which includes 'https://kyber.arche.services/forgot-password'
    // Confirms Forgot Password link sends the user somewhere expected
    cy.url().should('include', 'https://kyber.arche.services/forgot-password')

  })
})