
let actionReminder = document.getElementById("action-reminder")
let result = document.getElementById("result")
let status = document.getElementById("status")
let playerAction = ""
let actions = [
    {name: "Rock", img: "./images/Rock.png"},
    {name: "Paper", img: "./images/Paper.png"},
    {name: "Scissors", img: "./images/Scissors.png"}
]
let randomIndex = Math.floor(Math.random() * actions.length)
let bot = actions[randomIndex].name
let imgPlaceholder = document.getElementById("img-placeholder")
let hasChosen = false;
let playerReady = 0;
let startGame = document.getElementById("start-game")



function rockAction(){
    playerAction = "Rock"
    actionReminder.textContent  = "Action Chosen: " + playerAction
    hasChosen = true
    startGame.style.display = "block"
}

function scissorAction(){
    playerAction = "Scissors"
    actionReminder.textContent  = "Action Chosen: " + playerAction
    hasChosen = true
    startGame.style.display = "block"
}

function paperAction(){
    playerAction = "Paper"
    actionReminder.textContent  = "Action Chosen: " + playerAction
    hasChosen = true
    startGame.style.display = "block"
}

function rockScenario(){
    if(playerAction === "Rock" && bot === "Rock"){
        status.textContent = "Tie"
        alert("Tie")
    } else if(playerAction === "Rock" && bot === "Scissors"){
        status.textContent = "You win!"
        alert("You won!")
    } else if(playerAction === "Rock" && bot === "Paper"){
        status.textContent = "You lost."
        alert("You lost")
    }
}

function scissorScenario(){
    if(playerAction === "Scissors" && bot === "Rock"){
        status.textContent = "You lost."
        alert("You lost")
    } else if(playerAction === "Scissors" && bot === "Scissors"){
        status.textContent = "Tie."
        alert("Tie")
    } else if(playerAction === "Scissors" && bot === "Paper"){
        status.textContent = "You win!"
        alert("You won!")
    }   

}

function paperScenario(){
    if(playerAction === "Paper" && bot === "Rock"){
        status.textContent = "You win!"
        alert("You won!")
    } else if(playerAction === "Paper" && bot === "Scissors"){
        status.textContent = "You lost."
        alert("You lost.")
    } else if(playerAction === "Paper" && bot === "Paper"){
        status.textContent = "Tie"
        alert("Tie")
    }
}

function startgame(){
    playerReady += 1
    if(hasChosen === true && playerReady === 1){
        rockScenario()
        scissorScenario()
        paperScenario()
        let actionImg = document.createElement("img")
        actionImg.src = actions[randomIndex].img
        imgPlaceholder.appendChild(actionImg)
            setTimeout(() => {
           location.reload() 
        }, 1000);   
    } else{
        alert("Choose something")
    }

}

