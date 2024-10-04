let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let fact = await getFact();
    // console.log(fact);

    let para = document.querySelector("#catfact");
    para.innerText = fact;
});


let url = "https://catfact.ninja/fact";

async function getFact(){
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (error) {
        console.log("The error is ", error);
        return "No fact found";
    }
}