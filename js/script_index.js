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

//03. Splitting.js => video text 올라가는 효과
$(function(){
    Splitting();
});


// 04.scrolltrigger
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width : 1250px)' :function(){
            // visual
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.visual',
                    start: 'top',
                    end: '100% -350%',
                    scrub: 1,
                    pin: true,
                    // markers:true
                }
            })
            .to('.visual .titleBox', {'scale':'0.8', 'opacity':'0', 'ease':'none', 'duration':'1'}, 0)
            .to('.visual .video', {'scale':'1', 'ease':'none', 'duration':'3', 'opacity':'1' }, 0)
            .to('.visual .videoBox', {'width':'100%', 'height': '100%','duration':'5', 'bottom':'0%', 'right':'0%', 'borderRadius':'0'}, 14) 
            .to ('.scrollDown', {'opacity':'0', 'ease':'none', 'duration':'3'},10)

            // keyword 스크롤반응
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.keyword',
                    start: 'top',
                    end: '+200%',
                    scrub: 1,
                    pin: true,
                    // markers:true
                }
            })
            .to('.word01, .word05', {'opacity':'1', 'ease': 'none', 'duration':'0.5'}, 0.3)
            .to('.word02, .word06, .word04', {'opacity':'1', 'ease': 'none', 'duration':'0.5'}, 1)
            .to('.word07, .word03', {'opacity':'1', 'ease': 'none', 'duration':'1'}, 1.7)

            // skill 가로스크롤
            let list = gsap.utils.toArray('.skill ul li');
            let scrollTrigger = gsap.to(list,{
                xPercent: -95* (list.length -1.7),
                ease: 'none',
                scrollTrigger: {
                    trigger: '.skill',
                    pin: true,
                    scrub: 1,
                    start: 'center center',
                    end: '250%',
                    // markers: true
                }
            }); // skill 가로스크롤 END

            // work title fixd 
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.work',
                    start: 'top',
                    end: '+180%',
                    scrub: 1,
                    pin: true,
                    // markers:true
                }
            })
            .to('.work .listBox', {'y':'-80%', 'ease':'none', 'duration':'5'}, 0)
        }//1024px 해상도 End
    })//responsive End

    ScrollTrigger.matchMedia({
        '(min-width : 652px)' :function(){

            // about me 배경 바꾸기
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.about',
                    start: '70% top',
                    end: '80% top',
                    scrub: 1,
                    // markers:true
                }
            })
            .to('.about', {'color':'#000', 'ease': 'none', 'duration':'2'}, 0)
            .to('.about .bg', {'opacity': '0', 'ease': 'none', 'duration':'2'}, 0)
            .to('body', {'backgroundColor':'#fff', 'ease': 'none', 'duration':'2'}, 0)
            .from('.keyword .inner h3', {'color':'#fff', 'ease': 'none', 'duration':'2'}, 0)

        }//652px 해상도 End
    })//responsive End

    // hobby active class 생성
    ScrollTrigger.create({
        trigger: '.hobby',
        start: '10% 45%',
        end: '93% 45%',
        toggleClass: {targets:'.hobby .title', className:'active'},
        // markers: true
    })

    // hobby text 변경
    gsap.utils.toArray('.dataText').forEach(function(text){
        let num = text.getAttribute('data-text')
        let counter = document.querySelector('.hobby .title')

        ScrollTrigger.create({
            trigger: text,
            start: '0 50%',
            end: '100% 50%',
            scrub: true,
            onEnter: self => counter.innerHTML = num,
            onEnterBack: self => counter.innerHTML = num,
            // markers: true
        })
    })    

    // footer 배경 바꾸기
    gsap.timeline({
        scrollTrigger:{
            trigger: '.hobby',
            start: '98% 0%',
            end: '100%',
            scrub: 1,
            // markers:true
        }
    })
    .to('body', {'backgroundColor':'#e55139', 'color':'#000', 'ease': 'none', 'duration':'2.5'}, 2)
    .to('.textAni', {'color':'#fff', 'ease': 'none', 'duration':'2.5'}, 2)

});


// scrolla
$(window).on('scroll resize', function(){
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    // alert(scrollPos);
    textBox();
    videoBox();

    // video text scroll 반응
    function textBox(){
        $('.textBox li').removeClass('on');
    }

    if(scrollPos > 1100){
        $('.textBox li').removeClass('on');
        $('.textBox li:eq(0)').addClass('on');
    }

    if(scrollPos > 1700){
        $('.textBox li').removeClass('on');
        $('.textBox li:eq(1)').addClass('on');
    }

    if(scrollPos > 2300){
        $('.textBox li').removeClass('on');
        $('.textBox li:eq(2)').addClass('on');
    }

    // if(scrollPos > 2800){
    //     $('.textBox li').removeClass('on');
    // }

    // videoBox
    function videoBox(){
        $('.videoBox video').removeClass('on');
    }

    if(scrollPos > 1100){
        $('.videoBox video').removeClass('on');
        $('.videoBox video:eq(0)').addClass('on');
    }

    if(scrollPos > 1700){
        $('.videoBox video').removeClass('on');
        $('.videoBox video:eq(1)').addClass('on');
    }

    if(scrollPos > 2300){
        $('.videoBox video').removeClass('on');
        $('.videoBox video:eq(2)').addClass('on');
    }

    // if(scrollPos > 2800){
    //     $('.videoBox video').removeClass('on');
    // }
});


// motto motion
$(function() {
    $('.animate').scrolla({
        mobile: true,
        once: false
    });    
})


//ncs fadeImg
// $(function(){
//     let activeImg;

//     gsap.utils.toArray(".ncs ul li").forEach((elem) => {
//         let image = elem.querySelector('p.fadeImg'),

//         align = e => {
//         setX(e.clientX);
//         setY(e.clientY);
//         },

//         startPoint = () => document.addEventListener("mousemove", align),
        
//         stopPoint= () => document.removeEventListener("mousemove", align),

//         fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true }); 

//         elem.addEventListener('mouseenter', (e) => {
//             fade.play();
//             startPoint();

//             if (activeImg) {
//                 gsap.set(image, {x: gsap.getProperty(activeImg, "x"), 
//                                 y: gsap.getProperty(activeImg, "y")}
//                         );
//                     }

//                 activeImg = image;
//                 setX = gsap.quickTo(image, "x", {duration: 0.25, ease:Elastic }),
//                 setY = gsap.quickTo(image, "y", {duration: 0.25, ease:Elastic })

//                 align(e);
//             });

//             elem.addEventListener('mouseleave', () => fade.reverse());
//     });
// });

// footre 가로무한 스크롤
$(function() {
    $("#scroller").simplyScroll({
        frameRate: 10 
    });
});



