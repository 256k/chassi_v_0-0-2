$("document").ready(function(){

  $(".closemenu").on("click", function (){
    $("#menudrop").removeClass("openmenu-action");
  });
  $(".hamburger > span").on("click", function (){
    $("#menudrop").addClass("openmenu-action");
  });

});
