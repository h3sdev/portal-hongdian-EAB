<<<<<<< HEAD
//function checkUserStatus Added by diego herrera 2023-04-20
const $checkAccess = '../../common/api/check_user_internet_status.php';

function checkUserStatus(path) {
  // Mostrar el loader
  $('#loader').show();

  // Hacer la solicitud AJAX utilizando jQuery
  $.ajax({
    url: path,
    dataType: "json",
    success: function(response) {
    
      if (response.code === 1) {
        console.log("user was logged");
        window.location.href = "../../homePage/web/homePage.html";
      } else {
        $('#loader').hide();
        $('#content').show();
        console.log("user not previously logged");
      }
    },
    error: function(xhr, status, error) {
      console.log("Error on request. Status: " + xhr.status);
      setTimeout(() => {
        toast.classList.remove("active");
        window.location.href = "index.html"
      }, 10000);
    },
    complete: function() {
      // Ocultar el loader y mostrar el contenido del body
      
    }
  });
}

// Llamar a la función después de que se haya cargado jQuery
$(document).ready(function() {
  checkUserStatus($checkAccess);
});
=======
//function checkUserStatus Added by diego herrera 2023-04-20
const $checkAccess = '../../common/api/check_user_internet_status.php';

function checkUserStatus(path) {
  // Mostrar el loader
  $('#loader').show();

  // Hacer la solicitud AJAX utilizando jQuery
  $.ajax({
    url: path,
    dataType: "json",
    success: function(response) {
    
      if (response.code === 1) {
        console.log("user was logged");
        window.location.href = "../../homePage/web/homePage.html";
      } else {
        $('#loader').hide();
        $('#content').show();
        console.log("user not previously logged");
      }
    },
    error: function(xhr, status, error) {
      console.log("Error on request. Status: " + xhr.status);
      setTimeout(() => {
        toast.classList.remove("active");
        window.location.href = "index.html"
      }, 10000);
    },
    complete: function() {
      // Ocultar el loader y mostrar el contenido del body
      
    }
  });
}

// Llamar a la función después de que se haya cargado jQuery
$(document).ready(function() {
  checkUserStatus($checkAccess);
});
>>>>>>> 0660cd49a11a625adad0ea3be44cd1ccb88b9cec
