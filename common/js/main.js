$(function(){
  $(window).resize(function(){
    location.reload();
  });

  $(window).on("scroll",function(){
    let sctop = $(this).scrollTop();
    if(sctop > 0){
      $("#header").addClass("on");
    }
    else{
      $("#header").removeClass("on");
    }
  });

  $(".m_btn").on("click",function(){
    $(this).toggleClass("active");
    $(".m_box").toggleClass("on");
  });

  
});

let typed = new Typed('.cont1_tit', {
    strings: ['Web Publisher','KIMSUNKYO','PORTFOLIO'],
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
});

let width = window.innerWidth;
let height = window.innerHeight;
function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  // console.log(width)
}
resize();

function Update() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const smoother = ScrollSmoother.create({
    wrapper:"#wrap",
    content:"#main",
    smooth:1,
    effects:true,
    normalizeScroll:true,
    ignoreMobileResize:true,
  });
  
  ScrollTrigger.matchMedia({
    "(min-width:50px)": function() {
      gsap.timeline({
        scrollTrigger: {
            trigger:".cont2 .about01",
            start:"top 600",
            end:"bottom 400",
            scrub:1.5,
        }
      }) 
      .to('.cont2 .about01 .about_num', {x:"0",opacity:"1"})
    
      gsap.timeline({
        scrollTrigger: {
            trigger:".cont2 .about01",
            start:"top 800",
            end:"bottom 400",
            scrub: 1.5,
        }
      })   
      .to('.cont2 .about01 .about_txt', {x:"0", opacity:"1"})
    
      gsap.timeline({
        scrollTrigger: {
            trigger:".cont2 .about02",
            start:"top 600",
            end:"bottom 400",
            scrub:1.5,
        }
      }) 
      .to('.cont2 .about02 .about_num', {x:"0", opacity:"1"})
    
      gsap.timeline({
        scrollTrigger: {
            trigger:".cont2 .about02",
            start:"top 800",
            end:"bottom 400",
            scrub: 1.5,
        }
      })   
      .to('.cont2 .about02 .about_txt', {x:"0", opacity:"1"})
    
      gsap.timeline({
        scrollTrigger: {
            trigger:".cont2 .about03",
            start:"top 600",
            end:"bottom 400",
            scrub:1.5,
        }
      }) 
      .to('.cont2 .about03 .about_num', {x:"0", opacity:"1"})
    
      gsap.timeline({
        scrollTrigger: {
            trigger:".cont2 .about03",
            start:"top 800",
            end:"bottom 400",
            scrub:1.5,
        }
      })   
      .to('.cont2 .about03 .about_txt', {x:"0", opacity:"1"})
    
      const textElements = gsap.utils.toArray('.all_tit');
      textElements.forEach(text => {
        gsap.to(text, {
          backgroundSize:'100%',
          ease:'none',
          scrollTrigger: {
            trigger:text,
            start:'center 100%',
            end:'center 70%',
            scrub:true,
            invalidateOnRefresh:true
          },
        });
      });

      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger:'.cont4',
          pin:true,
          start:'top top',
          end:'+=125%',
          scrub:2,
          invalidateOnRefresh:true,
        },
      });

      const imageElements = gsap.utils.toArray('.app_img_list > li');
      imageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger:'.cont4',
          start:'top top',
          end:'+=250%',
          scrub:1,
          invalidateOnRefresh:true
        },
      });

      imageTimeline.fromTo(
        imageElements,
        {
          y: window.innerHeight * 1.5,  
          opacity: 0.75,
          scale: 1,
        },
        {
          y: -window.innerHeight * 1.5, 
          opacity: 1,
          scale: 1,
          duration: 1, 
        }
      );

      let appText = gsap.timeline({
        scrollTrigger: {
            trigger:".s_text",
            start:"top 600",
            end:"top top",
            onEnter: function () {
                $(".s_text").addClass('on');
            },
            onLeaveBack: function () {
                $(".s_text").removeClass('on');
            },
            invalidateOnRefresh:true
        }
      });
      let Btns = gsap.timeline({
        scrollTrigger: {
            trigger: ".cont4_btn_wrap",
            start: "top 600",
            end: "top top",
            onEnter: function () {
                $(".cont4_btn_wrap").addClass('on');
            },
            onLeaveBack: function () {
                $(".cont4_btn_wrap").removeClass('on');
            },
             invalidateOnRefresh:true
        }
      });
    },
    "(min-width:901px)": function() {
      const workWrap = document.querySelector(".cont3");
      const workList = gsap.utils.toArray(".cont3 .work_list > li");
    
    gsap.to(workList, {
        xPercent: -110 * (workList.length-1),
        ease:"none",
        scrollTrigger: {
          trigger:workWrap,
          start:"top top",
          end:() => "+=" + (workWrap.offsetWidth),
          pin:true,
          scrub:3,
          snap:{
            snapTo:1 / (workList.length - 1),
            inertia:false,
            duration:{min:0.1, max:0.1 },
          },
          invalidateOnRefresh:true,
          anticipatePin:1,
        },
      });
    }
  });
   window.addEventListener("resize", ScrollTrigger.update); 
}

Update();

let roller = document.querySelector('.roller .rolling_list');
roller.id = 'roller1';
let clone = roller.cloneNode(true)
clone.id = 'roller2';
document.querySelector('.roller').appendChild(clone);
roller.classList.add('original');
clone.classList.add('clone');


document.querySelectorAll(".h_gnb > li > a").forEach((item, index) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;
    let hash = target.hash;

    gsap.to(window, {
      duration:1,
      scrollTo:hash,
      ease:"Power1.easeInOut"
    });
  });
});

document.querySelectorAll(".m_gnb > li > a").forEach((item, index) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;
    let hash = target.hash;

    gsap.to(window, {
      duration:1,
      scrollTo:hash,
      ease:"Power1.easeInOut"
    });
  });
});

$(function(){
  $(".cont3 .work_img").on("mouseenter",function(){
    let workHeight =$(this).children("img").outerHeight() - $(this).outerHeight();
    let allHeihgt = Math.ceil(workHeight);
    // console.log(allHeihgt);
    $(this).children("img").css({"top":-allHeihgt + "px"});
  });

  $(".cont3 .work_img").on("mouseleave",function(){
    $(this).children("img").css({"top":"0px"});
  });
});


let ww = $(window).outerWidth(true);
let mySwiper = undefined;

function initSwiper() {

  if (ww < 900 && mySwiper == undefined) {
    mySwiper = new Swiper(".mySwiper", {
      slidesPerView: 1.2,
      spaceBetween: 15,
      simulateTouch: true,
      loop: true,
      centeredSlides: true,
      pagination: {
              el: ".swiper-pagination",
              type: "progressbar",
      },
      a11y: {
        enabled: true,
      }
    });
  } else if (ww >= 900 && mySwiper != undefined) {
    mySwiper.destroy();
    mySwiper = undefined;
  }
}

initSwiper();

$(window).on('resize', function () {
	ww = $(window).outerWidth(true);
  initSwiper();
});
















