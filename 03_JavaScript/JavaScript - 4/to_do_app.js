let todo=[];

let req = prompt("Hey! Enter your choice");

while(true)
{
    if (req=="quit")
    {
        console.log("Quitting To Do");
        break;
    }

    else if (req=="list")
    {
        console.log("---------------------");
        for (let i=0; i<todo.length; i++)
        {
            console.log(i, todo[i]);
        }
        console.log("---------------------");
    }

    else if(req=="add")
    {
        let task=prompt("Enter the task to add");
        todo.push(task);
        console.log("Task Added");
    }

    else if(req=="delete")
    {
        let idx=prompt("Enter the task index");
        todo.splice(idx, 1);
        console.log("Task Deleted");
    }
    else
    {
        console.log("Wrong Request");
    }
    req=prompt("Hey! Enter your choice");
    
}