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
			contentBoxWidth: 125,
			borderBoxNoPaddingLowerWidth: 112,
			borderBoxNoPaddingUpperWidth: 114,
			borderBoxWithPaddingLowerWidth: 80,
			borderBoxWithPaddingUpperWidth: 82
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
			if(Math.round(box1.width()) === box1ValidWidths.contentBoxWidth) {
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
			contentBoxWidth: 450,
			borderBoxNoPaddingLowerWidth: 431,
			borderBoxNoPaddingUpperWidth: 433,
			borderBoxWithPaddingLowerWidth: 335,
			borderBoxWithPaddingUpperWidth: 337
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
		} else if(checkBorderBox() === false) {
			if(Math.round(box2.width()) === box2ValidWidths.contentBoxWidth) {
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-2', {'detail': 'passed'}));
			}
		}

		return _isCorrect;
  	};

	var test3 = function() {
		var _isCorrect = false;
		var box3 = $(".box-3");
		var box3ValidWidths = {
			contentBoxWidth: 400,
			borderBoxNoPaddingLowerWidth: 382,
			borderBoxNoPaddingUpperWidth: 384,
			borderBoxWithPaddingLowerWidth: 186,
			borderBoxWithPaddingUpperWidth: 188
		}

		if(checkBorderBox() === true && box3.css("padding") === "0px") {
			if(box3.width() >= box3ValidWidths.borderBoxNoPaddingLowerWidth && box3.width() <= box3ValidWidths.borderBoxNoPaddingUpperWidth) {
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-3', {'detail': 'passed'}));
			}
		} else if(checkBorderBox() === true && box3.css("padding") !== "0px") {
			if(box3.width() >= box3ValidWidths.borderBoxWithPaddingLowerWidth && box3.width() <= box3ValidWidths.borderBoxWithPaddingUpperWidth) {
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-3', {'detail': 'passed'}));
			}
		} else if(checkBorderBox() === false) {
			if(Math.round(box3.width()) === box3ValidWidths.contentBoxWidth) {
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-3', {'detail': 'passed'}));
			}
		}

		return _isCorrect;
  	};

	var test4 = function() {
		var _isCorrect = false;
		var box4 = $(".box-4");
		var box4ValidWidths = {
			contentBoxWidth: 250,
			borderBoxNoPaddingLowerWidth: 235,
			borderBoxNoPaddingUpperWidth: 237,
			borderBoxWithPaddingLowerWidth: 215,
			borderBoxWithPaddingUpperWidth: 217
		}

		if(checkBorderBox() === true && box4.css("padding") === "0px") {
			if(box4.width() >= box4ValidWidths.borderBoxNoPaddingLowerWidth && box4.width() <= box4ValidWidths.borderBoxNoPaddingUpperWidth) {
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-4', {'detail': 'passed'}));
			}
		} else if(checkBorderBox() === true && box4.css("padding") !== "0px") {
			if(box4.width() >= box4ValidWidths.borderBoxWithPaddingLowerWidth && box4.width() <= box4ValidWidths.borderBoxWithPaddingUpperWidth) {
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-4', {'detail': 'passed'}));
			}
		} else if(checkBorderBox() === false) {
			if(Math.round(box4.width()) === box4ValidWidths.contentBoxWidth) {
				_isCorrect = true;
				window.dispatchEvent(new CustomEvent('custom-event-4', {'detail': 'passed'}));
			}
		}

		return _isCorrect;
  	};

  	var test5 = function() {
		var _isCorrect = false;
		var box4Padding = parseInt($(".box-3").css("padding"));

		if(box4Padding >= 98 && box4Padding <= 100) {
			_isCorrect = true;
			window.dispatchEvent(new CustomEvent('custom-event-5', {'detail': 'passed'}));
		}

		return _isCorrect;
  	};

	tests.push(test1);
	tests.push(test2);
	tests.push(test3);
	tests.push(test4);
	tests.push(test5);

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