$(document).ready(function() {

	window.addEventListener("ud-test-pass", function(e) {
		var testDescription = e.detail;

		if(testDescription.includes(".one")) {
			addFirstStyle();
		}
		if(testDescription.includes(".two")) {
			addSecondStyle();
		}
		if(testDescription.includes(".three")) {
			addThirdStyle();
		}
	});

});

function addFirstStyle() {
	$(".one").parent().css("background", "#CCC");
	$(".one").css("-webkit-background-clip", "text");
	$(".one").css("-webkit-text-fill-color", "transparent");
	$(".one").css("background-image", "linear-gradient(to bottom,#EA353D,#EA353D 22px,#F3863F 22px,#F3863F 44px,#FEF03A 44px,#FEF03A 66px,#18A75C 66px,#18A75C 88px,#1DB0EC 88px,#1DB0EC 110px,#3F4393 110px,#3F4393 132px,#805CA2 132px,#805CA2)");
}

function addSecondStyle() {
	$(".two").parent().css("background", "#000");
	$(".two").css("-webkit-background-clip", "text");
	$(".two").css("-webkit-text-fill-color", "transparent");
	$(".two").css("background-image", "linear-gradient(to bottom,rgba(255, 255, 255, 1),rgba(255, 255, 255, 1) 44px,rgba(255, 255, 255, 0.8) 44px,rgba(255, 255, 255, 0.8) 88px,rgba(255, 255, 255, 0.6) 88px,rgba(255, 255, 255, 0.6) 132px,rgba(255, 255, 255, 0.4) 132px,rgba(255, 255, 255, 0.4) 176px,rgba(255, 255, 255, 0.2) 176px,rgba(255, 255, 255, 0.2) 220px,rgba(255, 255, 255, 0) 220px,rgba(255, 255, 255, 0))");
}

function addThirdStyle() {
	$(".three").parent().css("background", "#082838");
	$(".three").parent().css("padding", "0");
	$(".three").parent().css("color", "#6b849d");
	$(".three").css("background-image", "repeating-linear-gradient(to bottom,rgba(255, 255, 255, 0) 0,rgba(255, 255, 255, 0)   65px,rgba(255, 255, 255, 0.4) 65px,rgba(255, 255, 255, 0.4) 66px)");
}