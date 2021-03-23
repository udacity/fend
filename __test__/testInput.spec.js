// Import the js file to test
import { validURL } from "../src/client/js/URLChecker"

describe ('checks if exists', ()=> {
    test('checks type of response', () =>{
        expect(validURL).toBeDefined();
})});


describe ('checks if returning expected values', ()=> {
    test('if the URL is valid returns true, otherwise returns false', () =>{
        expect(validURL('https://google.com')).toBe(true);
        expect(validURL('hola hola')).toBe(false);
        expect(validURL('https://google')).toBe(false);
        expect(validURL('google.com')).toBe(true);
})});