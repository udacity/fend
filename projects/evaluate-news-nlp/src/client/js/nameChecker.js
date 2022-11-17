function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

function validURL(url) {
    var realURL = require('valid-url');

    if(realURL.isUri(url)) {
        console.log('this is valid!');
        return true;
    }

    else {
        console.log('this is not valid')
        return false;
    }
}

export { checkForName }
export {validURL}
