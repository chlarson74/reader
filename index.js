// TODO: Include packages needed for this application
// used terminal for: npm init -y and npm i inquirer to install the node_modules package from https://www.npmjs.com/package/inquirer?activeTab=dependencies
//import inquirer from "inquirer";
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create an array of questions for user input

const questions = [
        
    {type: 'input',
     name: 'title',
     message: 'some message prompt'
    },
    {type: 'input',
    name: 'description',
    message: 'some message prompt'
    },
    {type: 'input',
    name: 'installation',
    message: 'some message prompt'
    },
    {type: 'input',
    name: 'usage',
    message: 'some message prompt'
    },
    {type: 'input',
    name: 'license',
    message: 'some message prompt'
    },
    {type: 'input',
    name: 'contributing',
    message: 'some message prompt'
    },
    {type: 'input',
    name: 'tests',
    message: 'some message prompt'
    },
    {type: 'input',
    name: 'userName',
    message: 'some message prompt'
    },
    {type: 'input',
    name: 'email',
    message: 'some message prompt'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}
// function writeToFile(fileName, data (information from the template literal)) {}

// Function call to initialize app
init();


// PSUEDOCODE ------------------------------------------
//what is being asked? 
    // title of my project 
    // sections entitled 
        //Description, 
        //Table of Contents, 
        //Installation, 
        //Usage, 
        //License, 
        //Contributing, 
        //Tests
        //Questions

    //entered title is displayed on the README
    //entered info is added to different sections of the page - see above
    //a badge for that license is added near the top of the README and a link to the license description
    //gitHUB user name is added to the questions section
    //email is added to the questions section
    // TOC is added and each item will jump link to the correct section of the page

//import - inquire - which is a command line prompt library - DONE
//writeToFile function -- built in JS library that we will be importing in
//path variable will be imported -- 
//import generateMarkdown object -- https://www.npmjs.com/package/inquirer -- https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/README.md
//quesitons array - make a list of questions that should be in the array - array of objects
//look up docs on inquire how an object should to prompt the user correctly - the list of questions in the array will coorelate to the sections we have.
        //Title
        //Description 
        //Installation
        //Usage
        //License
        //Contributing
        //Tests
        //Questions - github UN and email

// init function: prompt the user with questions for answers - done with "inquire"
// pass an array of questions through the inquire prompt
// when the prompt is returned with the user's input
// store the answers in a variable
// use the imported generateMarkdown.js -- 
    // build out the basic structure of the README in the template literal

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string - https://github.com/MichaelCurrin/badge-generator -- https://shields.io/badges
// create a function that returns the license link -- a tag with the URL that is associated with license.
// use a which statement to append the URL for the correct link
// append information to the document    
// TODO: Create a function to write README file
// function writeToFile(fileName, data (information from the template literal)) {}
// 

// code found in the README documentation found in the inquirer GITHUB - may be useful

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// 09 Template Literals
// const arya = {
//     first: "Arya",
//     last: "Stark",
//     origin: "Winterfell",
//     allegiance: "House Stark"
//   };
  
//   const greeting = `My name is ${arya.first} 
//   I am loyal to ${arya.allegiance}.`;
  
//   console.log(greeting); // prints
//   // My name is Arya!
//   // I am loyal to House Stark.
  
  
//   const oldGreeting = "My name is " + arya.first + "! I am loyal to "  + arya.allegiance + ".";
//great tut -- https://youtu.be/CfS6eOBe8AY 
// better tut -- https://youtu.be/2VUQABoFOqw