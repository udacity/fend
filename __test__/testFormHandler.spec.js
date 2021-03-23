// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"

describe ('checks if exists', ()=> {
    test('checks type of response', () =>{
        expect(handleSubmit).toBeDefined();
})});


describe ('checks if its a function', ()=> {
    test('checks type of response', () =>{
        expect(typeof handleSubmit).toBe('function');
})});


