


function randomize() {
    document.querySelector("body").style.backgroundColor = randomColors();
  }

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  document.querySelector("#random").addEventListener("click", function() {

    randomize()
  })



function setColor(name){
    document.querySelector("body").style.backgroundColor = name;
   
}




document.querySelector("#red").addEventListener("click", function(){
    setColor("red");
});

document.querySelector("#green").addEventListener("click", function(){
    setColor("green");
});


document.querySelector("#blue").addEventListener("click", function(){
    setColor("blue");
});


document.querySelector("#yellow").addEventListener("click", function(){
    setColor("yellow");
});








