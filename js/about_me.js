gsap.registerPlugin(ScrollTrigger);

gsap.to(".t1",{
    color:"#67C7F0",
    scrollTrigger: {
        trigger: ".first", 
        start:"-10% top",
        end:"10% top",
        scrub: "true",
        pin:"true",
        markers: "true",
    }
});

gsap.to(".t1",{
    color:"#6A6A6B",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".first",
        start:"50% top",
        end:"80% top",
        scrub: "true",
        pin:"true",
        markers: "true",
    }
});

gsap.to(".t2",{
    color:"#67C7F0",
    scrollTrigger: {
        trigger: ".second", 
        start:"-10% top",
        end:"10% top",
        scrub: "true",
        pin:"true",
        markers: "true",
    }
});

gsap.to(".t2",{
    color:"#6A6A6B",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".second",
        start:"50% top",
        end:"80% top",
        scrub: "true",
        pin:"true",
        markers: "true",
    }
});

gsap.to(".t3",{
    color:"#67C7F0",
    scrollTrigger: {
        trigger: ".third", 
        start:"-10% top",
        end:"10% top",
        scrub: "true",
        pin:"true",
        markers: "true",
    }
});

gsap.to(".t3",{
    color:"#6A6A6B",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".third",
        start:"50% top",
        end:"80% top",
        scrub: "true",
        pin:"true",
        markers: "true",
    }
});

gsap.to(".t4",{
    color:"#67C7F0",
    scrollTrigger: {
        trigger: ".forth", 
        start:"-10% top",
        end:"10% top",
        scrub: "true",
        pin:"true",
        markers: "true",
    }
});

gsap.to(".t4",{
    color:"#6A6A6B",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".forth",
        start:"50% top",
        end:"80% top",
        scrub: "true",
        pin:"true",
        markers: "true",
    }
});

gsap.to(".t5",{
    color:"#67C7F0",
    scrollTrigger: {
        trigger: ".fifth", 
        start:"-10% top",
        end:"10% top",
        scrub: "true",
        pin:"true",
        markers: "true",
    }
});

gsap.to(".t5",{
    color:"#6A6A6B",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".fifth",
        start:"50% top",
        end:"80% top",
        scrub: "true",
        pin:"true",
        markers: "true",
    }
});


var leftbartop=$('.first').offset().top+25;

$(window).scroll(function(){

  var current_scroll=$(window).scrollTop();

  if(current_scroll>=leftbartop){
    $('.left-bar').css({
      position:'fixed',
      top:"10vh",

    });
  }else{
    $('.left-bar').css({
      position:'relative',
    });
  }

  }
)
