gsap.from(".flex-two > *", 2,{
    opacity:0,
    delay:1,
    stagger:0.2
    })

    gsap.from(".flex-one > *", 2,{
    opacity:0,
    delay:2.5,
    stagger:0.2
    })

    gsap.from(".flex-three > *", 2,{
    opacity:0,
    delay:3,
    stagger:0.2
    })

   var toggleBtn = document.querySelector(".toggleBtn");
    var menu = document.querySelector(".menu");

    var tl = new TimelineMax({paused:true});

    tl.to(".menu-icon", 0.8, {
        opacity:0,
        rotation: 180
    })

    tl.to(".close-icon", 0.8, {
        opacity:1,
        rotation: 180,
    }, "-=0.9")

    tl.to(".menu", 0.8, {
        scale: 1
    }, "-=1")

    tl.from(".menu li", 0.8, {
        opacity: 0,
        x : -100,
        stagger: .4
    })

    tl.reverse();

    toggleBtn.onclick = function(){
        tl.reversed(!tl.reversed());
    } 
  