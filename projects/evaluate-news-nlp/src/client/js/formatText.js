function formatText(res) {
    var txt = `Irony: ${res.irony.toLowerCase()}\n 
Agreement: ${res.agreement.toLowerCase()}\n
Subjectivity:${res.subjectivity.toLowerCase()}`
    return txt
}

export {
    formatText
}