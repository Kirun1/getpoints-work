// displaying the first popup
var modal = document.getElementById('join');

//modal display testing
var btn = document.getElementById("btRewards");
btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// displaying the second popup
var modal = document.getElementById('join');

//modal display testing
var btn = document.getElementById("btJoin");
btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}