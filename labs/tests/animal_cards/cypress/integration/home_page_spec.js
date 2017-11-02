describe('The Home Page', function() {
  it('successfully loads', function() {
    // let's go
    cy.visit('/card.html')
    cy.get('h3').contains('Dog')
    cy.get('img').should('have.attr','alt')
    cy.get('img').should(($img) => {
      expect($img).to.have.css('width', '300px')
    });
    cy.get('head').find('link').should('have.attr', 'rel', 'stylesheet').should('have.attr','href','/styles.css')
    cy.get('body div > div > p:first').should(($p) => {
      expect($p).to.have.css('font-style','italic')
    });
    cy.get('ul').should(($ul) => {
      expect($ul).to.have.css('list-style-type','none')
    });
    // Check whether list item intros are bold
    cy.get('ul > li > span').should(($labels) => {
      const fw = $labels.css('font-weight')
      expect(fw).to.be.oneOf(['700', 'bold'])
    })
    // This test will also work to check whether list item intros are bold.
    cy.get('ul > li > span').should(($labels) => {
      expect($labels).to.satisfy(() => {
        const fw = $labels.css('font-weight')
        return fw === '700' || fw === 'bold'
        });
    });
    cy.get('body > div, body > div > div').should(($borders) => {
      expect($borders).to.have.css('border','1px solid rgb(0, 0, 0)')
    });
    cy.get('body > div').should(($bodypad) => {
      expect($bodypad).to.have.css('padding','10px')
    });
    cy.get('ul').should(($ulpad) => {
      expect($ulpad).to.have.css('padding','10px 0px')
    });
  })
})
