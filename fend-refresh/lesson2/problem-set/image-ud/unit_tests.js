function performSubmission() {
  var grader = new Grader();

  grader.addTest(function() {
    return grader.elemDoesExist('img');
  }, {
    wrongMessage: 'Make sure you add an image element to the page!'
  }, false);

  grader.addTest(function() {
    return grader.elemDoesExist('p > img');
  }, {
    wrongMessage: 'The image needs to be a child of the paragraph.'
  }, false);

  grader.addTest(function() {
    return grader.hasAttr('p > img', 'src', 'http://udacity.github.io/fend/images/udacity.png');
  }, {
    wrongMessage: 'The image source attribute should be set to: http://udacity.github.io/fend/images/udacity.png'
  });

  grader.addTest(function() {
    return grader.hasAttr('p > img', 'alt');
  }, {
    wrongMessage: 'The image needs an alt attribute that describes what it is.'
  });

  grader.runTests();

  return {
    is_correct: grader.isCorrect,
    test_feedback: grader.getFormattedWrongMessages('\n'),
    test_comments: grader.getFormattedComments('\n'),
    congrats: "Nice job! If you haven't already, try changing the URL to make other images appear!"
  }
}