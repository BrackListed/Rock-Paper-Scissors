
let actionReminder = document.getElementById("action-reminder")
let result = document.getElementById("result")
let status = document.getElementById("status")
let playerAction = ""
let actions = [
    {name: "Rock", img: "./images/Rock.png"},
    {name: "Paper", img: "./images/Paper.png"},
    {name: "Scissors", img: "./images/Scissors.png"}
]
let bot = []
let imgPlaceholder = document.getElementById("img-placeholder")
let hasChosen = false;
let playerReady = 0;
let startGame = document.getElementById("start-game")

function restartGame(){
    playerAction = ""
    hasChosen = false
}

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
        
    } else if(playerAction === "Rock" && bot === "Scissors"){
        status.textContent = "You win!"
        
    } else if(playerAction === "Rock" && bot === "Paper"){
        status.textContent = "You lost."
        
    }
}

function scissorScenario(){
    if(playerAction === "Scissors" && bot === "Rock"){
        status.textContent = "You lost."
        
    } else if(playerAction === "Scissors" && bot === "Scissors"){
        status.textContent = "Tie."
        
    } else if(playerAction === "Scissors" && bot === "Paper"){
        status.textContent = "You win!"
        
    }   

}

function paperScenario(){
    if(playerAction === "Paper" && bot === "Rock"){
        status.textContent = "You win!"
        
    } else if(playerAction === "Paper" && bot === "Scissors"){
        status.textContent = "You lost."
        
    } else if(playerAction === "Paper" && bot === "Paper"){
        status.textContent = "Tie"
        
    }
}

function startgame(){
    let randomIndex = Math.floor(Math.random() * actions.length)
    bot = actions[randomIndex].name
    imgPlaceholder.textContent = ""
    playerReady += 1
    if(hasChosen === true && playerReady >= 1){
        rockScenario()
        scissorScenario()
        paperScenario()
        let actionImg = document.createElement("img")
        actionImg.src = actions[randomIndex].img
        imgPlaceholder.appendChild(actionImg)
        restartGame()
        console.log(bot)
        //     setTimeout(() => {
        //    location.reload() 
        // }, 1000);   
    }
}
