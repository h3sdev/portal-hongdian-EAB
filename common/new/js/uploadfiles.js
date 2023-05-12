
var parametros = $(this).serialize();
    $(function() { // Ojo! uso jQuery, recuerda añadirla al html
        cron(); // Lanzo cron la primera vez
        function cron() {
          $.ajax({
              type: "POST",
              url: "../../common/api/subir.php",
              data: parametros,
              success: function(text) {
                  if (text == "Todo On") {
                      console.log('ready');
                  }
              }, timeout: 3000,
            error: function () {
                console.log("Paso 1");
            }
          }).done(function(msg) {
                console.log(msg);
            });
        }
    });
