var apiurl='https://getpoints.com/apim_new.php';
//var apiurl='http://localhost/gpdev/gpdev/apim_new.php';
//var apiurl='http://sportsocial.webfactional.com/apim_new.php';
//var apiurl='http://sportsocial.webfactional.com/apim_new.php';
var deviceid=2 // for ios
//var deviceid=2 // for andorid

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}



function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
      
    $(function(){
        $("#loadsidehtml").load("side.html");
    });
      


