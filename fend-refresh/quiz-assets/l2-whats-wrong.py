missing_slash = widget_inputs["check1"]
p_em_em_p = widget_inputs["check2"]
bad_span = widget_inputs["check3"]
p_em_p_em = widget_inputs["check4"]

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

is_correct = False

if not missing_slash:
    is_correct = is_correct and False
    commentizer("Take another look at tags of the first one. Are there opening and closing tags?")
else:
    is_correct = True

if p_em_em_p:
    is_correct = is_correct and False
    commentizer("Take another look at the second one. Is anything wrong besides the typo?")
else:
    is_correct = is_correct and True

if not bad_span:
    is_correct = is_correct and False
    commentizer("Take another look at the third one. Do the colors look strange? Are there opening and closing tags?")
else:
    is_correct = is_correct and True

if not p_em_p_em:
    is_correct = is_correct and False
    commentizer("Take another look at the last one and pay close attention to the order of the tags.")
else:
    is_correct = is_correct and True

if is_correct:
    commentizer("Great job! You're learning how to pay attention to details when writing HTML.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct