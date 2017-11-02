// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

describe('Pixel Art', function() {
  it('successfully loads', function() {
    // let's go
    cy.visit('/index.html')
    // Check that there's a correct title
    cy.get('h1').contains('Lab: Pixel Art Maker');
    // Check that there's correct user instructions
    cy.get('h2').contains('Set Grid Size');
    // Check that the inputs are there and the produce a grid when you hit submit
    const checkWidth = parseInt(Math.random() * 13 + 2);
    const checkHeight = parseInt(Math.random() * 13 + 2);
    cy.get('form').get('#input_height').clear().type(checkWidth);
    cy.get('form').get('#input_width').clear().type(checkHeight);
    cy.get('form').get('input:submit').click();
    // check that the grid is the size we'd expect
    cy.get('#pixel_canvas').get('tr').should('have.length', checkWidth);
    cy.get('#pixel_canvas').get('td').should('have.length', checkWidth * checkHeight);

    // check that we can click on the first and second cell and get the right results
    cy.get('#colorPicker').click();
    let colorVal, colorValStr;
    cy.get('#colorPicker').should(($cp) => {
      expect($cp).to.have.value('#000000');
      colorVal = hexToRgb($cp.val());
      colorValStr = 'rgb(' + colorVal.r + ', ' + colorVal.g + ', ' + colorVal.b + ')';
    });

    cy.get('#pixel_canvas').get('#cell-0-0').click();
    cy.get('#pixel_canvas').get('#cell-0-0').should(($cell1) => {
      expect($cell1).to.have.css('background-color',colorValStr);
    });
    const fWidth = checkWidth - 1;
    const fHeight = checkHeight - 1;
    const farthest = '#cell-' + fWidth + '-' + fHeight;
    cy.get('#pixel_canvas').get(farthest).click();
    cy.get('#pixel_canvas').get(farthest).should(($cell1) => {
      expect($cell1).to.have.css('background-color',colorValStr);
    });

  })
})
