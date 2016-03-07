import re

student_code = widget_inputs["text1"].strip()

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

is_correct = False

def run_through_problems():
    if not re.match(".*button.*", student_code):
        commentizer("Remember, you're creating a `button` element that looks like `<tag>content</tag>`. `button` is the tag name.")
        return False

    if not re.match("^<button>", student_code):
        commentizer("You need to start with an opening tag for a button. It should look like this: `<tag>`.")
        
        if re.match("^<\/button>", student_code):
            commentizer("It looks like you're starting the element with a closing tag. The tag that looks like `</tag>` should go at the end of the element.")

    if not re.match(".+<\/button>$", student_code):
        commentizer("You need to end the button element with a closing tag. It should look like this: `</tag>`.")    
        
        if re.match(".+<button>$", student_code):
            commentizer("Your closing tag is missing the slash! It should look like this: `</tag>`.")

    if not re.match(".+>.+<.+", student_code):
        commentizer("Make sure you add some content to your button. It can say anything!")
    return False

if re.match("^<button>.+<\/button>$", student_code):
    is_correct = True
else:
    run_through_problems()

if is_correct:
    commentizer("Great job! You're learning how to pay attention to details when writing HTML.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct
