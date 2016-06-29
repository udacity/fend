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
	borderBoxLowerWidth: "122px",
	borderBoxUpperWidth: "123px"
}
var box2ValidWidths = {
	contentBoxWidth: "450px",
	borderBoxLowerWidth: "441px",
	borderBoxUpperWidth: "442px"
}
var box3ValidWidths = {
	contentBoxWidth: "400px",
	borderBoxLowerWidth: "392px",
	borderBoxUpperWidth: "393px"
}
var box4ValidWidths = {
	contentBoxWidth: "250px",
	borderBoxLowerWidth: "245px",
	borderBoxUpperWidth: "246px"
}

function checkWidth(box, widths, test) {
	console.log(box);
	console.log(widths);
	console.log(test);
	if(checkBorderBox() === true) {
		if(box.css("width") >= widths.borderBoxLowerWidth && box.css("width") <= widths.borderBoxUpperWidth) {
			console.log("here");
			window.dispatchEvent(new CustomEvent(test, {'detail': 'passed'}));
		}
	} else {
		if(Math.floor(box.css("width")) === widths.contentBoxWidth) {
			console.log("here too!");
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