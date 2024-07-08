let str = "Narayan Bhardwaj";
let a=0;

function count_vowels(str)
{
    for(let i=0; i<str.length; i++)
    {
        if((str[i]=="a")||(str[i]=="e")||(str[i]=="i")||(str[i]=="o")||(str[i]=="u"))
        {
            a++;
        }
    }

    return a;
}

console.log(count_vowels(str));