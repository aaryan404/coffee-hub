
function burger() {
    document.getElementById("cburger").style.visibility = "hidden";
    document.getElementById("crossicon").style.visibility = "visible";
    document.getElementById("nav").style.visibility = "visible";
    document.getElementById("nav").style.animation = "simpleanimation forwards 1s ease-in-out;";

}
function cross() {
    document.getElementById("nav").style.visibility = "hidden";
    document.getElementById("cburger").style.visibility = "visible";
    document.getElementById("crossicon").style.visibility = "hidden";
}

