class_right = widget_inputs["check1"]
class_leftright = widget_inputs["check2"]
id_right = widget_inputs["check3"]
multi_class_with_right = widget_inputs["check4"]

comments = []
def commentizer(new):
	if new not in comments:
		comments.append(new)

is_correct = False

if not class_right:
	is_correct = is_correct and False
	commentizer("Take a look at the first one. You could try testing it out to see if it works.")
else:
	is_correct = True

if class_leftright:
	is_correct = is_correct and False
	commentizer("Take a look at the second one and look at the class name being passed. Is it the same class name being selected?")
else:
	is_correct = is_correct and True

if id_right:
	is_correct = is_correct and False
	commentizer("Take a look at the third one. What attribute is being passed the value `right`?")
else:
	is_correct = is_correct and True

if not multi_class_with_right:
	is_correct = is_correct and False
	commentizer("Take a look at the last one. It's okay to pass multiple class names to an element.")
else:
	is_correct = is_correct and True

if is_correct:
	commentizer("Awesome! Understanding selectors is the biggest key to understanding CSS.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct