$( document ).ready(function() {
    var div = $(".overlap");
    div.animate({marginLeft:'10%'}, 1200 , 'easeOut');
});
$(".toggle").on("click", function(){
    $(".dropDown").slideToggle();

  });

  $( window ).on("resize", function(){
    $(".dropDown").css("display", "none");
  });