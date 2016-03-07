function performSubmission() {
  var grader = new Grader();

  grader.addTest(function() {
    return grader.elemDoesExist('p');
  }, {
    wrongMessage: 'Looks like you\'re missing a paragraph element! Use `<p>` to start it and then close it with `</p>`.'
  });

  grader.addTest(function() {
    return grader.elemDoesExist('span');
  }, {
    wrongMessage: 'Looks like you\'re missing a span element! Use `<span>` to start one and `</span>` to close it.'
  }, false);

  grader.addTest(function() {
    var hasText = false;
    $.each($('p'), function(i, e) {
      if (e.innerText.length > 0) {
        if (i === 0) {
          hasText = true;
        } else {
          hasText = hasText && true;
        }
      } else {
        hasText = hasText && false;
      }
    });
    return hasText;
  }, {
    wrongMessage: 'The paragraph needs to have some text content! Add whatever you\'d like :)'
  });

  grader.addTest(function() {
    var hasText = false;
    $.each($('span'), function(i, e) {
      if (e.innerText.length > 0) {
        if (i === 0) {
          hasText = true;
        } else {
          hasText = hasText && true;
        }
      } else {
        hasText = hasText && false;
      }
    });
    return hasText;
  }, {
    wrongMessage: 'Every span some text content! Add whatever you\'d like :)'
  }, false);

  if ($('p').length > 1) {
    grader.addTest(function() {
      return true;
    }, {
      comment: 'Looks like you added more than enough paragraphs :)'
    });
  }

  grader.addTest(function() {
    if ($('span').length >= 2) {
      return true;
    } else {
      return false;
    }
  }, {
    wrongMessage: 'There should be two span elements on the page.'
  }, false);

  if ($('span').length > 2) {
    grader.addTest(function() {
      return true;
    }, {
      comment: 'Looks like you added more than enough spans :)'
    });
  }

  grader.runTests();

  return {
    is_correct: grader.isCorrect,
    test_feedback: grader.getFormattedWrongMessages('\n'),
    test_comments: grader.getFormattedComments('\n'),
    congrats: "Congratulations! You made your first elements!"
  }
}