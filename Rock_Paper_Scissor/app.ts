import inquirer from "inquirer";


let game : {
    P1 : string,
    P2 : string,
} = await inquirer.prompt([
    {
        type : "list",
        name : "P1",
        message : "Player 1's Choice",
        choices : ["Rock", "Paper", "Scissor"],
    },

    {
        type : "list",
        name : "P2",
        message : "Player 2's Choice",
        choices : ["Rock", "Paper", "Scissor"],
    }
])


const {P1, P2} = game;


if (P1 && P2) {
    let result;

    if (P1 == "Rock" && P2 == "Rock") {
        result = "Game Is Tied"
    } else if (P1 == "Rock" && P2 == "Paper"){
        result = "Paper Wins!";
    } else if (P1 == "Rock" && P2 == "Scissor"){
        result = "Rock Wins!";
    } else if (P1 == "Paper" && P2 == "Rock"){
        result = "Paper Wins!"
    } else if (P1 == "Paper" && P2 == "Paper"){
        result = "Game Is Tied";
    } else if (P1 == "Paper" && P2 == "Scissor"){
        result = "Scissor Wins!";
    } else if (P1 == "Scissor" && P2 == "Rock"){
        result = "Rock Wins!"
    } else if (P1 == "Scissor" && P2 == "Paper"){
        result = "Scissor Wins!";
    } else if (P1 == "Scissor" && P2 == "Scissor"){
        result = "Game Is Tied";
    } else{
        result = "404 Not Found"
    }

    console.log("Ladies And Gentleman:", result.toUpperCase(
        
    ));
}
