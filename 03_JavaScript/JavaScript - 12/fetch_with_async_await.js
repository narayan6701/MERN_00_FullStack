let api = "https://catfact.ninja/fact";

async function getFact() {
  try{
    let res = await fetch(api);
    let data = await res.json();
    console.log(data.fact);
  } 
  catch (e) {
    console.log(`the error is ${e}`);
  }

  console.log("Bye!!");
}