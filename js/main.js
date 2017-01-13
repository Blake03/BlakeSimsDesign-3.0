//nav-menu-toggle
$(".navbar__toggle, .navbar__item").click(function(){
  $(".navbar__menu").slideToggle();
});

$(".navbar__logo").click(function(){
  $(".navbar__menu").slideUp();
});

//navbar-fade-in
$(window).on('scroll', function() {
  if ($(window).scrollTop() >= 480) {
      $('.navbar-wrapper').fadeIn('1000');
   } else {
      $('.navbar-wrapper').fadeOut('1000');
  }
});
      
//smooth-scroll-effect   
$("a").on("click", function(b) {
    if ("" !== this.hash) {
        b.preventDefault();
        var a = this.hash;
        $("html, body").animate({
            scrollTop: $(a).offset().top
        }, 800, function() {
            window.location.hash = a
        })
    }
});