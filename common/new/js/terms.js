$('#redirect_btn').click(function(){
    var warning = $('#warning');
    var terms = $('#conditions');

    if (terms.prop('checked') == true)
    {
        location.href = "signup.html";
    }
    else
    {
        warning.html("Porfavor acepte los terminos y condiciones!");
        warning.css('color', 'red');
    }
    
});
$('#conditions').click(function(){
    var warning = $('#warning');
    var terms = $('#conditions');
    warning.html(":)");
    warning.css('color', 'green');
    if (terms.prop('checked') == false)
    {
        warning.html(":(");
        warning.css('color', 'red');
       
    }
});