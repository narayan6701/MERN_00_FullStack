let heroes=[ ["ironman","spiderman", "thor"], ["superman", "wonder woman", "flash"]];

for (let i=0; i<heroes.length; i++)
{
    console.log(`List #${i}`);
    for (let j=0; j<heroes[i].length; j++)
    {
        console.log(heroes[i][j]);
    }
}


let students=[["narayan", 88],["monika", 75], ["kirti",80]];

for(let i=0; i<students.length; i++)
{
    console.log(i, students[i], students[i].length);
    for(let j=0; j<students[i].length; j++)
    {
        console.log(j, students[i][j], students[i][j].length);
    }
}