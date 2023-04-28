
let button = document.getElementById("my-button")



button.addEventListener("click", myFunction)
function myFunction() {
    alert("Button is Clicked!!!")

}

let div = document.getElementById("myDiv")
toggle = false

div.onclick = function () {
    toggle = !toggle
    div.style.background = toggle ? "red" : "blue";
}

div.style.background = "none";




