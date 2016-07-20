(function(window) {

	var tests = [];

	var test1 = function() {
		var _isCorrect = false;

		// get padding
		var paddingTop = $(".floated-image").css('padding-top');
		var paddingBottom = $(".floated-image").css('padding-bottom');
		var paddingLeft = $(".floated-image").css('padding-left');
		var paddingRight = $(".floated-image").css('padding-right');

		if(paddingTop === "0px" && paddingBottom === "0px" && paddingRight === "0px") {
			if(paddingLeft === "21px") {
				window.dispatchEvent(new CustomEvent('custom-event-1', {'detail': 'passed'}));
			}
		}

		return _isCorrect;
  	};

	tests.push(test1);

	var isCorrect = false;

	function executeTests() {
		var isCorrect = false;

		tests.forEach(function(test, index) {
			var testCorrect = test();
			if (index === 0) {
				isCorrect = testCorrect;
			} else {
				isCorrect = isCorrect && testCorrect;
			}
			if (testCorrect) {
				// to prevent unnecessary event firings
				test = function() {};
			}
		});

		return isCorrect;
	}

	isCorrect = executeTests();

	var interval = window.setInterval(function() {
		if (!isCorrect) {
	  		isCorrect = executeTests();
		} else {
	  		window.clearInterval(interval);
		}
	}, 1000);
})(window);