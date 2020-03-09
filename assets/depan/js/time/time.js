function showLocale(objD)  
{  
    var str,colorhead,colorfoot;  
    var hh = objD.getHours();  
    if(hh<10) hh = '0' + hh;  
    var mm = objD.getMinutes();  
    if(mm<10) mm = '0' + mm;  
    var ss = objD.getSeconds();  
    if(ss<10) ss = '0' + ss;  
    var ww = objD.getDay();  
    if  ( ww==0 )  colorhead="<font color=\"white\">";  
    if  ( ww > 0 && ww < 7 )  colorhead="<font color=\"white\">";  
    if  (ww==0)  ww="Minggu";  
    if  (ww==1)  ww="Senin";  
    if  (ww==2)  ww="Selasa";  
    if  (ww==3)  ww="Rabu";  
    if  (ww==4)  ww="Kamis";  
    if  (ww==5)  ww="Jumat";  
    if  (ww==6)  ww="Sabtu";  
    colorfoot="</font>"  
    str = colorhead + "<span class=\"thin\">" + hh + ":"  + mm + ":" + ss + "</span>" + "  " + colorfoot;  
    return(str);  
};  
function tick()  
{  
    var today;  
    today = new Date();  
    document.getElementById("localtime").innerHTML = showLocale(today);  
    window.setTimeout("tick()", 1000);  
};  
tick();  