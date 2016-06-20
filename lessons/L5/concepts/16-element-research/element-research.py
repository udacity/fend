import re

nav = widget_inputs["text1"].strip()
article = widget_inputs["text2"].strip()
h3 = widget_inputs["text3"].strip()
footer = widget_inputs["text4"].strip()
aside = widget_inputs["text5"].strip()
img = widget_inputs["text6"].strip()

comments = []
congrats = ""
def commentizer(new):
	if new not in comments:
		comments.append(new)

is_correct = False

def run_through_problems():
	# check if student has submitted answer for each textbox
	if not (nav and article and h3 and footer and aside and img):
		commentizer("At least one of the text boxes is missing an answer. Make sure to answer each one.")
		return False

	# check first textbox
	if re.match("<header>|<\/header>|^header$", nav):
		commentizer("Almost! I'm looking for something a little more specific on number one.")
		return False

	if re.match("<div>|<\/div>|^div$|<section>|<\/section>|^section$", nav):
		commentizer("That's too generic for number one. Try using an element that contains navigation links.")
		return False

	if not re.match("<nav>|<\/nav>|^nav$", nav):
		commentizer("Are you sure about number one? Try using an element that contains navigation links.")
		return False

	# check second textbox
	if re.match("<div>|<\/div>|^div$|<section>|<\/section>|^section$", article):
		commentizer("That's too generic for number two. What sectioning element is intended to be reused?")
		return False

	if not re.match("<article>|<\/article>|^article$", article):
		commentizer("Are you sure about number two? What sectioning element is intended to be reused?")
		return False

	# check third textbox
	if re.match("<h[4-6]>|<\/h[4-6]>|^h[4-6]$", h3):
		commentizer("Almost! `" + str(h3) + "` is a little too small for number three. Try using a bigger heading.")
		return False

	if re.match("<div>|<\/div>|^div$", h3):
		commentizer("You can use something better than a `" + str(h3) + "` for number three.")
		return False

	if not re.match("<h[1-3]>|<\/h[1-3]>|^h[1-3]$", h3):
		commentizer("Are you sure about number three? What types of elements do you typically use for important text?")
		return False

	# check fourth textbox
	if re.match("<div>|<\/div>|^div$|<section>|<\/section>|^section$", footer):
		commentizer("That's too generic for number four. Look at the text in bottom-right corner, that's a clue!")
		return False

	if not re.match("<footer>|<\/footer>|^footer$", footer):
		commentizer("Are you sure about number four? What element normally appears at the bottom of a page?")
		return False

	# check fifth textbox
	if re.match("<div>|<\/div>|^div$|<section>|<\/section>|^section$", aside):
		commentizer("That's too generic for number five. Hint: Do you see how this element is positioned with respect to the rest of the page?")
		return False

	if not re.match("<aside>|<\/aside>|^aside$", aside):
		commentizer("Are you sure about number five? That looks like a sidebar... what element often represent sidebars?")
		return False

	# check sixth textbox
	if not re.match("<video>|<\/video>|^video$|<picture>|<\/picture>|^picture$|<figure>|<\/figure>|^figure$|<img>|<\/img>|^img$", img):
		commentizer("Are you sure about number five? You should be looking for a type of media element.")
		return False
	return False

if (re.match("<nav>|<\/nav>|^nav$", nav) and re.match("<article>|<\/article>|^article$", article) and re.match("<h[1-3]>|<\/h[1-3]>|^h[1-3]$", h3) and re.match("<footer>|<\/footer>|^footer$", footer) and re.match("<aside>|<\/aside>|^aside$", aside) and re.match("<video>|<\/video>|^video$|<picture>|<\/picture>|^picture$|<figure>|<\/figure>|^figure$|<img>|<\/img>|^img$", img)):
	congrats = "Nice job! You'll thank yourself later for using semantic elements."
	is_correct = True
else:
	run_through_problems()

if is_correct:
	commentizer(congrats)

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct