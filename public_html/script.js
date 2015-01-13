$("document").ready(function(){
    
    $("#bio").css("color", "black");
    
    $("div").css("border", "3px solid blue");
    
    $("div").css("background-color", "clear");
    
    $(".uppercase").css("text-transform", "uppercase");
    
    $(".uppercase").css("text-size", "38px");
    
    $(".uppercase").css("border", "3px solid black");
    
    $(".uppercase").css("color", "black");
    
    $(".bleh").css("color", "grey");
    
    $("#jq").css("color", "black");
    
    $("body").css("text-align", "center");
    
    $('p:first').css("color", "grey");

    $("div :nth-child(3)").css("color", "clear");
    
    $("body").css("background-image", "url(http://th05.deviantart.net/fs70/PRE/f/2011/114/c/2/portal___personality_cores_by_kirbychu-d3es43q.png)");
    
    $("body").css("background-size", "cover");
    
    $("#jq").bind('click', alertButtonClick);
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
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
    $("p").html("");
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