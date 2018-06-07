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
//function clock(){
   // for (let i = 60; i > countDown; i--);
let countDown = 60000;
setTimeout(function() { 
    $timer.html((countDown / 1000) - 1);
    $timer = $timer--;

    
}, 1000);

});





//functions needed
/*startGame()
randomHole()
countDown()
reset()
 */
//test functions

