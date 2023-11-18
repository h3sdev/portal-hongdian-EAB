/** Get inputs By name */
var form1Inputs = document.getElementsByClassName("form-input");
var checkBox = document.getElementById("checkbox_input");
/**Show alert if success send data or not */
var warning = document.getElementById('warning');
/**Form and btn_send form id's */
var send_form = document.getElementById('signup_form')
var btn_send = document.getElementById('signup_submit')
/*Path for file upload data on server*/

var count = 0;
/** Function get data signup */
var SendSignUp = function(event){
    event.preventDefault();
    var forInputs = {};
    var formValues = {};
    for(var i=0; i<form1Inputs.length; i++)
    {
        //Validate data
        if (form1Inputs[i].value == "")
        {
            warning.innerHTML = "Por favor completa todos los campos";
            form1Inputs[i].style.border = '2px solid red';
            stmt_send = false;
        }
        else
        {
            form1Inputs[i].style.border = '2px solid green';
            stmt_send = true;
        }
        formValues[form1Inputs[i].id]=form1Inputs[i].value;
        forInputs[form1Inputs[i].id]=form1Inputs[i];
    }
    if (checkBox.checked)
    {
        stmt_send = true
    }
    else
    {
        stmt_send = false
        warning.innerHTML = "Por favor acepta los terminos y condiciones";
    }
    /** Keep color red for warning */
    if (stmt_send === false)
    {
        warning.style.color = 'red';
    }
    /** SendInfo */
    if (stmt_send === true)
    {
        var path = "../../common/api/process.php";
        $.ajax({
            type: "POST",
            url: path,
            data: formValues,
            success: function(){
                console.log(formValues);
                warning.innerHTML = "Registro exitoso!";
                warning.style.color = 'green';
                location.href ="after_auth.html";
            },
            error: function(){
                alert("Error");
            }
        });
    }
}

send_form.addEventListener("submit", SendSignUp, false)
$(document).ready(comprobarCookie, false);