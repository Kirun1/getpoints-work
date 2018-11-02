var modal = document.getElementById('sign-out');

//modal display testing
var btn = document.getElementById("signout");
btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
