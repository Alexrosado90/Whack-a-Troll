$(document).ready(function() {
    console.log( "ready!" );

let $troll = $('#troll');
let $holes = $('.hole');
let $plots = $('.plot');
let $playerName = $('.current-name');
let $timer = $('.current-timer');
let $score = $('.current-score');
let $currentScore = 0;
let $reset = $('.restart')

//Let the games begin!

function play() {
    randomHole()
    setTimeout(play, (Math.random() * 700 + 200));
}


// Score keeper
    $($score).append($currentScore);
    $troll.click(function() {
        $currentScore++;
        $($score).html($currentScore);
        let randomPlot = Math.floor(Math.random() * 5) + 1;
        $($plots[randomPlot]).append($troll)

});
//setting the timer

    let countDown = 60

    let clock = setInterval(function() { 
        $timer.text((countDown--) );
        
        if (countDown == -1) {
            console.log("Game over!");
            clearInterval(clock)
            alert('Game over!')
            $reset.addClass('active');

        }

    }, 1000);


    // Time to let the troll out!
function randomHole() {
   
}
$troll.addClass('active');
play()

function reset() {
    ready();
}

$reset.click(function() {
    Program.restart();
   })
});

//functions needed
/*startGame()
randomHole()
reset()
 */

