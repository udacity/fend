## Animal Cards Project: Lab Tests

### Setup

To use these tests on your local, you need to install cypress.io.

`npm install`

Then you can run the tests by starting up cypress.io either with its GUI or headlessly.

### Local Usage With GUI

`$(npm bin)/cypress open`

When the GUI opens, click `Run All Tests`. Cmd-Q to quit.

There's only one test file, `cypress/integration/home_page_spec.js`. Look in that file to see how the tests were constructed.

### Local Usage Headless

Running headlessly is a one-shot deal, the program quits when all tests are run.

`$(npm bin)/cypress run`

(This is the mode we will run the tests in within Workspaces.)



