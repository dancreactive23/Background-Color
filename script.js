let css = document.querySelector("h3");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body = document.getElementById("gradient");
let random_button = document.getElementsByClassName("random")[0];

//Default value assignment

color1.defaultValue ="#3efaff";
color2.defaultValue ="#0012e0";
body.style.background = "linear-gradient(to right,"+color1.defaultValue+","+color2.defaultValue+")";
css.textContent = body.style.background +";";

//Random button to generate random color
function randomColorGeneration(){
    let n1 =(Math.random()* 0xfffff* 1000000).toString(16).slice(0,6);
    let n2 =(Math.random()* 0xfffff* 1000000).toString(16).slice(0,6);
    n1 = "#"+n1;
    n2=  "#"+n2;
    color1.value = n1;
    color2.value = n2;
    setGradient();
}

function setGradient(){
    body.style.background = "linear-gradient(to right,"+color1.value+","+ color2.value +")";
    css.textContent = body.style.background + ";"; 
}


color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

random_button.addEventListener("click",randomColorGeneration);

