(function(window) {

	// checks if border-box is enable
	function checkBorderBox() {
		if($("*").css("box-sizing") === "border-box") {
			return true;
		} else {
			return false;
		}
	}

	var tests = [];

	var test1 = function() {
		var _isCorrect = false;
		var box1 = $(".box-1");
		var box1ValidWidths = {
			contentBoxWidth: "125",
			borderBoxNoPaddingLowerWidth: "112",
			borderBoxNoPaddingUpperWidth: "114",
			borderBoxWithPaddingLowerWidth: "80",
			borderBoxWithPaddingUpperWidth: "82"
		}

		if(checkBorderBox() === true && box1.css("padding") === "0px") {
			if(box1.width() >= box1ValidWidths.borderBoxNoPaddingLowerWidth && box1.width() <= box1ValidWidths.borderBoxNoPaddingUpperWidth) {
				console.log("here 1");
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-1', {'detail': 'passed'}));
			}
		} else if(checkBorderBox() === true && box1.css("padding") !== "0px") {
			if(box1.width() >= box1ValidWidths.borderBoxWithPaddingLowerWidth && box1.width() <= box1ValidWidths.borderBoxWithPaddingUpperWidth) {
				console.log("here 2");
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-1', {'detail': 'passed'}));
			}
		} else {
			if(Math.floor(box1.width()) === box1ValidWidths.contentBoxWidth) {
				console.log("here 3");
				_isCorrect = true;
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