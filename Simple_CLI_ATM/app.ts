import inquirer from "inquirer";

let balance : number = 10000;

console.log("A dummy accont is created whichs balance is ",10000);

let operationAns = await inquirer.prompt([
    {
        type : "list",
        name : "operation",
        massage : "Choose an operation",
        choices : ["Withdraw", "Check Balance"]
    }
]);

if (operationAns.operation === "Withdraw") {
    
    let withdrawAns = await inquirer.prompt([
        {
            name : "amount",
            type : "number",
            message : "Enter your amount to withdraw"
        }
    ]);

    if (withdrawAns.amount <= balance) {
        let balance2 = withdrawAns.amount - balance;
        console.log("Your Amount Has Been Withdrawed. Your Current Balance Is",balance2);
        
    }
    else {
        console.log("Insufficient Balance!");
        
    }

}
else if (operationAns.operation === "Check Balance") {
    console.log("Your Balance Is ", balance);
    
}
else {
    console.log("Select A Valid Operation");
    
};
