// --------------------------------BLACK_Jack-GAME--------------------------------------
let player = {
    name: "Saad Patel",
    chips: 150 
}

let cards = []
let sum = 0
let message =  ""
let isAlive = false
let hasBlackjack = false
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector(".cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }
}

function startGame(){
     isAlive = true
     let firstcard = getRandomCard()
     let secondcard = getRandomCard()
     cards = [firstcard, secondcard]
     sum = firstcard + secondcard
     rendergame()
}


function rendergame(){
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
     if(sum <= 20 ){
        message = "Do you want to Draw an other card"
    } else if(sum === 21){
        message = "Wohoo! You have got the black"
        hasBlackjack= true
    } else{
        message = "You lost the Game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newcard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard() 
        sum += card
        cards.push(card)
        rendergame()
    }


}