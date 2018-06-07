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

    let countDown = 10

    let clock = setInterval(function() { 
        $timer.text((countDown--) );
        
        if (countDown == -1) {
            console.log("Game over!");
            clearInterval(clock)
        }

    }, 1000);
           
});





//functions needed
/*startGame()
randomHole()
countDown()
reset()
 */

