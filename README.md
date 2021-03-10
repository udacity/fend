# Evaluate a news article with Natural Language Processing

This project is the final milestone of the the first part (Build Tools & Single Page Web Apps) of Udacity's Front End Web Development Advanced Nanodegree program. This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from meaningcloud API, based on the contents of the article

## Start of the application

To get started simply run the following commands:

* Make sure Node and npm are installed from the terminal.
node -v
npm -v

* install all project dependencies 
npm install

# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

* Sign up for an API key at meaningcloud.com

* Configure environment variables using dotenv package
    i. Install the dotenv package
        npm install dotenv
   ii. Create a new .env file in the root of your project
  iii. Fill the .env file with your API key like this:
        API_KEY=**************************

* Start the project

Command | Action
:------------: | :-------------:
`npm run test` | Run project Test
`npm run build-prod` | Build project
`npm run build-dev` | Run project in Dev Mode
`npm start` | Run project

* Open browser at http://localhost:8081/

## Code base
```bash
├── README.md - This file.
├── REQUIREMENTS.md # The project requirements.
├── webpack-dev.js # The webpack development configuration mode.
├── webpack-prod.js # The webpack production configuration mode.
├── package.json # npm package manager file. 
├── .babelrc # Represent babel file. 
├── __test__ # Represent Project testing files. 
└── src
    └── client
        ├── js 
        │   ├── formHandler.js
        │   └── arrow-drop-down.svg
        ├── styles
        │   ├── base.scss
        │   ├── footer.scss
        │   ├── form.scss
        │   ├── header.scss
        │   └── resets.scss
        └── index.js # used for containing all js and css files.
    └── server
        ├── index.js
        └── mockAPI.js
```
