var send_btn = document.getElementById('LoginBtn')
var send_form = document.getElementById('send_form')
var warning = document.getElementById('warning')
var phone = document.getElementById('phone')
var path = '../../common/api/login.php'


// Llamar a la función después de que se haya cargado jQuery
$(document).ready(function () {
    checkUserStatus();
});

var Redirect = function() {
    location.href = "after_auth.html"
}
var Signup = function()
{
    location.href = "signup.html"
}

var SendLogin = function(event){
    event.preventDefault()
    
    if (phone.value == "")
    {
        warning.innerHTML = "Se requiere número de documento!"
        phone.style.border = '2px solid red'
        stmt_send = false;
    }
    else
    {
        warning.innerHTML = ""
        phone.style.border = '2px solid green'
        stmt_send = true;
        var data = {
            'phone': phone.value.toLowerCase()
        }
    }
    if (stmt_send === true)
    {
        $.ajax({
            type: "post",
            url: path,
            data: data,
            success: function(data){
                console.log(data);
                var findStatus = data.substring(0, 4);
                if (findStatus == 'true')
                {
                    warning.innerHTML = "Bienvenido de nuevo :)"
                    warning.style.color = 'green'
                    document.cookie = "phone=" + phone.value;
                    setTimeout(Redirect,2000);
                }
                else
                {
                    warning.innerHTML = "Por favor regístrate!"
                    warning.style.color = 'red'
                    document.cookie = "phone=" + phone.value;
                    setTimeout(Signup,2000);
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