/* Represents if each button is currently pressed */
var energetic = false;
var excited = false;
var angry = false;
var joyful = false;
var surprised = false;
var calm = false;

/* Change the CSS code a button runs based on its current class */
function changeButton(id) {
    var unclicked = "unclicked";
    var clicked = "clicked";
    if (document.getElementById(id).classList.contains(unclicked)) {
        document.getElementById(id).classList.add(clicked);
        document.getElementById(id).classList.remove(unclicked);
    }
    else if (document.getElementById(id).classList.contains(clicked)) {
        document.getElementById(id).classList.add(unclicked);
        document.getElementById(id).classList.remove(clicked);
    }
}

/* CHANGE boolean value to show if button has been pressed */
function setBoolean(id) {
    switch (id) {
        case "energetic":
            if (!energetic) {
                energetic = true;
            }
            else if (energetic) {
                energetic = false;
            }
            break;
        case "excited":
            if (!excited) {
                excited = true;
            }
            else if (excited) {
                excited = false;
            }
            break;
        case "angry":
            if (!angry) {
                angry = true;
            }
            else if (angry) {
                angry = false;
            }
            break;
        case "joyful":
            if (!joyful) {
                joyful = true;
            }
            else if (joyful) {
                joyful = false;
            }
            break;
        case "surprised":
            if (!surprised) {
                surprised = true;
            }
            else if (surprised) {
                surprised = false;
            }
            break;
        case "calm":
            if (!calm) {
                calm = true;
            }
            else if (calm) {
                calm = false;
            }
            break;
    }
}

/* RETREIVE if button has been pressed */
function getBoolean(id) {
    switch (id) {
        case "energetic": {
            console.log(energetic);
            return energetic;
        }
        case "excited": {
            console.log(energetic);
            return excited;
        }
        case "angry": {
            console.log(energetic);
            return angry;
        }
        case "joyful": {
            console.log(energetic);
            return joyful;
        }
        case "surprised": {
            console.log(energetic);
            return surprised;
        }
        case "calm": {
            console.log(energetic);
            return calm;
        }
    }
}

function getAccessCode() {
  var fs = require('fs');
  var html = fs.readFileSync(__dirname + '/console_output.txt', 'utf8');
  console.log(html);
};
