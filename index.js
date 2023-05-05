// Detect button press

var btnSelect = document.querySelectorAll(".drum");
var n = btnSelect.length;
for (var x=0; x<n; x++) {
    btnSelect[x].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);

        ButtonActivated(buttonInnerHtml);
    });
}


// Detect keyboard press

document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    ButtonActivated(event.key);
})

// Making the sound

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        default: console.log("buttonInnerHtml");
            break;
    }
}

// Highliting the button

function ButtonActivated(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed");}, 100)
}