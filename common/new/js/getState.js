function getState(id){
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
        var optn = document.createElement("option");
        optn.defaultSelected = true;
        optn.hidden = true;
        optn.innerHTML = "Departamento";
        controlSelect.appendChild(optn);
        $.each(data, function(index,values){
            if (values.departamento)
            {
                var optn = document.createElement("option");
                optn.value = values.departamento_id;
                optn.innerHTML = values.departamento;
                controlSelect.appendChild(optn);
            }
            
        });
        $("#" + id).append(controlSelect);
    });

    request.error(function(){
        console.dir("Unable to obtain resources");
    });
};

