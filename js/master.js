$("document").ready(function(){

  $(".closemenu").on("click", function (){
    $("#menudrop").removeClass("openmenu-action");
    $("html").removeClass("stopscroll");
  });
  $(".hamburger > span").on("click", function (){
    $("#menudrop").addClass("openmenu-action");
    $("html").addClass("stopscroll");
  });







// end of Document ready function.
});
