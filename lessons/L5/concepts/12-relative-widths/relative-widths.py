import re

primary = widget_inputs["text1"].strip()
secondary = widget_inputs["text2"].strip()

comments = []
congrats = ""
def commentizer(new):
	if new not in comments:
		comments.append(new)

is_correct = False

def run_through_problems():
	# check if student has submitted answer for each textbox
	if not (primary and secondary):
		commentizer("You forgot to fill out one of the text boxes.")
		return False

	# check if answers have correct units
	if (re.match("^780$", primary) or re.match("^390$", secondary)):
		commentizer("That's close, but one of your answers is missing units. Include `px` to the end of both answers and you've got it.")
		return False

	# check if answers have correct value
	if not re.match("780px", primary):
		commentizer("Check your math. The primary element is 2/3 of the container.")
		return False

	if not re.match("390px", secondary):
		commentizer("Check your math. The secondary element is 1/3 of the container.")
		return False
	return False

if (re.match("780px", primary) and re.match("390px", secondary)):
	congrats = "Nailed it! Understanding relative widths will help you as you learn more about responsive layouts."
	is_correct = True
else:
	run_through_problems()

if is_correct:
	commentizer(congrats)

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct