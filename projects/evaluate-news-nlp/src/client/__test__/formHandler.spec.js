// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"

describe('Test, the function "handleSubmit()" should exist' , () => {
    test('It should return true', async () => {
        expect(handleSubmit).toBeDefined();
    });
});