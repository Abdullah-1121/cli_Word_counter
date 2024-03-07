// Importing the packages 
import inquirer from 'inquirer';
import chalk from 'chalk';
// Welcome the user with a message 
console.log(chalk.bgGreenBright(' Word Counter : Count your thoughts'));
// Taking the user input 
let paragraph = await inquirer.prompt([
    {
        name: 'para',
        type: 'string',
        message: 'Enter the paragraph :',
        validate: (value) => {
            if (value) {
                if (typeof value == 'string') {
                    return true;
                }
                else {
                    return 'Please enter the paragraph';
                }
            }
            else {
                return 'Please enter the paragraph';
            }
        }
    }
]);
let arr = paragraph.para.split('');
//writing a function to count the words and  characters of a paragraph or text
function Count(input) {
    let arr = input.split('');
    // logic to count words
    let spaces = 0;
    for (const item of arr) {
        if (item == ' ' || item == '\n' || item == '\t' || item == '\r' || item == '\v') {
            // now checking for the symbols
            spaces++;
        }
    }
    //logic to count characters 
    let counter = 0;
    for (const item of arr) {
        if (item != ' ' && item != '\n' && item != '\t' && item != '\r' && item != '\v') {
            counter++;
        }
    }
    console.log(chalk.blue(`The number of words are ${spaces + 1} and the number of characters are ${counter}`));
}
Count(paragraph.para);
