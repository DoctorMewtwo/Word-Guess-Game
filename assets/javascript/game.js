

var words = ["DUMMY" , "DUMB" , "DUMBER" , "DUMBEST" , "BILL" , "TED" , "TENLETTERS"];
var wins = 0;
var losses = 0;
var word = "";
var wordArray = [""];
var string = "";
var correct;
var tries = 9;

function randomWord(arr)
{
    var word = arr[Math.floor(Math.random() * arr.length)];
    return word;

}

function game()
{
    word = randomWord(words);
    
    for(var i = 0; i < word.length; i ++)
    {
        string = string + " _ ";
    }
    
    $("#word-blanks").text(string);
    $("#win-counter").text(wins);
    $("#loss-counter").text(wins);
    $("#guesses-left").text(tries);
    console.log(word);
}

$(document).ready(function() {

    game();
})

document.onkeyup = function ( event ) {

    wordArray = word.split("");

    var letter = event.key.toUpperCase();
    

    
    if(word.includes(letter))
    {
        correct = true;
        for(var i = 0; i < wordArray.length; i++)
        {
            if(letter == wordArray[i])
            {
                var string2 = string.replace(/\s/g,"").split("");
                string2[i] = letter;
                string = string2.join(" ");
                $("#word-blanks").text(string);
                correct = true;
    
            }
    
    
            
    
        }
    }
    else
    {
        correct = false;
    }

    if(correct)
    {
        if(!(string.includes("_")))
        {   
            tries = 9;
            wins++;
            string = "";
            $("#wrong-guesses").empty();
            game();
        }
        
    }
    else
    {
        tries--;
        $("#guesses-left").text(tries);
        $("#wrong-guesses").append(" " + letter + " ");
        if(tries < 1)
        {
            tries = 9;
            losses++;
            string = "";
            $("#wrong-guesses").empty();
            game();
        }
    }

    

};

