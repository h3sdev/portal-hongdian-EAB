function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
function printSpanTitle(paramUrlTitle) {
    const divPrint = document.getElementById("header_title_span");

    divPrint.innerHTML = '<span class="header-title">'+ paramUrlTitle +'</span>';
}