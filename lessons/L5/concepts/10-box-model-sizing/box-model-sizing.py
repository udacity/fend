import re

answer = widget_inputs["text1"].strip()
height_value = ""
padding_value = ""
margin_value = ""

height_solution = ["175px"]
padding_solution = ["50px", "50px 50px", "50px 50px 50px", "50px 50px 50px 50px"]
margin_solution = ["20px", "20px 20px", "20px 20px 20px", "20px 20px 20px 20px"]

solution_dictionary = {}
solution_dictionary["height"] = height_solution
solution_dictionary["padding"] = padding_solution
solution_dictionary["margin"] = margin_solution

comments = []
congrats = "Good job! View the answer to learn about the shorthand ways to write `padding` and `margin`."
def commentizer(new):
	if new not in comments:
		comments.append(new)

is_correct = True

def run_through_problems():
	# check if student answered the problem
	if not answer:
		commentizer("You didn't provide an answer. Don't give up, you can do it!")
		return False

	# check if answer has three lines
	if not re.match("(.*\\n){2}", answer):
		commentizer("Your answer should only be three lines long. Try adding or removing lines from your answer.")
		return False

	# split answer into three lines so each line can be checked
	lines = answer.split('\n', 3)

	# check formatting
	has_formatting_issue = False

	for line in lines:
		if not re.match("[a-z\\-]{3,}\\s*:\\s*.*;", line):
			commentizer("Check `" + line + "`. Is it formatted correctly? A CSS declaration should always read `propertyName: value;`.")
			has_formatting_issue = True
		elif not re.match("(height|width|padding|border|margin)\\s*:\\s*.*;", line):
			commentizer("Check `" + line + "`. What property are you using? You only need to use properties related to the box model.")
			has_formatting_issue = True
		elif not re.match("(height|padding|margin)\\s*:\\s*.*;", line):
			commentizer("Check `" + line + "`. What property are you using? You only need to use `height`, `padding`, and `margin` to complete the exercise.")
			has_formatting_issue = True
		elif re.match("height\\s*:\\s*.*;", line):
			if not re.match("height\\s*:\\s*\\d*px;", line):
				commentizer("Check `" + line + "`. Your value is not formatted correctly? The value should be a number followed by a unit \(e.g. `25px`\).")
				has_formatting_issue = True
		elif re.match("(padding|margin)\\s*:\\s*.*;", line):
			if not (re.match("(padding|margin)\\s*:\\s*(\\d*px|\\d*px\\s\\d*px|\\d*px\\s\\d*px\\s\\d*px|\\d*px\\s\\d*px\\s\\d*px\\s\\d*px);", line)):
				commentizer("Check `" + line + "`. Your value is not formatted correctly? The value should be a number or numbers each followed by a unit \(e.g. `25px` or `25px 25px`\).")
				has_formatting_issue = True
		else:
			continue

	if has_formatting_issue:
		return False

	# check values
	for line in lines:
		if re.match("height", line):
			height_value = re.match("height\\s*:\\s*(.*);", line).group(1)
		elif re.match("padding", line):
			padding_value = re.match("padding\\s*:\\s*(.*);", line).group(1)
		elif re.match("margin", line):
			margin_value = re.match("margin\\s*:\\s*(.*);", line).group(1)

	if height_value not in solution_dictionary["height"]:
		commentizer("Check your answer for `height`. When using `border-box;`, height is calculated as height + padding + border.")
		return False

	if padding_value not in solution_dictionary["padding"]:
		commentizer("Check your answer for `padding`. The padding is a perfect square. Use the values next to the ruler.")
		return False

	if margin_value not in solution_dictionary["margin"]:
		commentizer("Check your answer for `margin`. The margin is a perfect square. Use the values next to the ruler.")
		return False

	return True

is_correct = run_through_problems()

if is_correct:
	commentizer(congrats)

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct