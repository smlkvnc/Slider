var models = [
    {
        name : "Bmw 418",
        image : "img/bmw.jpg",

    },
    {
        name : "Mazda CX-3",
        image : "img/mazda.jpg",

    },
    {
        name : "Volvo S60",
        image : "img/volvo.jpg",

    },
    {
        name : "Skoda Superb",
        image : "img/skoda.jpg",

    },
    {
        name : "Honda Civic",
        image : "img/honda.jpg",

    },
]
var index = 0;
var slideCount = models.length;
var settings = {
    duration : "1000",

}
var interval;


init(settings);

document.querySelector(".fa-arrow-left").addEventListener("click" , function () {

    index--;
    showSlide(index);
});
document.querySelector(".fa-arrow-right").addEventListener("click" , function () {

    index++;
    showSlide(index);
    
});
document.querySelectorAll("i").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    })
})
document.querySelectorAll("i").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings);
    })
})
document.querySelector(".card-img-top").setAttribute("src",models[index].image);
document.querySelector(".card-title").textContent = models[index].name;

function init(settings) {
    interval = setInterval(function(){
        showSlide(index);
        index++;
        
        
    },settings.duration)
}


function showSlide(i) {
    index = i;
    if (i < 0) {
        index = slideCount - 1;
    }
    if (i >= slideCount) {
        index = 0;
    }

    document.querySelector(".card-img-top").setAttribute("src",models[index].image);
    document.querySelector(".card-title").textContent = models[index].name;
}