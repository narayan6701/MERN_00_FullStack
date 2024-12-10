const joke = "https://icanhazdadjoke.com";

async function getJoke() {
    try{
        const config={headers:{Accept:"application/json"}};
        let res =  await axios.get(joke, config);
        console.log(res);
        console.log(res.data);
    }catch(e){
        console.log(e);
    } 
}