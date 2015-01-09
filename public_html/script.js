$("document").ready(function(){
    
    $("#bio").css("color", "white");
    
    $("div").css("border", "3px solid blue");
    
    $("div").css("background-color", "clear");
    
    $(".uppercase").css("text-transform", "uppercase");
    
    $(".uppercase").css("text-size", "38px");
    
    $(".uppercase").css("color", "whitesmoke");
    
    $(".bleh").css("color", "grey");
    
    $("#jq").css("color", "whitesmoke");
    
    $("body").css("text-align", "center");
    
    $('p:first').css("color", "grey");

    $("div :nth-child(3)").css("color", "clear");
    
    $("body").css("background-image", "url(http://loopable.files.wordpress.com/2007/09/bitdance.gif)");
    
    $("body").css("background-size", "contain");
    
    $("#jq").bind('click', alertButtonClick);
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

});

function alertButtonClick() {
    $("#jq").html("You Clicked This");
}

function mouseOverMe(){
    $("h1").html("MouseOn");
    $("p").html("Secret Tunnel");
}

function mouseOutMe(){
    $("h1").html("JQuery Ex Page");
    $("p").html("");
}
