$("document").ready(function(){
    
    $("#bio").css("color", "white");
    
    $("div").css("border", "3px solid blue");
    
    $("div").css("background-color", "clear");
    
    $(".uppercase").css("text-transform", "uppercase");
    
    $(".uppercase").css("text-size", "38px");
    
    $(".uppercase").css("color", "whitesmoke");
    
    $("#jq").css("color", "whitesmoke");
    
    $("body").css("text-align", "center");
    
    $("body").css("background-color", "white");
    
    $('p:first').css("color", "grey");

    $("div :nth-child(3)").css("color", "clear");
    
    $("body").css("background-image", "url(http://loopable.files.wordpress.com/2007/09/bitdance.gif)");
    
    $("body").css("background-size", "contain");
    
    $(".uppercase").bind('click', alertButtonClick);
    
    $("#jq").bind('blur', onBlurEvent)
                  .bind('focus', onFocusEvent)
                  .bind('onmousedown', onMDownEvent)
                  .bind('onmouseup', onMUpEvent)
                  .bind('change', onChangeEvent);
          
    $(window).resize(resizedWindow);
    
});

function alertButtonClick() {
    alert("There was a button clicked!");
}

function onBlurEvent(){
    $("#second").html("You left the box!");
}

function onFocusEvent(){
    $("#second").html("You entered the box!");
}

function onMDownEvent(){
    $("#second").html("You left the textbox!");
}

function onMUpEvent(){
    $("#second").html("You entered the textbox!");
}

function onChangeEvent(){
    $("#second").html("You changed the box!");
}

function onBlurEvent(){
    $("#second").html("You left the box");
}

function resizedWindow(){
    $("#second").html("Window was resized W: " + $(window).width() + " H: " +
    $(window).height());
    
}
