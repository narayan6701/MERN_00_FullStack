let country=["Australia", "Germany","United States of America", "gggggggggggggggggggg","India"];

function largest_name(country)
{
    let large=" ";

    for (let i=0; i<country.length; i++)
    {
        if (large<country[i])
        {
            large=country[i];
        }
    }

    return large;
}

console.log(largest_name(country));