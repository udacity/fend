$(document).ready(function() {

	checkWidth(box1, box1ValidWidths, "custom-event-1");
	checkWidth(box2, box2ValidWidths, "custom-event-2");
	checkWidth(box3, box3ValidWidths, "custom-event-3");
	checkWidth(box4, box4ValidWidths, "custom-event-4");

});

var box1 = $(".box-1");
var box2 = $(".box-2");
var box3 = $(".box-3");
var box4 = $(".box-4");

var box1ValidWidths = {
	contentBoxWidth: "125px",
	borderBoxWidth: ["123px", "124px"]
}
var box2ValidWidths = {
	contentBoxWidth: "450px",
	borderBoxWidth: ["441px", "442px"]
}
var box3ValidWidths = {
	contentBoxWidth: "400px",
	borderBoxWidth: ["392px", "393px"]
}
var box4ValidWidths = {
	contentBoxWidth: "250px",
	borderBoxWidth: ["245px", "246px"]
}

function checkWidth(box, widths, test) {
	if(checkBorderBox() === true) {
		for(var i = 0; i < widths.borderBoxWidth.length; i++) {
			if(box.css("width") === widths.borderBoxWidth[i]) {
				window.dispatchEvent(new CustomEvent(test, {'detail': 'passed'}));
			}
		}
	} else {
		if(box.css("width") === widths.contentBoxWidth) {
			window.dispatchEvent(new CustomEvent(test, {'detail': 'passed'}));
		}
	}
}

function checkBorderBox() {
	if($("*").css("box-sizing") === "border-box") {
		return true;
	} else {
		return false;
	}
}