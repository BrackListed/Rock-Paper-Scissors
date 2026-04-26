
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
let playerStats = document.getElementById("player-stats")
let winCount = parseInt(localStorage.getItem("winCount")) || 0
let lossCount = parseInt(localStorage.getItem("lossCount")) || 0
let clearStats = document.getElementById("clear-button")

function restartGame(){
    playerAction = ""
    hasChosen = false
    actionReminder.textContent = "Action Chosen: None"
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
        winCount += 1
        
    } else if(playerAction === "Rock" && bot === "Paper"){
        status.textContent = "You lost."
        lossCount += 1
        
    }
}

function scissorScenario(){
    if(playerAction === "Scissors" && bot === "Rock"){
        status.textContent = "You lost."
        lossCount += 1
        
    } else if(playerAction === "Scissors" && bot === "Scissors"){
        status.textContent = "Tie."
        
    } else if(playerAction === "Scissors" && bot === "Paper"){
        status.textContent = "You win!"
        winCount += 1
        
    }   

}

function paperScenario(){
    if(playerAction === "Paper" && bot === "Rock"){
        status.textContent = "You win!"
        winCount += 1
        
    } else if(playerAction === "Paper" && bot === "Scissors"){
        status.textContent = "You lost."
        lossCount += 1
        
    } else if(playerAction === "Paper" && bot === "Paper"){
        status.textContent = "Tie"
        
    }
}

function startgame(){
    playerStats.textContent = "Wins: " + winCount + "Loss: " + lossCount
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
    }
    JSON.stringify(winCount)
    JSON.stringify(lossCount)
    localStorage.setItem("winCount", winCount)
    localStorage.setItem("lossCount", lossCount)
    if(winCount > 0 ){
        clearStats.style.display = "block"
    } else if(lossCount > 0){
        clearStats.style.display = "block"
    } else if(winCount > 0 && lossCount > 0){
        clearStats.style.display = "block"
    }
}

function clearStorage(){
    localStorage.clear()
    winCount = 0
    lossCount = 0
    playerStats.textContent = "Wins: 0 Loss: 0"
}