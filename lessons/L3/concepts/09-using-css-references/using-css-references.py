import re

italicize = widget_inputs["text1"].strip()
underline = widget_inputs["text2"].strip()
uppercase = widget_inputs["text3"].strip()
bold = widget_inputs["text4"].strip()

comments = []
congrats = ""
def commentizer(new):
	if new not in comments:
		comments.append(new)

is_correct = False

def run_through_problems():
	# check if student has answered all question
	if not (italicize and underline and uppercase and bold):
		commentizer("At least one of the questions is missing an answer. Make sure to answer each question.")
		return False

	# check first question
	if re.match("font-stlye|font-sltye|font-styel|font-stle", italicize):
		commentizer("Take a look at number one. Did you misspell style?")
		return False

	if not re.match("^font-style$", italicize):
		commentizer("Take another look at number one. There's a property that starts with `font` that you might want to check out.")

	if re.match("<i>|<\/i>|^i$", italicize):
		commentizer("You can use `<i>`, but I'm looking for the **CSS property** used to italicize text.")
		return False

	if re.match("<em>|<\/em>|^em$", italicize):
		commentizer("You can use `<em>`, but I'm looking for the **CSS property** used to italicize text.")
		return False

	if re.match("^font-.*$", italicize) and not re.match("^font-style$", italicize):
		commentizer("Are you sure that's the right `font` property?")
		return False

	# check second question
	if re.match("text-deceration|text-decotaion|text-decoraton|text-decoratin|text-decarttion|text-decorate", underline):
		commentizer("Take a look at number two. Did you misspell decoration?")
		return False

	if not re.match("^text-decoration$", underline):
		commentizer("Take another look at number two. Hint: Try Googling the question.")

	if re.match("^text-.*$", underline) and not re.match("^text-decoration$", underline):
		commentizer("Are you sure that's the right `text` property?")
		return False

	# check third question
	if re.match("text-transfrm|text-tarnsform|txt-transform|txt-tarnsform|txt-transfrm", uppercase):
		commentizer("Take a look at number three. Did you misspell transform?")
		return False

	if not re.match("^text-transform$", uppercase):
		commentizer("Take another look at number three. Have you tried searching MDN's CSS Reference or css-tricks.com's CSS Almanac?")

	if re.match("^text-.*$", uppercase) and not re.match("^text-transform$", uppercase):
		commentizer("Are you sure that's the right `text` property?")
		return False

	# check fourth question
	if re.match("font-wieght|font-wait|font-weght|font-wight", bold):
		commentizer("Take a look at number four. Did you misspell weight?")
		return False

	if not re.match("^font-weight$", bold):
		commentizer("Take another look at number four. There's a CSS property you can use to bold text.")

	if re.match("<b>|<\/b>|^b$", bold):
		commentizer("You can use `<b>`, but I'm looking for the **CSS property** used to bold text.")
		return False

	if re.match("<strong>|<\/strong>|^strong$", bold):
		commentizer("You can use `<strong>`, but I'm looking for the **CSS property** used to bold text.")
		return False

	if re.match("^font-.*$", bold) and not re.match("^font-weight$", bold):
		commentizer("Are you sure that's the right `font` property?")
		return False
	return False

if (re.match("^font-style$", italicize) and re.match("^text-decoration$", underline) and re.match("^text-transform$", uppercase) and re.match("^font-weight$", bold)):
	congrats = "Looks good! Remember to use CSS references when you need help or get stuck."
	is_correct = True
else:
	run_through_problems()

if is_correct:
	commentizer(congrats)

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct