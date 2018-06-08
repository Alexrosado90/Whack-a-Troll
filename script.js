$(document).ready(function() {
    console.log( "ready!" );

let $troll = $('#troll');
let $holes = $('.hole');
let $plots = $('.plot');
let $playerName = $('.current-name');
let $timer = $('.current-timer');
let $score = $('.current-score');
let $currentScore = 0;

//Let the games begin!

function play() {
    randomHole()
    setTimeout(play, (Math.random() * 700 + 200));
}


// Score keeper
$($score).append($currentScore);
$troll.click(function() {
    $currentScore++;
    // let randomTrollIndex = Math.random();
    $($score).html($currentScore);
    let randomPlot = Math.floor(Math.random() * 5) + 1;
    $($plots[randomPlot]).append($troll)

    console.log(randomPlot)
});
//setting the timer

    let countDown = 60

    let clock = setInterval(function() { 
        $timer.text((countDown--) );
        
        if (countDown == -1) {
            console.log("Game over!");
            clearInterval(clock)
        }

    }, 1000);

    // Time to let the troll out!
function randomHole() {
 
//   while ($holes == $troll) {
    // $holes = (Math.random() * 6) | 0;
//   }
  if ($plots == $troll) {
    $('#troll').removeClass('active');
    
  }
    //  $troll == $holes;
  $('#troll').addClass('active');
    
}
play()

});

//functions needed
/*startGame()
randomHole()
reset()
 */

