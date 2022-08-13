


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       let res = JSON.parse(xhttp.responseText);
       console.log(res);
       let photoContainer = document.querySelector('#results');
 
    //    let photoHeader = document.querySelector('#photo-header');
    //    photoHeader.innerHTML = `<h2>Photos of ${}</h2>`
       
       let photoData = res.photos.map(function(photo){
        console.log(photo);
        let photoDiv = document.createElement('div');
        photoDiv.classList.add('photo-div');
        photoDiv.innerHTML = `<img src=${photo.src.medium}>
        
        `

        photoContainer.appendChild(photoDiv);
        return photo;

        
       });

    
    }
};


xhttp.open("GET", "https://api.pexels.com/v1/search?query=people", true);
xhttp.setRequestHeader('Authorization', '563492ad6f91700001000001a5315a2713fd4f69ac1f28dc9bc85768')
xhttp.send();



