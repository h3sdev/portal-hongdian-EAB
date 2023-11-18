function pageViewHomeUploadData(resIdParam, resNameParam, phoneUserParam){
    var resId = resIdParam;
    var resName = resNameParam;
    var resType = resId;
    var phoneUser = phoneUserParam;
    $.hongdian.uploadData({
        resId:resId,
        resName:resName,
        resType:resType,
        view:1,
        click:0,
        phoneUser:phoneUser
    }, function() {
    });
}
