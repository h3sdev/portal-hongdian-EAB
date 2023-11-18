$(function(){
    var path = '../../common/new/php/maps.php';
    var data = true;
    $.ajax({
        type: "POST",
        url: path,
        data: data,
        success: function(data){
            var json = JSON.stringify(eval("(" + data + ")"))
            var obj = JSON.parse(json)
            console.log(obj)
            if (obj.status === 1)
            {
                var map = new ol.Map({
                    layers: [new ol.layer.Tile({source: new ol.source.OSM()})],
                    target: 'map',
                    view: new ol.View({
                    projection: 'EPSG:4326',
                    center: [-obj.longitude, obj.latitude],
                    zoom: 18})});
            }
            else
            {
                var map = document.getElementById('map')
                map.innerHTML = "Señal GPS no disponible"
            }
            console.log(obj.latitude, obj.longitude)
        },
        error: function(){
            alert("Error");
        }
    });
});