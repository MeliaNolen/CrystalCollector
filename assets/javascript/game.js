$(document).ready( function() { 
   // Global vars
    var wins = 0;
    var losses = 0;
    var crystalNumbersArray = [];
    var score = 0;
    var randomNumber;

    // Setting up pictures and scoreboard
    function startFunc() {
        $(".score").html("<p>Score: " + "</p>" + "<p>Wins: " + wins + "<p>" + "<p>Losses: " + losses + "<p>");
        $(".crystals").html("<img src=assets/images/crystal1.jpg class=pictures id=button1 />");
        $(".crystals").append("<img src=assets/images/crystal2.jpg class=pictures id=button2 />");
        $(".crystals").append("<img src=assets/images/crystal3.jpg class=pictures id=button3 />");
        $(".crystals").append("<img src=assets/images/crystal4.jpg class=pictures id=button4 />");
        $(".pictures").attr({height:100, width:100});
        $(".total-score").text(score);
    }; 
    startFunc();

    // Generating and displaying the random number the user will try to match
    // Between 19 and 120
    function randomNumberFunc() {
        randomNumber = Math.floor(Math.random() * (121 - 19)) + 19;
        $(".number").html("<p>Random Number: <p>" + randomNumber);
    };
    randomNumberFunc();

    // Generating array of 4 numbers between 1 and 12 
    function crystalNumbersFunc() {
        for (var i = 0; i < 4; i++) {
            var crystalNumber = Math.floor(Math.random() * 12) + 1;
            crystalNumbersArray.push(crystalNumber);
        }
    };
    crystalNumbersFunc();

    // Function used to reset the game later
    // Generates NEW random number, NEW array of values for the crystals, and set score to 0
    // Will only be called when the player looses or wins a turn
    function reset() {
        randomNumberFunc();
        crystalNumbersArray = [];
        crystalNumbersFunc();
        score = 0;
    };

    // Matching photos to index values of 4 number array
    $(".pictures").on("click", function() {
        if (this.id  === "button1") {
            value = crystalNumbersArray[0];
            $(".total-score").text(score += value);
            
        }
        else if (this.id  === "button2") {
            value = crystalNumbersArray[1];
            $(".total-score").text(score += value);
            
        }
        else if (this.id  === "button3") {
            value = crystalNumbersArray[2];
            $(".total-score").text(score += value);
            
        }
        else if (this.id  === "button4") {
            value = crystalNumbersArray[3];
            $(".total-score").text(score += value);
            
        };
        
        // Calculating your total score and tracking wins/losses
        if (score === randomNumber) {
                wins++;
                $(".total-score").text(score=0);
                reset();

        }
        else if (score > randomNumber) {
                losses++;
                $(".total-score").text(score=0);
                reset();
        }; 
        
        // Displaying wins and losses
        $(".score").html("<p>Score: " + "</p>" + "<p>Wins: " + wins + "<p>" + "<p>Losses: " + losses + "<p>");

    });
});