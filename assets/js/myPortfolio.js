var one = "#3D5B99",
    two = "#FFE386",
    three = "#000",
    four = "#AB7A64";

$(window).on("scroll", function(){
  if ($(document).scrollTop() >= $("#one").position().top){
      $('body').css("background", one);
      $("body").css("color", "#000");
  };
    if ($(document).scrollTop() > $("#two").position().top){
      $('body').css("background", two);
      $("body").css("color", "#000");
  };
    if ($(document).scrollTop() > $("#three").position().top){
      $('body').css("background", three);
      $("body").css("color", "#FFF");
  };
    if ($(document).scrollTop() > $("#four").position().top){
      $('body').css("background", four);
      $("body").css("color", "#FFF");
  };
})