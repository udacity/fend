import re

student_code = widget_inputs["text1"].strip()

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

is_correct = False

def run_through_problems():
    if not re.match("^<a", student_code):
        commentizer("Make sure you start the hyperlink with an opening `a` tag: `<a`.")
        return False

    if not re.match("^<a\s+href", student_code):
        commentizer("Remember, you need to add an `href` attribute. It should come right after `<a`.")
        return False

    if re.match("^<a\s{2,}href", student_code):
        commentizer("You've got too many spaces after `<a`. You should only have one.")
        return False

    if re.match("^<a href\s+=", student_code):
        commentizer("Looks like you've got extra space before the `=`.")
    
    if re.match("^<a href\s*=\s+", student_code):
        commentizer("Looks like you've got extra space after the `=`.")

    if not re.match("^<a href=\"\S*\"", student_code):
        commentizer("Make sure that the `href` is equal to a URL with `\"` around it. Eg. `href=\"http://website.com\"`. You should not have any spaces inside the URL.")
        return False
        
    if not re.match("^<a href=\"https*://(www\.){0,1}google.com\"", student_code, re.IGNORECASE):
        commentizer("The `href` needs to be set equal to the Google website.")
        return False

    if not re.match("^<a href=\"https*://(www\.){0,1}google.com\">", student_code, re.IGNORECASE):
        commentizer("Don't forget to close the opening tag right after the `href`!")    
        
        if re.match("^<a href=\"https*://(www\.){0,1}google.com\"\s+>", student_code, re.IGNORECASE):
            commentizer("Looks like you've got extra space after the `href`.")        

    if not re.match(".+>\s*Google\s*", student_code, re.IGNORECASE):
        commentizer("Make sure your link displays as Google!")
        return False

    if not re.match(".*<\/a>$", student_code):
        commentizer("Don't forget to close the link with `</a>`.")
    
        if re.match(".*<\/a>.+", student_code):
            commentizer("There shouldn't be anything after the closing tag.")
        if re.match(".*<a>$", student_code):
            commentizer("Looks like you forgot the slash in the closing tag :)")
    return False

if re.match("^<a href=\"https*://(www\.){0,1}google.com\">\s*Google\s*<\/a>$", student_code, re.IGNORECASE):
    is_correct = True
else:
    run_through_problems()

if is_correct:
    commentizer("Great job! You're learning how to pay attention to details when writing HTML.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct