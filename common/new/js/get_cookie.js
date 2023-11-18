function obtenerCookie() {
    var name = "phone=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
// Function check cookie exist
function comprobarCookie(clave) {
    var clave = obtenerCookie("phone");
    if (clave!="") 
    {
        return cookieReady(clave);
    }
    else
    {
        console.log('No such cookie')
    }
}
// Function read cookie
var cookieReady = function(nombre) {
    var lista = document.cookie.split(";");
    for (i in lista) {
        var busca = lista[i].search(nombre);
        if (busca > -1) 
        {
            var micookie=lista[i];
            console.log(micookie);
            var igual = micookie.indexOf("=");
            var valueCook = micookie.substring(igual+1);
        }
    }
    if (valueCook)
    {
        var phoneInput = document.getElementById('phone');
        phoneInput.value = valueCook;
    }
    else
    {
        console.log('No yet cookie');
    }
    return valueCook;
}
// var getPhoneUser = function() {
//     var queryString = window.location.search;
//     var urlParams = new URLSearchParams(queryString);
//     var phoneUser = urlParams.get('phone');
//     return phoneUser;
// }
var getPhoneUser = function() {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i, phoneUser;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === "phone") {
            if(sParameterName[1] === undefined)
            {
                phoneUser = true;
            }
            else
            {
                phoneUser = decodeURIComponent(sParameterName[1]);
            }
            return  phoneUser;
        }
    }
};
