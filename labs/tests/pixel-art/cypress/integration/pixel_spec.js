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

    // Set the color picker. Note that since this is laggy, to avoid races we do this early.
    let colorVal, colorValStr;
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    cy.get('#colorPicker').should(($cp) => {
      $cp.val(randomColor);
    });

    // Check that the inputs are there and the produce a clickable grid when you hit submit.
    // Originally used random width and height but this is not a reliable way to grade.
    // The right way is to check a range of edge cases, see arrays below.
    const widths =  [1, 2, 5,  3, 13, 1, 7];
    const heights = [1, 2, 6, 14,  2, 12, 1];
    let checkWidth;
    let checkHeight;
    for (let i in widths) {
      checkWidth = widths[i];
      checkHeight = heights[i];
      cy.get('form').get('#input_height').clear().type(checkHeight);
      cy.get('form').get('#input_width').clear().type(checkWidth);
      cy.get('form').get('input:submit').click();
      // check that the grid is the size we'd expect
      cy.get('#pixel_canvas > tr').should('have.length', checkHeight);
      cy.get('#pixel_canvas > tr > td').should('have.length', checkWidth * checkHeight);

      // check that we can click on the color picker, then the first and second cell and get the right results
      cy.get('#colorPicker').should(($cp) => {
        expect($cp).to.have.value(randomColor);
        colorVal = hexToRgb($cp.val());
        colorValStr = 'rgb(' + colorVal.r + ', ' + colorVal.g + ', ' + colorVal.b + ')';
      });

      // This needs to click the first and last td according to the right grid width and height.
      const firstPixel = cy.get('#pixel_canvas > tr:eq(0) td:eq(0)');
      firstPixel.click();
      firstPixel.should(($cell1) => {
        expect($cell1).to.have.css('background-color',colorValStr);
      });
      const fWidth = checkWidth - 1;
      const fHeight = checkHeight - 1;
      const lastPixel = cy.get('#pixel_canvas > tr:eq(' + fHeight + ') > td:eq(' + fWidth + ')');
      lastPixel.click();
      lastPixel.should(($cell1) => {
        expect($cell1).to.have.css('background-color',colorValStr);
      });
    }

  })
})
