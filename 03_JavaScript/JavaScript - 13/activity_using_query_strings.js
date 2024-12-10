let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    console.log("button was clicked");
    let colleges = await getColleges(country);
    console.log(colleges);
    show(colleges);

});

// let country ="nepal";

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colleges){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        console.log(res);
        console.log(res.data);
        return res.data;
    }
    catch(e){
        console.log("error detected ", e);
    }
}