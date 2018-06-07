$(document).ready(function() {
    console.log( "ready!" );

const $troll = $('#troll');
const $hole = $('#hole');
let $playerName = $('.current-name');
let $timer = $('.current-timer');
let $score = $('.current-score');
let $currentScore = 0


// Score keeper
$($score).append($currentScore);
$troll.click(function() {
    $currentScore++;
    $($score).html($currentScore);
    
});

//setting the timer
let countDown = 60000
function clock(){
   for (let i = 0; i > countDown; i--); {

setInterval(function() { 
    $timer.html((countDown / 1000) - 1);
    return countDown
}, 1000);
}
}
clock();
});





//functions needed
/*startGame()
randomHole()
countDown()
reset()
 */
//test functions

