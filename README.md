# Team-Profile-Generator

## Table of Contents
* [Description](##Description)
* [Technologies](##Technologies)
* [Demo](##Demo)
* [Screenshot](##Screenshot)
* [Installation](##Installation)
* [Usage](##Usage)
* [Tests](##Tests)
* [License](##License)
* [Credits](##Credits)
* [Questions](##Questions)


## Description

This application prompts users to enter information about members in their team, and generates a webpage based on the information received. More specifically, users are first asked a series of questions pertaining to information of their team manager. The final question will ask the user if they wish to add either an Engineer or Intern, or to continue and generate the webpage. If either an Engineer or Intern is selected, a new series of questions will be asked of the chosen member, and the final question again will ask of adding more members or generating webpage, etc.

Final webpage will display all members in cards, and each card will have pertinent information (as entered by user) of said member. In particular, member's emails will be clickable links opening up default mail application and auto-populating "to" field with member's email. Similarly, GitHub usernames of any engineer will be clickable, redirecting user to the engineer's GitHub in a new tab. (Sample webpage can be found in screenshot below)

## Technologies

The foundation of this application is running through node.js. Two node packages are used, namely inquirer and filesystem. During the development phase however, jest was also implemented to run tests while developing constructor functions. See more below in the tests section to run the test.

The final webpage makes use of standard HTML and CSS structures. Bootstrap is used for style, but custom styles are also applied in the style.css file found in the "dist" folder.

## Demo

https://drive.google.com/file/d/1ptBWBAj4bADqFT03rVnoJ2mJUK5vCpRs/view

## Screenshot

![Sample Webpage](./assets/Sample-Webpage-Screenshot.JPG)

---

## Installation

Installation instructions: `npm i`

## Usage

In Windows Command Processor/Terminal, run `node index.js`

## Tests

In Windows Command Processor/Terminal run `npm test` to test constructor functions.

## License

No license

## Credits

<a href="https://www.flaticon.com/free-icons/engineer" title="engineer icons">Engineer icons created by Eucalyp - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/boss" title="boss icons">Boss icons created by itim2101 - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/student" title="student icons">Student icons created by Freepik - Flaticon</a>

---

## Questions

If you have any follow up questions, feel free to reach out at toacinp@gmail.com  
GitHub: https://www.github.com/Toacin
