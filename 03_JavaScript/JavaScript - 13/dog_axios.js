let pics = "https://dog.ceo/api/breeds/image/random";

async function getImg () {

    try {
        let pic = await axios.get(pics);
        let img_link = pic.data.message;
        console.log(img_link);

        let image=document.createElement("img");
        document.querySelector("body").prepend(image);
        document.querySelector("img").setAttribute("src", img_link);
    } catch (error) {
        console.log("Image can't be loaded");
    }
}

getImg();