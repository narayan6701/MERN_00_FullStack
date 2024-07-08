let max=(prompt("Enter your number and type 'quit' to close the game"));

if (max=="quit")
{
    alert("You quitted the game");
}
else
{
    let random=Math.floor(Math.random() * parseInt(max)) + 1;
    console.log(random);

    let guess=(prompt("Guess the generated number"));

    if (parseInt(guess) == random)
    {
        alert("Congrats! You guessed it right.");
    }
    else
    {
        if (guess=="quit")
        {
            alert("You quitted the game!");
        }

        while(guess!="quit" && parseInt(guess)!=random)
        {
            if (parseInt(guess)>random)
            {
                guess=prompt("Wrong Guess! Large number entered, type 'quit' to close the game.");
            }
            else if (parseInt(guess)<random)
            {
                guess=prompt("Wrong Guess! Small number entered, type 'quit' to close the game.");
            }
            
            if (parseInt(guess)==random)
            {
                alert("Congrats! You guessed it right.");
            }
            else if (guess=="quit")
            {
                alert("You quitted the game!");
            }
        }
    }   
}
 


