var bodyck = document.getElementById('show_content_menu');
function redirect(e){
    if (e.srcElement)
    {
        tag = e.srcElement.id;
        pageName = e.srcElement.alt;
    }    
    else if (e.target)
    {
        tag = e.target.id;
        pageName = e.target.alt;
    }
    pageNameFinal = pageName;
    idLink = tag.substr(-20, 4);

    window.location.href = namePage + "View.html?res_id=" + idLink + "&name_page=" + pageNameFinal;
}
bodyck.addEventListener('click', redirect, false);