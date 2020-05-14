//1. Define variable
const guessInput = document.getElementById("guess-box");
let guessResult = document.getElementById("guess-result");
let randomNumberAnnouncement = document.getElementById("announcement");
let randomNumber = Math.round(Math.random() * 100) + 1;
let guessAvailable = 5;
let textHistory =document.getElementById("text-history")
let history =[]
let i=history.length
let round = []
let historyString = ``
let roundString = ``
let roundHistory = document.getElementById("round-history")
let scores=[]
let score=0
let winningRounds=[]
let scoreText = document.getElementById("score-text")
let bestScoreText = document.getElementById("best-score-text")
// let roundHistory1 = document.getElementById("round-history1")
// let roundHistory2 = document.getElementById("round-history2")


//2. functions

//check 0 and same number
function checkSameNumber(x){
 if (i>=0 && Number(x)==0){
     alert("You must guess a bigger number than Zero!")
     document.getElementById("guess-box").value=null
    return true
 }
 else if (i>0 && Number(x)==history[i-1]){
    alert("You must not guess the same number again!")
    document.getElementById("guess-box").value=null
   return true
 }
 else {
    return false;
 }
}
//end 0 and check same number



//beginning of guess number
function guessNumber() {
    if (time > 0){
        clearInterval(myTime)
        time = 30
        timecounting()
    }
    else if (time <=0){
       timecounting(); 
    }
    let guessInputValue = guessInput.value
    if (checkSameNumber(guessInputValue)){
        return 0
    }
    guessAvailable --
    document.getElementById("guess-available").innerHTML = `${guessAvailable}`
    //----history
    history.push(guessInputValue)
    textHistory.innerHTML=`You are currently guessing ${history}!`
    // for (let a = 0; a< history.length; a++){
    //     historyString = historyString + `${history[a]}, `
    // }
    // textHistory.innerHTML = `Your history is ${historyString}`
    // historyString =``
    //---history
    if (guessAvailable>0){
        if (guessInputValue > randomNumber){ 
        guessResult.innerHTML=`
        Your guess was ${guessInputValue} and is greater by ${guessInputValue-randomNumber}`;
        }
        else if(guessInputValue < randomNumber){
        guessResult.innerHTML=`
        Your guess was ${guessInputValue} and is lesser by ${randomNumber - guessInputValue}!`;
         }
        else {
        clearInterval(myTime)
        randomNumberAnnouncement.innerHTML = `THE NUMBER IS ${randomNumber}` 
        guessResult.innerHTML=`
        Your guess was ${guessInputValue} and is correct`;
        document.getElementById("button-guess").disabled = true;
        document.getElementById("button-guess").innerHTML = "Correct!";
        winningRounds.push(guessInputValue)
        checkRound()
        checkScore()
        // roundString =``
        // round.push(history)
        // if (round.length=5){
        //     round.shift()
        //     round.push(history)
        // }
        // roundHistory1.innerHTML=`In this round you chose ${round[round.length-1]}`
        // roundHistory2.innerHTML=`In round 1 you chose ${round[1]}`
        // for (let a = 0; a< round.length; a++){
        //     roundHistory.innerHTML = `You have used ${round.length} rounds and your previous guesses were ${round[round.length-1]}!`
        //     }

        // ---round
        }
    }
        else {
        randomNumberAnnouncement.innerHTML = `THE NUMBER IS ${randomNumber}` 
        document.getElementById("guess-available").innerHTML = `${guessAvailable}`
        guessResult.innerHTML=`You are outta guesses!`;
        GameOver(`guesses`)
        console.log(guessInputValue)
        checkRound()
        checkScore()
        // if (round=5){
        //     round.shift()
        //     round.push(history)
        // }
        // roundHistory1.innerHTML=`In round 1 you chose ${round[round.length-1]}`
        // roundHistory2.innerHTML=`In round 2 you chose ${round[1]}`

    //     // roundHistory.innerHTML = `${roundString}`
    //     // roundString =``
    }
    document.getElementById("guess-box").value=null
  }
//----end of guessgame()


//----resetgame function
function ResetGame(){
    clearInterval(myTime)
    time =30
    timecounting()
    randomNumber = Math.round(Math.random() * 100) + 1;
    document.getElementById("guess-box").value=null
    randomNumberAnnouncement.innerHTML = `Too Low or Too High`
    guessAvailable = 5;
    guessResult.innerHTML=``;
    textHistory.innerHTML=``;
    document.getElementById("guess-available").innerHTML = `${guessAvailable}`
    history =[]
    document.getElementById("button-guess").innerHTML = "Guess again!";
    document.getElementById("button-guess").disabled = false;
}


//4. Time-counting function
let time = 30 // time start from 30
let myTime; // timer will be assign to this variable
function timecounting() {
myTime = setInterval(() => {
    time --
    document.getElementById('timecount').innerHTML = time
    if (time === 0){
            GameOver(`time`)
    }
}, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timecounting()// fire the timecounting function!!
//---end of timecount


//5. function Game Over
function GameOver(message){
    clearInterval(myTime);
    document.getElementById("button-guess").disabled = true;
    document.getElementById("button-guess").innerHTML = `No more ${message}!`;
    }
//-end of Game Over


//6. functionScore
function checkScore(){
    let score = ((guessAvailable)*100)-(30-time)
    scores.push(score)
    scoreText.innerHTML=`Your current score is ${scores[scores.length-1]}`
    let bestScore = Math.max.apply(Math, scores)
    bestScoreText.innerHTML=`Your best score is ${bestScore}`
    }

//7. functionRound
function checkRound(){
    round.push(history)
    for (let a = 0; a< round.length; a++){
        roundHistory.innerHTML = `You have won ${winningRounds.length} rounds out of ${round.length} and your previous guesses were ${round[round.length-1]}!`
    }
}




    // function CheckBestScore(){
    // bestScore = Math.max(+scores, +scores[scores.length-1])
    //  bestScoreText.innerHTML=`Your best score is ${+bestScore}`
    // }
    // CheckBestScore()
    // console.log(+scores)
    // console.log(scores[scores.length-1])
