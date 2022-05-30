  $('.burger').click(function() {
        $('.burger').toggleClass('active');
        $('.menu').toggleClass('active'); 

        // скрол страницы пропадает
        $('body').toggleClass('lock');

 }); 
       

     // прокрутка к странице
    $("body").on('click', '[href*="#"]', function(e){
   var fixed_offset = 70;
   $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
   

         $('.menu').removeClass('active');
         $('body').removeClass('lock');
         $('.burger').removeClass('active');

         var $this = $(this);

        $("#menu a").removeClass("active");
        $this.addClass("active");



    });


  // убирает классы чтобы был скролл 



$(function() {

   var header = $("#header"),
        introH = $("#home").innerHeight() - 72,
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    });






