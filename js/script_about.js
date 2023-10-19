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

// 03. visual moto 무한슬라이드
$(function(){
    $("#scroller").simplyScroll({
        pauseOnHover : false
    });
    // footer
    $("#scroller02").simplyScroll({
        frameRate: 10 
    });
});


//scrolltrigger
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width : 1250px)' :function(){
            // visual video 
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.visual',
                    start: '50% 50%',
                    end: '150%',
                    scrub: 1,
                    pin: true,
                    // markers: true
                }
            })
    
            .fromTo('.visual .videoBox', {'transform':'rotateY(-40deg) rotateX(40deg) translateX(-50%)', 'top':'10%' , 'width':'500px', 'opacity':'0.2', 'zIndex':'-1'},{'transform':'rotateY(0deg) rotateX(0deg) translateX(-50%)', 'width':'870px', 'top':'25%', 'opacity':'1', 'zIndex':'1'}, 0)

            // 04.about 페이지 고정 text박스 두개 볼수있도록
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.about',
                    pin: true,
                    start: '0% 0%',
                    end: '+100%',
                    scrub: 1,
                    // markers:true
                }
            })

            // hobby title fixd 
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.hobby',
                    start: 'top',
                    end: '+250%',
                    scrub: 1,
                    pin: true,
                    // markers:true
                }
            })
            .to('.hobby .leftBox', {'y':'-80%', 'ease':'none', 'duration':'5'}, 0)

            // hobby
            gsap.utils.toArray('.hobby li').forEach(function(hobbyBox){
                gsap.timeline({
                    scrollTrigger: {   
                        trigger: hobbyBox, 
                        start: '30% 75%',
                        end:'70% 10%',
                        toggleClass:{'targets':hobbyBox, className:'active'},
                        scrub: 1,
                        // markers: true
                    }
                })
            })


        
        }//1024px 해상도 End
    })//responsive End

    ScrollTrigger.matchMedia({
        '(min-width : 969px)' :function(){
            // footer 배경 바꾸기
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.hobby',
                    start: '73% 0%',
                    end: '85%',
                    scrub: 1,
                    // markers:true
                }
            })
            .to('body', {'backgroundColor':'#e55139', 'color':'#000', 'ease': 'none', 'duration':'2.5'}, 2)
            .to('#scroller02', {'color':'#fff', 'ease': 'none', 'duration':'2.5'}, 2)
                    
        }//1024px 해상도 End
    })//responsive End

    // footer 배경 바꾸기
    gsap.timeline({
        scrollTrigger:{
            trigger: '.hobby',
            start: '97% 0%',
            end: '99%',
            scrub: 1,
            // markers:true
        }
    })
    .to('body', {'backgroundColor':'#e55139', 'color':'#000', 'ease': 'none', 'duration':'2.5'}, 2)
    .to('#scroller02', {'color':'#fff', 'ease': 'none', 'duration':'2.5'}, 2)
            
});


// scrolla
$(window).on('scroll resize', function(){
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    // alert(scrollPos);
    aboutBox();

    //textBox.on
    function aboutBox(){
        $('.aboutBox').removeClass('on');
    }

    if(scrollPos > 2800){
        $('.aboutBox').removeClass('on');
        $('.aboutBox').addClass('on');
    }

});


// motion
$(function() {
    $('.animate').scrolla({
        mobile: true, //모바일버전시 활성화
        once: false //스크롤시 딱 한번만 하고싶을땐 true
    });    
    $('.animate01').scrolla({
        mobile: true, //모바일버전시 활성화
        once: true //스크롤시 딱 한번만 하고싶을땐 true
    });
 })

 // timeline splittiong
$(function(){ Splitting();});