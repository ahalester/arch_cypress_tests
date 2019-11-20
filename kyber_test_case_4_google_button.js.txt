describe('User wants to authenticate with Google', function() {
  it('Gets, types and asserts', function() {
    // This test will fail if running Cypress at its defaults - it prevents you from following a link to a domain outside your app
    cy.visit('https://kyber.arche.services/curriculum/4567b1f1-07f0-4764-8d4a-351d624e5445/activity/2b6b9266-079d-4f14-b169-0c0360d1dc08')
    // This will click the "Continue With Google" button at the top of the page
    cy.get('.c00228').click()
    //Searches for the string
    // If the string exists, that's good enough for this test
    cy.contains('Sign in with Google')
  })
})