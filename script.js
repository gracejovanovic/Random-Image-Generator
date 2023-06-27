let unsplashImage = document.getElementById("unsplashImage");
let imageLink = document.getElementById("imageLink");
let creator = document.getElementById("creator");
let randomPhoto = document.getElementById("random-photo");
let clientID = "C33VI_892IG0JVrsPf5nh-8mA6BWfbOVzop0P4DFn2k";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

async function getRandomPhoto() {
    fetch(endpoint)
        .then((response) => response.json()) 
        .then((jsonData) => {
            unsplashImage.src = jsonData.urls.regular;
            imageLink.setAttribute("href", jsonData.links.html)
            creator.innerText = jsonData.user.name;
            creator.setAttribute("href", jsonData.user.portfolio_url);
        })
        .catch((error) => console.log("Error:" + error));
    }

window.addEventListener("load", getRandomPhoto);
randomPhoto.addEventListener("click",getRandomPhoto);
searchBtn.addEventListener("click", getInfo);
searchInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        getInfo();
    }
});
