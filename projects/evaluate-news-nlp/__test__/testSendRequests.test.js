import { requestSentiment } from "../src/client/js/sendRequests"
import 'regenerator-runtime/runtime'
describe("Testing the requests for API functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the requestSentiment() function", () => {
        return expect(requestSentiment("")).rejects.toThrow('Empty input');
})});