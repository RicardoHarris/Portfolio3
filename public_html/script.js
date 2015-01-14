$("document").ready(function(){
    
    $("#bio").css("color", "white");
    
    $("div").css("border", "3px solid blue");
    
    $("div").css("background-color", "clear");
    
    $(".uppercase").css("text-transform", "uppercase");
    
    $(".uppercase").css("text-size", "38px");
    
    $(".uppercase").css("border", "3px solid black");
    
    $(".uppercase").css("color", "whitesmoke");
    
    $(".bleh").css("color", "grey");
    
    $("#jq").css("color", "white");
    
    $("body").css("text-align", "center");
    
    $('p:first').css("color", "grey");

    $("div :nth-child(3)").css("color", "clear");
    
    $("body").css("background-image", "url(http://i0.kym-cdn.com/photos/images/original/000/120/151/space_core_wallpaper_2_by_deathonabun-d3eta23.jpg)");
    
    $("body").css("background-size", "cover");
    
    $("#jq").bind('click', alertButtonClick);
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $("h3").css("color", "white");
    
    $("h6").css("color", "white");
    
    $("#replaceWHtml").css("color", "white");
    $("#replaceWText").css("color", "white");
    $("#addAPara").css("color", "white");
    $("#removeAPara").css("color", "white");
    
    $("#replaceWHtml").bind('click', replaceWHtml);
    $("#replaceWText").bind('click', replaceWText);
    $("#addAPara").bind('click', addAPara);
    $("#removeAPara").bind('click', removeAPara);
    
    $('#fadeLogo').bind('click', fadeTheImage);
    $('#fullOpacity').bind('click', fullOpacityImage);

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
}

function replaceWHtml(){
    $('#h3Tag').html('<h6>Now I am an h6</h6>');
}

function replaceWText(){
    $('#h3Tag').text('Now I am just text');
}

function addAPara(){
    $('#randPara').append('<p>Another Paragraph</p>');
}

function removeAPara(){
    $('#randPara p:last').remove('<h6>Now I am an h6</h6>');
}

function fadeTheImage(){
    $('#logo').fadeOut(2500);
}

function fullOpacityImage(){
    $('#logo').fadeTo(2500, 1);
}