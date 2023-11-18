<<<<<<< HEAD
// Funcion para descargar el xml de noticias
download();
    function download()
    {
        let down = {
            'down': "Descarga exitosa"
        };
        $.ajax({
            type:'POST',
            url: 'news.php',
            data: down,
            success:function(resp)
            {
                    $("#resps").html(resp);
            }
        });
    return false;
=======
// Funcion para descargar el xml de noticias
download();
    function download()
    {
        let down = {
            'down': "Descarga exitosa"
        };
        $.ajax({
            type:'POST',
            url: 'news.php',
            data: down,
            success:function(resp)
            {
                    $("#resps").html(resp);
            }
        });
    return false;
>>>>>>> 0660cd49a11a625adad0ea3be44cd1ccb88b9cec
    }