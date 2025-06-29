let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let div = document.querySelector("div");
async function getImage() {
    try{
        let res = await axios.get(url);
        return res.data.message;
    }catch(e){
        console.log(e);
    }  
}
btn.addEventListener("click", async () => {
    console.log("Button was clicked");

    let imageUrl = await getImage();

    if(imageUrl){
        let img = document.createElement("img");
        img.src = imageUrl;
        img.width = 300;
        img.height = 300;

        div.innerHTML = "";
        div.appendChild(img);

}
});
