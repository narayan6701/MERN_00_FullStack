const fav_movie="avatar";
let guess=prompt("Guess my favourite movie");

while(fav_movie!=guess)
{
    if (guess=="quit")
    {
        console.log("You Quit!")
        break;
    }
    guess=prompt("Wrong Guess ! Please try Again");
}

if(guess=="avatar")
{
    console.log("Congrats! You guessed it right");
}