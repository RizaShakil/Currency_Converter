#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";

console.log(chalk.greenBright("\n\t<<<====== Welcome To RIZA Currency Converter ======>>>\n"));

 //define the list of currencies and their exchange rate

 let exchange_rate : any = {
    "USD" : 1,         //Base currency
    "EUR" : 0.9,       //European Currency (euro)
    "JYP" : 113,       //Japnese Currency (yen)
    "CAD" : 1.3,       //Canadian Currency (dollar)
    "AUD" : 1.65,      //Australian Currency (dollar)
    "PKR" : 280,       //Pakistani Currency (rupees)
 }

 //prompt the user select currencies to convert currencies from and to

 let user_answer = await inquirer.prompt(
    [
        {
            name : "from_currency",
            type : "list",
            message : (chalk.yellowBright("Select the currency to convert from:")),
            choices : ["USD","EUR","JYP","CAD","AUD","PKR"]
        },
        {
            name : "to_currency",
            type : "list",
            message : (chalk.yellowBright("Select the currency to convert into:")),
            choices : ["USD","EUR","JYP","CAD","AUD","PKR"] 
        },
        {
            name : "amount",
            type : "input",
            message : (chalk.yellowBright("Enter your amount to convert:")),
        }
    ]
 );

 //perform currency conversion by using formula

 let from_amount = exchange_rate[user_answer.from_currency];
 let to_amount = exchange_rate[user_answer.to_currency];
 let amount = user_answer.amount

 //formula of conversion

 let base_amount = amount / from_amount
 let converted_amount = base_amount * to_amount

 //Display the converted amount

 console.log(chalk.magentaBright(`\n\tCONVERTED AMOUNT ${converted_amount}\n`));

 console.log(chalk.greenBright("---THANKS FOR USING---"));