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

});





//functions needed
/*startGame()
randomHole()
countDown()
reset()
 */
//test functions

