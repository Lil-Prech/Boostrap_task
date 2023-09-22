var currentImage = 1;

function transitionImages (){
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");

    if(currentImage === 1){
        image1.classList.remove("show");
        image1.classList.add("show");
        currentImage = 2;     
  }
}