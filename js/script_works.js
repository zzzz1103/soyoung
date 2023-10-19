//01. a태그 튕기는 현상 제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


//02. menuOpen
$(function(){
    $('.menuOpen .btn').on('click', function(){
        $('.menuOpen').toggleClass('on')
    });
});


// visual motion
$(function() {
    $('.animate').scrolla({
        mobile: true, //모바일버전시 활성화
        once: false //스크롤시 딱 한번만 하고싶을땐 true
    });    
})

// content y축 고정 스트롤 
$(function(){
    gsap.registerPlugin(ScrollTrigger);
    
})

// ncs swiper
$(function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2, //보여지는 갯수
        spaceBetween: 20, //각각 간격
        centeredSlides: true, //센터모드
        loop: true, //루프
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            970: {
              slidesPerView: 3,  //브라우저가 1024보다 클 때
              spaceBetween: 50,
            },
          },
    });
});


// content y축 고정 스트롤 
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width : 1250px)' :function(){

            // gsap.utils.toArray('.content').forEach((section, i)=>{
            //     ScrollTrigger.create({
            //         trigger: section,
            //         start: 'top top',
            //         pin: true,
            //         pinSpacing: false,
            //         // markers: true
            //     })
            // })
            // ScrollTrigger.create({
            //    snap:1/(section.length - 1) //  javascript에서 /는 나누기 기호
            // })

        }//1050px 해상도 End
    })//responsive End

        // coding header 색
        gsap.timeline({
            scrollTrigger:{
                trigger: '.coding .inner',
                start: '0%',
                end: '0%',
                scrub: 0.2,
                // markers:true
            }
        })
        .to('header', {'color':'#fff', 'ease': 'none', 'duration':'0.1'}, 0)
        .to('header span', {'backgroundColor':'#fff', 'ease': 'none', 'duration':'0.1'}, 0)
    
        // footer 배경 바꾸기
        gsap.timeline({
            scrollTrigger:{
                trigger: '.coding',
                start: '92% 0%',
                end: '98%',
                scrub: 1,
                // markers:true
            }
        })
        .to('header', {'color':'#000', 'ease': 'none', 'duration':'0.1'}, 0)
        .to('header span', {'backgroundColor':'#000', 'ease': 'none', 'duration':'0.1'}, 0)
        .to('body', {'backgroundColor':'#e55139', 'color':'#000', 'ease': 'none', 'duration':'2.5'}, 2)
        .to('footer', {'color':'#000', 'ease': 'none', 'duration':'2.5'}, 2)
        .to('footer .textAni', {'color':'#fff', 'ease': 'none', 'duration':'2.5'}, 2)
        .to('.bottomText li a', {'border':'1px solid #000', 'ease': 'none', 'duration':'0.2'}, 0)
});


// footer(contact) phone 무한슬라이드
$(function(){
    $("#scroller").simplyScroll({
        frameRate: 10 
    });
});