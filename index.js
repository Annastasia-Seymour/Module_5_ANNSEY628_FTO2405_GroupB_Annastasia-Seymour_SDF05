//I wasnt sure if i was supposed to keep it per or put my name
let player = {
    name : "Per",
    chips : 200
}

let cards =[]//oh no its an array! Enough practise and ill be okay // array is empty at start of program
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")//need to go over the logic again for these getElementById
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor( Math.random()*13 ) + 1 
    if (randomNumber > 10) { 
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }  
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " // cards[0] + " " + cards[1]  I found the error!
     for ( let i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " "
     }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    //console.log("Drawing a new card from the deck!")
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
