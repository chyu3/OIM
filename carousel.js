var position = 0;

window.onload = function () {
    carousel(position);

    setInterval(function (){
        nextSlides();
    }, 5000);
};

function prevSlides() {
    position--;
    carousel(position);
}

function nextSlides() {
    position++;
    carousel(position);
}

function carousel(param_position) {
    var carousel_items = document.getElementsByClassName("mySlides");
    //Caters for excessive index positions
    if (param_position >= carousel_items.length) {
        param_position = 0;
        position = 0;
    }
    //Caters for negative index positions
    if (param_position < 0) {
        param_position = carousel_items.length - 1;
        position = carousel_items.length - 1;
    }

    for (var i = 0; i < carousel_items.length; i++) {
        carousel_items[i].style.display = "none";
    }
    carousel_items[param_position].style.display = "block";
}