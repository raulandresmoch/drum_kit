
var crash = new Audio("./sounds/crash.mp3");
var kickBase = new Audio("./sounds/kick-bass.mp3");
var snare = new Audio("./sounds/snare.mp3");
var tom_1 = new Audio("./sounds/tom-1.mp3");
var tom_2 = new Audio("./sounds/tom-2.mp3");
var tom_3 = new Audio("./sounds/tom-3.mp3");
var tom_4 = new Audio("./sounds/tom-4.mp3");


// Detecting Button Press//

for (i = 0; i<document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
       
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
 
        
    })
}

//Detecting Keyboard press//

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {

    switch(key){
        case "w":
            crash.play();
        break;
        case "a":
            kickBase.play();
        break;
        case "s":
            snare.play();
        break;
        case "d":
            tom_1.play();
        break;
        case "j":
            tom_2.play();
        break;
        case "k":
            tom_3.play();
        break;
        case "l":
            tom_4.play();
        break;

        default: console.log(buttonInnerHTML)
    }
}



function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100);
}




// tom_1.play();