$(document).ready(function(){
    // alert('dfas')

    // 슬라이드 아래 포스터
    document.getElementById('div1').style.display = 'block';

    var Motion = document.getElementById('Motion');
    var Design = document.getElementById('Design');
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
  
    Motion.addEventListener('click', function(event) {
        event.preventDefault();
        div1.style.display = 'block';
        div2.style.display = 'none';
       
  
    });
  
    Design.addEventListener('click', function(event) {
        event.preventDefault(); 
        div1.style.display = 'none';
        div2.style.display = 'block';
       
    });
    // 슬라이드  
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        keyboard : true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        slidesPerView :4,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    //   탑버튼 

    window.addEventListener('scroll', function() {
        var scrollToTopButton = document.getElementById('scrollToTop');
        if (window.pageYOffset > 100) { 
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    document.getElementById('scrollToTop').addEventListener('click', scrollToTop);

// 메뉴바 스크롤 태그//

document.querySelectorAll('header button').forEach(item => {
    item.addEventListener('click', scrollToSection);
  });
  
  function scrollToSection(event) {
    event.preventDefault(); 
  
    const targetId = this.getAttribute('data-target');
  
    const targetSection = document.querySelector(targetId);
    const targetOffsetTop = targetSection.offsetTop;
  
    window.scrollTo({
      top: targetOffsetTop,
      behavior: 'smooth' 
    });
  }
//   지호 로고 호버 반응//
    $('.building-bt button').hover(function() {
      $('.building-bt .jh').addClass('ho');
    }, function() {
      $('.building-bt .jh').removeClass('ho');
    });

// 석세스

})