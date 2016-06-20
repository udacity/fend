first = widget_inputs["check1"]
second = widget_inputs["check2"]
third = widget_inputs["check3"]
fourth = widget_inputs["check4"]
fifth = widget_inputs["check5"]

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

is_correct = False

if first:
    is_correct = is_correct and False
    commentizer("Are you sure about the first one? Think about which digits correspond to red, green, and blue (RGB).")
else:
    is_correct = True

if not second:
    is_correct = is_correct and False
    commentizer("Take a look at the second one again. Do you remember using this in a previous exercise?")
else:
    is_correct = is_correct and True

if not third:
    is_correct = is_correct and False
    commentizer("Take another look at the third one. When using RGB, `0` means no presence of the color and `255` means full presence of the color.")
else:
    is_correct = is_correct and True

if fourth:
    is_correct = is_correct and False
    commentizer("Give the fourth one another peek. What color do you get if you use `#ffff00` in a color picker?")
else:
    is_correct = is_correct and True

if not fifth:
    is_correct = is_correct and False
    commentizer("Look at the last one. Is it possible to use shorthand when writing CSS?")
else:
    is_correct = is_correct and True

if is_correct:
    commentizer("Right on! To quickly identify a color's rgb/hex value, try using the color picker in developer tools.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct