

var words = ["ALLIGATOR",
"ANT",
"BEAR",
"BEE",
"BIRD",
"CAMEL",
"CAT",
"CHEETAH",
"CHICKEN",
"CHIMPANZEE",
"COW",
"CROCODILE",
"DEER",
"DOG",
"DOLPHIN",
"DUCK",
"EAGLE",
"ELEPHANT",
"FISH",
"FLY",
"FOX",
"FROG",
"GIRAFFE",
"GOAT",
"GOLDFISH",
"HAMSTER",
"HIPPOPOTAMUS",
"HORSE",
"KANGAROO",
"KITTEN",
"LION",
"LOBSTER",
"MONKEY",
"OCTOPUS",
"OWL",
"PANDA",
"PIG",
"PUPPY",
"RABBIT",
"RAT",
"SCORPION",
"SEAL",
"SHARK",
"SHEEP",
"SNAIL",
"SNAKE",
"SPIDER",
"SQUIRREL",
"TIGER",
"TURTLE",
"WOLF",
"ZEBRA",
];
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
    string = "";
    $("#wrong-guesses").empty();
    tries = 9;
    
    for(var i = 0; i < word.length; i ++)
    {
        string = string + " _ ";
    }
    
    $("#word-blanks").text(string);
    $("#win-counter").text(wins);
    $("#loss-counter").text(losses);
    $("#guesses-left").text(tries);
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
            wins++;
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
            losses++;
            game();
        }
    }

    

};

