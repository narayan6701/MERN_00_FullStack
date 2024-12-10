let url = "http://universities.hipolabs.com/search?name=india";

let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    let state = document.querySelector("input").value;
    console.log(state);
    console.log("button was clicked");
    let colleges = await getColleges(state);
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

async function getColleges(state){
    try{
        let res = await axios.get(url+state);
        console.log(res);
        console.log(res.data);
        return res.data;
    }
    catch(e){
        console.log("error detected ", e);
    }
}