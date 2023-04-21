$(document).ready(function(){
    //alert("Bienvenido");
})

$(function(){
    $("p").css({"background-color" : "blue", "color" : "white"});
    $(".second").css({"background-color" : "red"});
    $("#cuarto").css({"background-color" : "green"})
})

$("#botonMostrar").click(function(){
    $("#primero").show();
})

$("#botonOcultar").click(function(){
    $("#primero").hide();
})

$("#segundo").mouseenter(function(){
    //$("#quinto").hide();
    //$("#quinto").fadeIn();
    $("#quinto").slideUp();
})

$("#primero").mouseenter(function(){
    //$("#quinto").show();
    //$("#quinto").fadeOut();
    $("#quinto").slideDown();
})

//"$("#cuarto").animate({width: "300px"});
//$("#cuarto").animate({fontSize: "30px"});
//$("#cuarto").animate({marginLeft: "500px"});
//$("#cuarto").animate({marginTop: "500px"});
//$("#cuarto").animate({marginLeft: "0px"});
//$("#cuarto").animate({marginTop: "0px"});

setInterval(function(){
    $("#cuarto").animate({width: "300px"});
    $("#cuarto").animate({fontSize: "30px"});
    $("#cuarto").animate({marginLeft: "500px"});
    $("#cuarto").animate({marginTop: "500px"});
    $("#cuarto").animate({marginLeft: "0px"});
    $("#cuarto").animate({marginTop: "0px"});  
    console.log("intervalo");
}, 100)
