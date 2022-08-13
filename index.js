
let searchForm = document.querySelector('#search-form');
let logoDiv = document.createElement('div');
logoDiv.classList.add('logo-div');
logoDiv.innerHTML = `<img class="logo-img" src="pexels_api_project_logo.png">`
let navHeader = document.querySelector('#nav-header');
navHeader.appendChild(logoDiv);


searchForm.addEventListener('submit', function(e){
    e.preventDefault();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let res = JSON.parse(xhttp.responseText);
            console.log(res);
            let photoContainer = document.querySelector('#results');
            let photoHeader = document.querySelector('#photo-header');

            photoContainer.innerHTML = '';
            photoHeader.innerHTML = '';

            let photoH2 = document.createElement("h2");
            photoH2.classList.add('white', 'margin-right');
            photoH2.innerHTML = "Photos";

            let photoCount = document.createElement('h2');
            photoCount.innerHTML = `${res.total_results}`;

            photoHeader.appendChild(photoH2);
            photoHeader.appendChild(photoCount);
        

            let photoData = res.photos.map(function(photo){
            console.log(photo);
            let photoDiv = document.createElement('div');
            photoDiv.classList.add('photo-div');
            photoDiv.innerHTML = `<img src=${photo.src.medium}>`

            photoContainer.appendChild(photoDiv);
            return photo;

            });
    
    }
};

let queryValue = document.querySelector('#search-bar').value || 'china';

xhttp.open("GET", `https://api.pexels.com/v1/search?query=${queryValue}`, true);
xhttp.setRequestHeader('Authorization', '563492ad6f91700001000001a5315a2713fd4f69ac1f28dc9bc85768')
xhttp.send();

});






