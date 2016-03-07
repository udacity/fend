function performSubmission() {
  var boldGrader = new Grader();
  var emphasisGrader = new Grader();

  boldGrader.addTest(function() {
    var gotBold = boldGrader.elemDoesExist('strong') || boldGrader.elemDoesExist('b');
    return gotBold;
  }, {
    wrongMessage: 'Looks like you aren\'t making any text bold! Search for "bold" to find two options!'
  }, false);

  emphasisGrader.addTest(function() {
    var gotItalics = emphasisGrader.elemDoesExist('em') || emphasisGrader.elemDoesExist('i');
    return gotItalics;
  }, {
    wrongMessage: 'Looks like you aren\'t emphasizing any text! Search for "emphasis" to find the right tag.'
  }, false);

  if (boldGrader.elemDoesExist('b')) {
    boldGrader.addTest(function() {
      return true;
    }, {
      comment: 'Looks like you\'re using the `b` tag for bold. That works but there is a better option. Search for the "strong" element.'
    });
  }

  if (emphasisGrader.elemDoesExist('i')) {
    emphasisGrader.addTest(function() {
      return true;
    }, {
      comment: 'Looks like you\'re using the `i` tag for italics. That works but it is not recommended. Search for "emphasis" to find a better element.'
    });
  }

  if ($('strong').length > 1 || $('b').length > 1) {
    boldGrader.addTest(function() {
      return true;
    }, {
      comment: 'You only need one bold element :)'
    });
  }

  if ($('em').length > 0 || $('i').length > 0) {
    emphasisGrader.addTest(function() {
      return true;
    }, {
      comment: 'You only need one emphasized element :)'
    });
  }

  var boldElem = {};
  boldGrader.elemDoesExist('strong') ? boldElem = $('strong') : boldElem = $('b');

  var emphasisElem = {};
  emphasisGrader.elemDoesExist('em') ? emphasisElem = $('em') : emphasisElem = $('i');

  boldGrader.addTest(function() {
    var hasText = false;
    $.each(boldElem, function(i, elem) {
      console.log(elem.innerText);
      if (elem.innerText.length > 0) {
        hasText = true;
      }
    });
    return hasText;
  }, {
    wrongMessage: 'There should be something inside your bold element. It can be anything!'
  });

  emphasisGrader.addTest(function() {
    var hasText = false;
    $.each(emphasisElem, function(i, elem) {
      if (elem.innerText.length > 0) {
        hasText = true;
      }
    });
    return hasText;
  }, {
    wrongMessage: 'There should be something inside your emphasized element. It can be anything!'
  });

  boldGrader.runTests();
  emphasisGrader.runTests();

  // return an object like the one below:
  return {
    is_correct: boldGrader.isCorrect && emphasisGrader.isCorrect,
    test_feedback: boldGrader.getFormattedWrongMessages('\n') + '\n' + emphasisGrader.getFormattedWrongMessages('\n'),
    test_comments: boldGrader.getFormattedComments('\n') + '\n' + emphasisGrader.getFormattedComments('\n'),
    congrats: 'Awesome! Great job researching elements!'
  }
}
