describe('User wants to sign up', function() {
  it('Gets, types and asserts', function() {
    cy.visit('https://kyber.arche.services/curriculum/4567b1f1-07f0-4764-8d4a-351d624e5445/activity/2b6b9266-079d-4f14-b169-0c0360d1dc08')
    // This will click the "Sign Up" link at the bottom of the page
    cy.get('.c00240').click()
    //Searches for the string
    //If the string exists, that's good enough for this test
    cy.contains('Sign up for a new account below.')
  })
})