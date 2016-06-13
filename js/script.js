
function addZero(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


var makeTime=function(){

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m=addZero(m);
    s=addZero(s);

    document.querySelector("p").innerHTML =
    h + ":" + m + ":" + s;

    document.querySelector("#timeBar").style.width=s + "%"


    var sHexa=(Math.floor(s/59*255)).toString(16);
    var mHexa=(Math.floor(m/59*255)).toString(16);
    var hHexa=(Math.floor(h/23*255)).toString(16);



    var color=sHexa+sHexa+sHexa
    console.log(color)
    var containerNode=document.querySelector(".container")
    containerNode.style["background-image"] = "radial-gradient(circle, " + "#" + color +", white)"

    var hexaNode=document.querySelector("#hexa").innerHTML= sHexa + ":" + mHexa + ":" + hHexa;

}
setInterval(makeTime, 1000)