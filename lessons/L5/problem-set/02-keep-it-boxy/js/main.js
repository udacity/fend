$(document).ready(function() {

	checkWidth(box1, box1ValidWidths, "custom-event-1");
	/*checkWidth(box2, box2ValidWidths, "custom-event-2");
	checkWidth(box3, box3ValidWidths, "custom-event-3");
	checkWidth(box4, box4ValidWidths, "custom-event-4");*/

});

var box1 = $(".box-1");
var box2 = $(".box-2");
var box3 = $(".box-3");
var box4 = $(".box-4");

var box1ValidWidths = {
	contentBoxWidth: "125",
	borderBoxNoPaddingLowerWidth: "112",
	borderBoxNoPaddingUpperWidth: "114",
	borderBoxWithPaddingLowerWidth: "80",
	borderBoxWithPaddingUpperWidth: "82"
}
/*var box2ValidWidths = {
	contentBoxWidth: "450",
	borderBoxLowerWidth: "441px",
	borderBoxUpperWidth: "442px"
}
var box3ValidWidths = {
	contentBoxWidth: "400",
	borderBoxLowerWidth: "392px",
	borderBoxUpperWidth: "393px"
}
var box4ValidWidths = {
	contentBoxWidth: "250",
	borderBoxLowerWidth: "245px",
	borderBoxUpperWidth: "246px"
}*/

function checkWidth(box, widths, test) {
	console.log(box);
	console.log(widths);
	console.log(test);
	console.log(box.css("padding"));
	if(checkBorderBox() === true && box.css("padding") === "0px") {
		if(box.width() >= widths.borderBoxNoPaddingLowerWidth && box.width() <= widths.borderBoxNoPaddingUpperWidth) {
			console.log("here 1");
			window.dispatchEvent(new CustomEvent(test, {'detail': 'passed'}));
		}
	} else if(checkBorderBox() === true && box.css("padding") !== "0px") {
		if(box.width() >= widths.borderBoxWithPaddingLowerWidth && box.width() <= widths.borderBoxWithPaddingUpperWidth) {
			console.log("here 2");
			window.dispatchEvent(new CustomEvent(test, {'detail': 'passed'}));
		}
	} else {
		if(Math.floor(box.width()) === widths.contentBoxWidth) {
			console.log("here 3");
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