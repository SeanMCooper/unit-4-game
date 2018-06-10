var wins = 0;
var losses = 0;
var randomNumber = 0;
var crystalValues = []
var numberOfCrystals = "four"
var currentScore = 0;
var gameRun = false;




//This button begins the game when pressed
$("#startButton").on("click", function(){
    gameStart();
})

function gameStart(){
    gameRun = true
    gameRefresh();
    generateRandom();
    determineCrystalsValues();
}

function checkScore(){
    while(gameRun = true){
        if(currentScore === randomNumber){
            gameWin();
        }else if(currentScore > randomNumber){
            gameLoss();
        }else{
            break;
        }
    }
}

//to define which value each crystal will actually recieve 
function determineCrystalPosition(){
    var crystalOne = crystalValues[0];
    var crystalTwo = crystalValues[1];
    var crystalThree = crystalValues[2];
    var crystalFour = crystalValues[3];
    console.log(crystalOne, crystalTwo, crystalThree, crystalFour)
    }

//to determine the 4 random values of crystals --- random # 2-10
function determineCrystalsValues(){
    while(crystalValues.length < 4){
        var randomCrystal = Math.floor((Math.random() *10)+2);
        if(crystalValues.indexOf(randomCrystal) > -1) 
        continue;
        crystalValues[crystalValues.length] = randomCrystal;
        console.log(crystalValues)
        determineCrystalPosition();
    }
}
    

// will refresh all values sans wins/losses
function gameRefresh(){
    console.log("game refreshed");
    var currentScore = 0;
    crystalValues = []
    
    }


//generate # from 20-100
function generateRandom(){
    randomNumber = Math.floor((Math.random() * 81) + 19);
    displayAll();
    console.log(randomNumber);
}


//lose
function gameLoss(){
    alert("You have gone too far, try again");
    losses++;
    displayAll();
    gameRun = false;
    gameRefresh();

    }

//win
function gameWin(){
    alert("Great job!");
    wins++;
    gameRun = false;
    gameRefresh();
    }

// Click events to add points from crystals
$("#crystal1").on("click", function(){
    crystalOne = crystalValues[0]
    currentScore = currentScore+crystalOne;
    console.log(currentScore);
    displayAll();
    checkScore();
})
$("#crystal2").on("click", function(){
    crystalTwo = crystalValues[1]
    currentScore = currentScore+crystalTwo;
    console.log(currentScore);
    displayAll();
    checkScore();
})
$("#crystal3").on("click", function(){
    crystalThree = crystalValues[2]
    currentScore = currentScore+crystalThree;
    console.log(currentScore);
    displayAll();
    checkScore();
})
$("#crystal4").on("click", function(){
    crystalFour = crystalValues[3]
    currentScore = currentScore+crystalFour;
    console.log(currentScore);
    displayAll();
    checkScore();
})


// to update HTML with game data
function displayAll(){
    $("#currentWinningNumber").text(randomNumber);
    $("#userScore").text(currentScore);
    $("#winNumber").text(wins);
    $("#lossNumber").text(losses);
}



/* Other Variations of randomizing crystal values.(maybe dont delete)
function determineCrystals(){
    for(var i = 0; i < numberOfCrystals.length; i++){
    crystalValues[i] = Math.floor((Math.random() * 10)+1);
     }
     console.log(crystalValues);
} */