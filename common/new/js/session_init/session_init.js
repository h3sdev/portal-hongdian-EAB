var send_btn = document.getElementById('LoginBtn')
var send_form = document.getElementById('send_form')
var warning = document.getElementById('warning')
dni = document.getElementById('dni')
var path = 'common/api/login.php'
var Redirect = function() {
    location.href = "homePage/web/after_auth2.html"
}
var Signup = function(){location.href = "signup.html"}

var SendLogin = function(){
    event.preventDefault();
    if (dni.value == "")
    {
        warning.innerHTML = "Se requiere número de documento!"
        dni.style.border = '2px solid red'
        stmt_send = false;
    }
    else
    {
        warning.innerHTML = ""
        dni.style.border = '2px solid green'
        stmt_send = true;
        var data = {
            'dni': dni.value.toLowerCase()
        }
    }
    if (stmt_send === true)
    {
        $.ajax({
            type: "post",
            url: path,
            data: data,
            success: function(data){
                console.log(dni.value)
                console.log(data);
                if (data === 'true')
                {
                    warning.innerHTML = "Bienvenido de nuevo :)"
                    warning.style.color = 'green'
            
                setTimeout(Redirect,1000);
                }
                else
                {
                    warning.innerHTML = "Por favor regístrate!"
                    warning.style.color = 'red'
                    document.cookie = "dni=" + dni.value;
                    setTimeout(Signup,1000)
                }
            },
            error: function(){
                alert("Error");
            }
        });
    }
}
send_form.addEventListener("submit", SendLogin , false)
send_btn.addEventListener("click", SendLogin, false)
