let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    loginForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    man.classList.remove("active");
}


let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
    shoppingCart.classList.toggle("active");
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
    man.classList.remove("active");
}


let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    searchForm.classList.remove("active");
    man.classList.remove("active");
}


window.onscroll = () => {
    loginForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    searchForm.classList.remove("active");
    man.classList.remove("active");
}







var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

downBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}