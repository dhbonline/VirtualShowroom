$.getJSON("http://www.indratraders.lk/app/vehicle.php", function (vehicle) {
    $('#vehiclelist').empty();

    $.each(vehicle, function(i,vehicle){
        $('#vehiclelist').append(generateVehicleLink(vehicle));
    });

    $('#vehiclelist').listview('refresh');

});

function generateVehicleLink(vehicle){

    var str = vehicle.vImages;

    var res = str.split(",");
        
    var image1_url = "http://www.indratraders.lk/uplode-vehicle-images/" + res[0];
    
    return '<li><a href="javascript:void(0)" data-transition="fade" onclick="gotovehicledetailpage(\''
        + vehicle.vCode + '\',\'' + vehicle.vStatus + '\',\'' + vehicle.vType + '\',\''
        + vehicle.vBrand + '\',\'' + vehicle.vModel + '\',\'' + vehicle.vYear + '\',\''
        + vehicle.vColor + '\',\'' + vehicle.vCapacity + '\',\'' + vehicle.vOptions + '\',\'' + vehicle.vImages + '\')">'
        + '<img src="' + image1_url + '" height=80 /><h3>' + vehicle.vBrand + ' ' + vehicle.vModel + ' (' + vehicle.vYear + ')</h3>'
        + '<p>' + vehicle.vOptions.substring(0, 30) + '...<br><small>STATUS: ' + vehicle.vStatus + '</small></p><p class="ui-li-aside">Ref#: ' + vehicle.vCode + '</p></a></li>';

}


function gotovehicledetailpage(mCode,mStatus,mType,mBrand,mModel,mYear,mColor,mCapacity,mOptions,mImages){
    var istr = mImages;

    var ires = istr.split(",");
        
    var iimage1_url = "http://www.indratraders.lk/uplode-vehicle-images/" + ires[0];
    var iimage2_url = "http://www.indratraders.lk/uplode-vehicle-images/" + ires[1];
    var iimage3_url = "http://www.indratraders.lk/uplode-vehicle-images/" + ires[2];
    var iimage4_url = "http://www.indratraders.lk/uplode-vehicle-images/" + ires[3];
    var d = new Date();
    var detailpage = $("<div data-role='page' data-url=dummyURL><div data-role='header'><h1>"
                       + mBrand + " " + mModel + "</h1></div><div data-role='content' data-theme=b>"
                       + "<img src='" + iimage1_url + "' width=100% >"
                       + "<img src='" + iimage2_url + "' width=100% >"
                       + "<img src='" + iimage3_url + "' width=100% >"
                       + "<img src='" + iimage4_url + "' width=100% >"
                       + "<table style='width:100%;'><caption><h2>VEHICLE DETAILS</h2></caption>"
                       + "<tr><td width=30%>" + "Ref. #</td><td>" + mCode + "</td></tr>"
                       + "<tr><td>" + "Status</td><td>" + mStatus + "</td></tr>"
                       + "<tr><td>" + "Type</td><td>" + mType + "</td></tr>"
                       + "<tr><td>" + "Brand</td><td>" + mBrand + "</td></tr>"
                       + "<tr><td>" + "Model</td><td>" + mModel + "</td></tr>"
                       + "<tr><td>" + "Year</td><td>" + mYear + "</td></tr>"
                       + "<tr><td>" + "Colour</td><td>" + mColor + "</td></tr>"
                       + "<tr><td>" + "Capacity</td><td>" + mCapacity + "</td></tr>"
                       + "<tr><td valign='top'>" + "Options</td><td>" + mOptions + "</td></tr></table>"
                       + "<a href='#' class='ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini' data-rel='back'>Share</a>" + "<a href='#' class='ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini' data-rel='back'>Back</a>"  + "</div>"
                       + "<div data-role='footer'><p align='middle'>"
                       + "<font size='1'>" + d.getFullYear() + " &copy; Indra Traders(Pvt) Limited.<br>All rights reserved.</small></font></div></div>");
    
    
    detailpage.appendTo($.mobile.pageContainer);

    $.mobile.changePage(detailpage);

}
