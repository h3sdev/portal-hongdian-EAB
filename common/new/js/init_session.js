var init_session = function() {
        var nombre;
        var lista = document.cookie.split(";");
        for (i in lista) {
            var busca = lista[i].search(nombre);
            if (busca > -1) 
            {
                micookie=lista[i];
            }
            var igual = micookie.indexOf("=");
            var valor = micookie.substring(igual+1);
        }
        if (valor === "true")
        {
            location.href = "homePage/web/homePage.html";
        }
        else
        {
            console.log('Todavia no hay cookie para redireccionar');
        }
        return valor;
    // var user_session_stat = getCookie("sessionStat");
    // var x = document.cookie;
};

$(document).ready(init_session, false);