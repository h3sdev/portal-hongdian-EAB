var selectState = document.getElementById("controlSelect");

function getCity(departamento_id){
    var adPath = "../../common/new/js/frame/colombia_dane.min.json";
    var request = $.ajax({
        url: adPath ,
        type: "GET",
        dataType: 'json', //类型
        beforeSend: function(xhr){
            xhr.overrideMimeType("text/json; charset=x-user-defined");
        }
    });
    request.success(function(data) {
        var citiesSelect = document.getElementById("city");
        var optn = "";
        for (i = citiesSelect.length - 1; i >= 0; i--) {
            citiesSelect.remove(i);
        }
        $.each(data, function(index,values){
                if (values.departamento_id == departamento_id)
                {
                    $.each(values.citycode, function(cityIndex,cityValues){
                        optn = document.createElement("option");
                        optn.value = cityValues.id;
                        optn.innerHTML = cityValues.city;
                        citiesSelect.appendChild(optn);
                    });
                }            
        });
        citiesSelect.appendChild(optn);
        
        $("#city").append(citiesSelect);
    });

    request.error(function(){
        console.dir("Unable to obtain resources");
    });
};
var eventCities = function () {
    var valueOption = selectState.value;
    console.log(valueOption)
    getCity(valueOption);
}
selectState.addEventListener('change', eventCities, false);

