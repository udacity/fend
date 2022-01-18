// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
           // Define the input for the function, if any, in the form of variables/array
           const input = 'event';

           // Define the expected output, if any, in the form of variables/array
           const output = "::: Form Submitted :::";

           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           expect(handleSubmit(input).toEqual(output));
})});