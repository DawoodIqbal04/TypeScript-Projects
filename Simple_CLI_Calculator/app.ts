import inquirer from "inquirer";


let calc : {
    Num1 : number;
    Num2 : number;
    operator : string;
}= await inquirer.prompt([
    
{
    type1: "number",
    name: "Num1",
    massege: "Enter first number",
},

{
    type2: "number",
    name: "Num2",
    message: "Enter second number",
},

{
    type: "list",
    name: "operator",
    massege: "Choose operator you want to perform",
    choices: ["Add", "Subtract", "Multiply", "Divide"],
}
])

const {Num1 , Num2 , operator} = calc;

if (Num1 && Num2 && operator) {
    let result: number = 0 ;

    if(operator === "Add"){
        result = Num1 + Num2;
    } else if(operator === "Subtract"){
        result = Num1 - Num2;
    } else if(operator === "Multiply"){
        result = Num1 * Num2;
    } else if(operator === "Divide"){
        result = Num1 / Num2;
    }
    console.log("Your result is:", result);
} else  {
    console.log("Input a valid operator");
    
}
