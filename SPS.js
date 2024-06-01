
let userscor = document.querySelector("#user-score");
let compscor = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let a = 0;
let b = 0;

const choices = document.querySelectorAll(".box");

const genComputerChoice = () => {
    let options = ["scissor","paper","rock"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showdraw = () => {
    msg.innerText = `The match is a draw`; 
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (winner) =>{
    if(winner){
        msg.innerText = `You win🎉! , Onto the next Round`;
        msg.style.backgroundColor = "green";
    }else{
        msg.innerText = `You loose☹️! , Try again`;
        msg.style.backgroundColor = "red";        
    }
        msg.classList.remove("hide");
}

const playGame = (userchoice) => {
    let compch = genComputerChoice();
    if(userchoice === compch){
        showdraw();
    }else{
        let winner = true;
        if(userchoice === "rock"){
            if(compch === "paper"){
                b++;
                winner = false;
                compscor.innerText = `${b}`;
            }else{
                a++;
                winner = true;
                userscor.innerText = `${a}`;
            }
        }
            else if(userchoice === "paper"){
                if(compch === "scissor"){
                    b++;
                    winner = false;
                    compscor.innerText = `${b}`;
                }else{
                    a++;
                    winner = true;
                    userscor.innerText = `${a}`;
                }
            }
            else if(userchoice === "scissor"){
                if(compch === "rock"){
                    b++;
                    winner = false;
                    compscor.innerText = `${b}`;
                }else{
                    a++;
                    winner = true;
                    userscor.innerText = `${a}`;
                }
            }
            showwinner(winner);
        }
    }

choices.forEach((box) => {
    box.addEventListener ("click",() =>{
        let userchoice = box.getAttribute("id");
        playGame(userchoice);
    }); 
});
