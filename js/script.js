
$( document ).ready(function() {
    //var div = $(".overlap");
    if (window.matchMedia('(max-width: 650px)').matches) {
        $(".overlap").css("margin", "auto");    
    }
    else if (window.matchMedia('(min-width: 650px)').matches) {
      $(".overlap").animate({marginLeft:'10%'}, 1200);   
    }
  });

  $( window ).on("resize", function() {
    if (window.matchMedia('(max-width: 650px)').matches) {
      $(".overlap").css("margin", "auto");    
    }
    else if (window.matchMedia('(min-width: 650px)').matches) {
      $(".overlap").css("margin-left","10%");   
    } 
  });

$(".toggle").on("click", function(){
    $(".dropDown").slideToggle();
  });

  $( window ).on("resize", function(){
    $(".dropDown").css("display", "none");
  });

  // Menu toggle animation
  
  const menuBtn = document.querySelector('.toggle');
  let menuOpen = false;
  menuBtn.addEventListener('click',() => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    }
    else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });