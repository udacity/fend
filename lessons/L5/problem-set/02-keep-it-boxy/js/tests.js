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
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-1', {'detail': 'passed'}));
			}
		} else if(checkBorderBox() === true && box1.css("padding") !== "0px") {
			if(box1.width() >= box1ValidWidths.borderBoxWithPaddingLowerWidth && box1.width() <= box1ValidWidths.borderBoxWithPaddingUpperWidth) {
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-1', {'detail': 'passed'}));
			}
		} else {
			if(box1.width() === box1ValidWidths.contentBoxWidth) {
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-1', {'detail': 'passed'}));
			}
		}

		return _isCorrect;
  	};

	var test2 = function() {
		var _isCorrect = false;
		var box2 = $(".box-2");
		var box2ValidWidths = {
			contentBoxWidth: "450",
			borderBoxNoPaddingLowerWidth: "431",
			borderBoxNoPaddingUpperWidth: "433",
			borderBoxWithPaddingLowerWidth: "335",
			borderBoxWithPaddingUpperWidth: "337"
		}

		if(checkBorderBox() === true && box2.css("padding") === "0px") {
			if(box2.width() >= box2ValidWidths.borderBoxNoPaddingLowerWidth && box2.width() <= box2ValidWidths.borderBoxNoPaddingUpperWidth) {
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-2', {'detail': 'passed'}));
			}
		} else if(checkBorderBox() === true && box2.css("padding") !== "0px") {
			if(box2.width() >= box2ValidWidths.borderBoxWithPaddingLowerWidth && box2.width() <= box2ValidWidths.borderBoxWithPaddingUpperWidth) {
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-2', {'detail': 'passed'}));
			}
		} else {
			if(box2.width() === box2ValidWidths.contentBoxWidth) {
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-2', {'detail': 'passed'}));
			}
		}

		return _isCorrect;
  	};

	tests.push(test1);
	tests.push(test2);

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