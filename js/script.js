//1. Define variable
const guessInput = document.getElementById("guess-box");
let guessResult = document.getElementById("guess-result");
let randomNumberAnnouncement = document.getElementById("announcement");
let randomNumber = Math.round(Math.random() * 100) + 1;
let guessAvailable = 5;
let textHistory =document.getElementById("text-history")
let history =[]



//2. functions


//check 0 and same number
function checkSameNumber(x){
 let i=history.length
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
    let guessInputValue = guessInput.value
    if (checkSameNumber(guessInputValue)){
        return 0
    }
    guessAvailable --
    document.getElementById("guess-available").innerHTML = `${guessAvailable}`
    history.push(guessInputValue)
    textHistory.innerHTML=`Your history is ${history}`
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
        randomNumberAnnouncement.innerHTML = `THE NUMBER IS ${randomNumber}` 
        guessResult.innerHTML=`
        Your guess was ${guessInputValue} and is correct`;
        document.getElementById("button-guess").disabled = true;
        document.getElementById("button-guess").innerHTML = "Correct!";
        }
    }
    else {
        randomNumberAnnouncement.innerHTML = `THE NUMBER IS ${randomNumber}` 
        document.getElementById("guess-available").innerHTML = `${guessAvailable}`
        guessResult.innerHTML=`
        You are outta guesses!`;
        document.getElementById("button-guess").disabled = true;
        document.getElementById("button-guess").innerHTML = "No more!";
    }
    document.getElementById("guess-box").value=null
  }
//----end of guessgame()


//----resetgame function
function ResetGame(){
    randomNumber = Math.round(Math.random() * 100) + 1;
    document.getElementById("guess-box").value=null
    randomNumberAnnouncement.innerHTML = `Too Low or Too High`
    guessAvailable = 5;
    document.getElementById("guess-available").innerHTML = `${guessAvailable}`
    history.splice(0,history.length)
    textHistory.innerHTML=`See your history here`
    document.getElementById("button-guess").innerHTML = "Guess again!";
    document.getElementById("button-guess").disabled = false;
}


// // let time = 30 // time start from 0
// // let myTime; // timer will be assign to this variable
// // function timecounting() {
// // myTime = setInterval(() => {
// //     time -= 1
// //     document.getElementById('timecount').innerHTML = time
// // }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
// // }
// // timecounting()// fire the timecounting function!!

// // function TimerStop(){
// //     document.getElementById("button-guess").disabled = true;
// //     document.getElementById("button-guess").innerHTML = "No more!";
// }