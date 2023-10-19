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


// visual splittiong
$(function(){ Splitting();});


//scrolltrigger
$(function(){
    gsap.registerPlugin(ScrollTrigger);

            // visual 배경 바꾸기
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.visual',
                    start: '15% 0%',
                    end: '30%',
                    scrub: 1,
                    // markers:true
                }
            })
            .to('body', {'backgroundColor':'#fff', 'ease': 'none', 'duration':'2.5'}, 2)

            // design header 색
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.design',
                    start: '0%',
                    end: '0%',
                    scrub: 0.2,
                    // markers:true
                }
            })
            .to('header', {'color':'#fff', 'ease': 'none', 'duration':'0.1'}, 0)
            .to('header span', {'backgroundColor':'#fff', 'ease': 'none', 'duration':'0.1'}, 0)

            // production header 색
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.production',
                    start: '0%',
                    end: '0%',
                    scrub: 0.2,
                    // markers:true
                }
            })
            .to('header', {'color':'#000', 'ease': 'none', 'duration':'0.1'}, 0)
            .to('header span', {'backgroundColor':'#000', 'ease': 'none', 'duration':'0.1'}, 0)

            // footer 배경 바꾸기
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.production',
                    start: '99% 0%',
                    end: '100%',
                    scrub: 1,
                    // markers:true
                }
            })
            .to('body', {'backgroundColor':'#e55139', 'color':'#000', 'ease': 'none', 'duration':'2.5'}, 2)
            .to('#scroller', {'color':'#fff', 'ease': 'none', 'duration':'2.5'}, 2)
        
});


// motion
$(function() {
    $('.animate').scrolla({
        mobile: true, //모바일버전시 활성화
        once: false //스크롤시 딱 한번만 하고싶을땐 true
    });    
 })

 
 // footer(contact) phone 무한슬라이드
$(function(){
    $("#scroller").simplyScroll({
        frameRate: 10 
    });
});
