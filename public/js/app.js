// Tạo điều hướng cố định: test
// $(document).ready(function(){
//     $(".services-section").click(function(){
//         $(this).css("background-color","#000");
//     });
// });



// Scrolling to target elements
$(document).ready(function() {

	/* Adding Sticky Navigation */
	$(".js--about-section").waypoint(function(direction) {
		if(direction=="down") {
			$("nav").addClass('sticky-nav');
		}
		else {
			$("nav").removeClass('sticky-nav');
		}
	}); 

	/* Scrolling to contact section */
	$(".js--scroll-to-contact").click(function() {
		$('html, body').animate({scrollTop:$('.js--contact').offset().top},1000);
	})

	/* Di chuyển điều hướng */
	$('a[href*="#"]')
  // Xóa các liên kết không thực sự liên kết đến bất kỳ thứ gì
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // Liên kết trang
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Tìm cái mục mà mình muốn lấy đến
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // kiểm tra mục đó có tồn tại hay là ko
      if (target.length) {
        // Điều kiện thực hiện khi có mục đó và đúng
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Gọi lại cái anim
          // thay đổi cái đối tượng 
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { //kiềm tra xem có lấy dc k
            return false;
          } else {
            $target.attr('tabindex','-1'); // thêm tabindex vào các mục
            $target.focus(); // đặt lại focus.
          };
        });
      }
    }
  });

  /* Animation on Scroll */
  $(".js--about-section").waypoint(function(direction) {
		$(".js--about-box").addClass('animate__animated animate__fadeIn');
	}, {
		offset:'50%'
	}); 

   $(".js--services-section").waypoint(function(direction) {
		$(".js--service-box").addClass('animate__animated animate__zoomIn');
	}, {
		offset:'50%'
	}); 

   $(".js--packages-section").waypoint(function(direction) {
		$(".js--enterprise").addClass('animate__animated animate__pulse');
	}); 
});