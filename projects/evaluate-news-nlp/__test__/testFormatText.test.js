import { formatText } from "../src/client/js/formatText"
var irony = "Ironic"
var agreement = "Agreement"
var subjectivity = "Subjectivity"
var txt = `Irony: ${irony.toLowerCase()}\n 
Agreement: ${agreement.toLowerCase()}\n
Subjectivity:${subjectivity.toLowerCase()}`

describe("Testing the formatText functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the formatText() function", () => {
           
           expect(formatText({"irony":irony,"agreement":agreement,"subjectivity":subjectivity})).toBe(txt);
})});