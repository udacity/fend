function performSubmission() {
  var grader = new Grader({
    // can add shared messages here
  });

  grader.addTest(function() {
    return grader.elemDoesExist('table') && grader.hasCorrectLength('table', 1);
  }, {
    wrongMessage: "You're missing a table! Add `<table>` to start it and `</table>` to close it."
  }, false);

  grader.addTest(function() {
    return grader.doesExistInParent('thead', 'table') && grader.doesExistInParent('tbody', 'table');
  }, {
    wrongMessage: "Your table should have a head and a body. Use `<thead>` for the column headings and `<tbody>` for the data set."
  }, false);

  grader.addTest(function() {
    return !grader.elemDoesExist('tfoot');
  }, {
    wrongMessage: "There shouldn't be a `<tfoot>` in your table."
  }, false);

  grader.addTest(function() {
    return grader.hasCorrectLength('tr', 6);
  }, {
    wrongMessage: "There should be six `<tr>`s in your table.\n"
  });

  grader.addTest(function() {
    return grader.hasCorrectLength('thead tr', 1) && grader.hasCorrectLength('tbody tr', 5);
  }, {
    wrongMessage: "You should have one `<tr>` for the column headings and five `<tr>`s for the data set."
  }, false);

  grader.addTest(function() {
    return grader.elemDoesExist('thead th') && grader.hasCorrectLength('thead th', 4) && grader.hasParent('th', 'thead');
  }, {
    wrongMessage: "There should be four `<th>`s in your table.\n"
  });

  grader.addTest(function() {
    return !(grader.elemDoesExist('thead td') && grader.hasCorrectLength('thead td', 4) && grader.hasParent('td', 'thead'));
  }, {
    wrongMessage: "Make sure to use table header cells (`<th>`) instead of basic table cells (`<td>`) for the column headings."
  }, false);

  grader.addTest(function() {
    return grader.elemDoesExist('tbody td') && grader.hasCorrectLength('tbody td', 20) && grader.hasParent('td', 'tbody tr');
  }, {
    wrongMessage: "There should be twenty `<td>`s in your table, four per row.\n"
  }, false);

  grader.addTest(function() {
    var isCorrect = true;
    var correctHeadings = ["name", "address", "occupation", "salary"];
    var submissionHeadings = [];

    // grab student's headings
    $('th').each(function() {
       submissionHeadings.push($(this).html().toLowerCase());
    });

    // test student's headings against correct headings
    for (var i = 0; i < submissionHeadings.length; i++) {
      if (correctHeadings[i] !== submissionHeadings[i]) {
        isCorrect = false;
      }
    }

    return isCorrect;
  }, {
    wrongMessage: "Check your column headings. Are you using the same column headings that are provided in the comments?"
  }, false);

  grader.addTest(function() {
    var correctHeadings = ["name", "address", "occupation", "salary"];
    var submissionHeadings = [];

    // grab student's headings
    $('th').each(function() {
       submissionHeadings.push($(this).html().toLowerCase());
    });

    // test student's headings against correct headings
    for (var i = 0; i < correctHeadings.length; i++) {
      if (correctHeadings[i] !== submissionHeadings[i]) {
        return false;
      }
    }

    return true;
  }, {
    wrongMessage: "Check your column headings. Are you using the same column headings that are provided in the comments?"
  }, false);

  grader.addTest(function() {
    var correctDataSet = [
      ["mario", "514 mushroom kingdom", "plumber", "49,150 coins"],
      ["luigi", "6 banshee boardwalk", "plumber", "45,115 coins"],
      ["peach", "123 rainbow road", "princess", "215,675 coins"],
      ["yoshi", "120 yoshi valley", "wool sales", "67,980 coins"],
      ["bowser", "91 bowser castle", "real estate agent", "180,779 coins"]
    ];
    var submissionDataSet = [];

    // grab student's data set
    $('tbody tr').each(function() {
      var rowDataSet = [];
      // get one row at a time
      $('td', $(this)).each(function() {
        rowDataSet.push($(this).html().toLowerCase());
      });
      // push row onto data set
      submissionDataSet.push(rowDataSet);
      rowDataSet = [];
    });

    // test student's data set against correct data set
    for (var i = 0; i < correctDataSet.length; i++) {
      for (var j = 0; j < correctDataSet[i].length; j++) {
        if (correctDataSet[i][j] !== submissionDataSet[i][j]) {
          return false;
        }
      }
    }

    return true;
  }, {
    wrongMessage: "Check your table cells. Are you using the same data set that is provided in the comments?"
  }, false);

  grader.runTests();

  result = {
    is_correct: grader.isCorrect,
    test_feedback: grader.getFormattedWrongMessages('\n'),
    test_comments: grader.getFormattedComments('\n'),
    congrats: "Awesome! I wonder how many coins Mario has earned saving the Princess?"
  };
  return result;
}