var one = "#614EFF",
    two = "#FFE386",
    three = "#000";

$(window).on("scroll", function(){
  if ($(document).scrollTop() >= $("#one").position().top){
    $('body').css("background", one);
    $("body").css("color", "#FFF");
  };
    if ($(document).scrollTop() > $("#two").position().top){
    $('body').css("background", two);
    $("body").css("color", "#000");
  };
    if ($(document).scrollTop() > $("#three").position().top){
    $('body').css("background", three);
    $("body").css("color", "#FFF");
  };
})