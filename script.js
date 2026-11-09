// Mga fast food symbols nga mo appear sa slots machine
const symbols = ["🍕", "🍔", "🌮", "🍟", "🍩", "🍦"];


// Variables sa atong dula
let credits = 100;
let bet = 10;


// Pang update sa mga element sa atong HTML
const creditsDisplay = document.getElementById("credits");
const betDisplay = document.getElementById("bet");
const messageDisplay = document.getElementById("message");

const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");

const spinBtn = document.getElementById("spinBtn");
const increaseBetBtn = document.getElementById("increaseBet");
const decreaseBetBtn = document.getElementById("decreaseBet");
const resetBtn = document.getElementById("resetBtn");





// Mao ning mo pick ug random fast food symbols
function getRandomSymbol() {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}





// Ting update ug credits and bet sa screen
function updateDisplay() {
  creditsDisplay.textContent = credits;
  betDisplay.textContent = bet;
}






// Ting increase sa atong bet
increaseBetBtn.addEventListener("click", function () {
  if (bet + 10 <= credits) {
    bet += 10;
    updateDisplay();
  }
});




// Ting decrease sa atong bet
decreaseBetBtn.addEventListener("click", function () {
  if (bet - 10 >= 10) {
    bet -= 10;
    updateDisplay();
  }
});











// Naa dri ang SPIN function makita
// Naa dri ang SPIN function makita
// Naa dri ang SPIN function makita
// Naa dri ang SPIN function makita
function spin() {


  // Dili ka spin pag dili enough ang credit
  if (credits < bet) {
    messageDisplay.textContent = "Not enough credits! Reset to keep playing.";
    return;
  }

 
  // tig deduct sa credit if mag spin nah
  credits -= bet;
  updateDisplay();

  
  // Pang disable sa mga buttons para dili ka click ang player while the spin pa
  spinBtn.disabled = true;
  increaseBetBtn.disabled = true;
  decreaseBetBtn.disabled = true;

  messageDisplay.textContent = "Spinning...";

 
// Mao ni ang ga add ug spinning animation sa atong slot machine
  reel1.classList.add("spinning");
  reel2.classList.add("spinning");
  reel3.classList.add("spinning");

  
  // Tig lahi-lahi sa symbols para murag ga spin jud
  let spinCount = 0;
  const spinInterval = setInterval(function () {
    reel1.textContent = getRandomSymbol();
    reel2.textContent = getRandomSymbol();
    reel3.textContent = getRandomSymbol();
    spinCount++;

  
    // Mo stop sa animation after maka rapid change ug 15 times
    if (spinCount > 15) {
      clearInterval(spinInterval);
      finishSpin();
    }
  }, 80);
}





//Final results ang naa dri na part
function finishSpin() {
  

  // remove na ang spinnig effect
  reel1.classList.remove("spinning");
  reel2.classList.remove("spinning");
  reel3.classList.remove("spinning");

 
  // final random symbols or result sa spin
  const result1 = getRandomSymbol();
  const result2 = getRandomSymbol();
  const result3 = getRandomSymbol();

  reel1.textContent = result1;
  reel2.textContent = result2;
  reel3.textContent = result3;

  checkResult(result1, result2, result3);


  // Pa enable balik sa mga buttons
  spinBtn.disabled = false;
  increaseBetBtn.disabled = false;
  decreaseBetBtn.disabled = false;
}





// Checking na part kung unsay na daog sa pag spin
function checkResult(a, b, c) {
  if (a === b && b === c) {
    // Kung tulo ka symbols nag match, big win
    const winnings = bet * 10;
    credits += winnings;
    messageDisplay.textContent = "JACKPOT! You won " + winnings + " credits!";
  } else if (a === b || b === c || a === c) {
    // Pag duha ra, gamay ra ang daog
    const winnings = bet * 2;
    credits += winnings;
    messageDisplay.textContent = "Nice! Two matched. You won " + winnings + " credits!";
  } else {
    // Walay na daog
    messageDisplay.textContent = "No match. Try again!";
  }

  updateDisplay();


  // Tig check kung wala nay credits
  if (credits <= 0) {
    messageDisplay.textContent = "Game Over! You ran out of credits. Press Reset.";
    spinBtn.disabled = true;
  }
}



//Reset ang game then balik sa default structure and starting values
function resetGame() {
  credits = 100;
  bet = 10;
  updateDisplay();
  reel1.textContent = "🍕";
  reel2.textContent = "🍔";
  reel3.textContent = "🌮";
  messageDisplay.textContent = "Press SPIN to play!";
  spinBtn.disabled = false;
  increaseBetBtn.disabled = false;
  decreaseBetBtn.disabled = false;
}


// Main buttons naa dri
// Tig run ni sila sa ilang respective main function
spinBtn.addEventListener("click", spin);
resetBtn.addEventListener("click", resetGame);
