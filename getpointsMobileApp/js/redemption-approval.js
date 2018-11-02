// displaying the first popup
var modal = document.getElementById('redeem-reward-modal');

//modal display testing
var btn = document.getElementById("rwdunlck_btn");
btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// displaying the second popup
var modal4 = document.getElementById('redeem-reward-modal4');

//modal display testing
var btn4 = document.getElementById("join");
btn4.onclick = function() {
	modal.style.display = "none";
    modal4.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}

// displaying the third popup
var modal2 = document.getElementById('redeem-reward-modal2');

//modal display testing
var btn2 = document.getElementById("done2");
btn2.onclick = function() {
	modal4.style.display = "none";
    modal2.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// displaying the fourth popup
var modal3 = document.getElementById('redeem-reward-modal3');

//modal display testing
var btn3 = document.getElementById("approve");
btn3.onclick = function() {
	modal2.style.display = "none";
    modal3.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}
