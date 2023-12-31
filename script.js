var menu = document.querySelector("#nav-prt2 #menu");
var full = document.querySelector("#full-scr-nav");
var isOpen = false;

menu.addEventListener("click", function () {
  isOpen = !isOpen;

  full.style.top = isOpen ? "0%" : "-100%";

  document.querySelector("#logo").style.color = isOpen ? "#232025" : "#D5CDC4";
  document.querySelector("#nav-prt2 h2").style.display = isOpen ? "none" : "block";
  document.querySelector("#menu").style.color = isOpen ? "#232025" : "#D5CDC4";

  document.querySelector("#line-1").style.backgroundColor = isOpen ? "#232025" : "#D5CDC4";
  document.querySelector("#line-2").style.backgroundColor = isOpen ? "#232025" : "#D5CDC4";

  // Toggle the class 'openmenu' on the menu div
  document.querySelector("#menu").classList.toggle("openmenu", isOpen);
});


var tl = gsap.timeline()

tl.from("#page-1 h1", {
    y: 60,
    duration: 0.7,
    opacity: 0,
    ease: Expo.ease
})
.from("#page-1 h2", {
    y: 50,
    duration: 0.5,
    delay: -0.2,
    ease: Expo.ease
})
.from("#page-1 h3", {
    y: 50,
    duration: 0.5,
    delay: -0.4,
    ease: Expo.ease
});

gsap.to("#page-2 img",{
    scale:1,
    scrollTrigger:{
        trigger:"#page-2 img",
        scroller:"body",
        start:"top 80%",
        end:"top 5%",
        scrub:5
    }
})

gsap.from("#page-2 h1",{
    rotateX: "-90deg",
    scrollTrigger:{
        trigger: "#page-2 h1",
        scroller: "body",
        start : "top 70%",
        end : "top 60%",
        scrub: 5,
    }
})

var scroller1 = document.querySelectorAll("#page-6 #slide1-of-h1 h1")

scroller1.forEach(function(elems){
    gsap.to(elems,{
        transform: 'translateX(0%)',
        duration:2,
        scrollTrigger:{
            trigger:"#page-6",
            scroll:"body",
            scrub:5,
        }
    })
})

var scroller2 = document.querySelectorAll("#page-6 #slide2-of-h1 h1")

scroller2.forEach(function(elems){
    gsap.to(elems,{
        transform: 'translateX(-100%)',
        duration:2,
        scrollTrigger:{
            trigger:"#page-6",
            scroll:"body",
            scrub:5,
        }
    })
})

document.querySelector("#element-1").addEventListener("mousemove",function(dets){
    //img 1
    document.querySelector("#element-1 img").style.opacity = 1;
    document.querySelector("#element-1 img").style.left = `${dets.x}px`;
    document.querySelector("#element-1 img").style.top = `${dets.y - 460}px`;
})

document.querySelector("#element-2").addEventListener("mousemove",function(dets){
     //img 2
     document.querySelector("#element-2 img").style.opacity = 1;
     document.querySelector("#element-2 img").style.left = `${dets.x}px`;
     document.querySelector("#element-2 img").style.top = `${dets.y - 460}px`; 
})

document.querySelector("#element-1").addEventListener("mouseleave",function(dets){
    //img 1
    document.querySelector("#element-1 img").style.opacity = 0;
})

document.querySelector("#element-2").addEventListener("mouseleave",function(dets){
     //img 2
     document.querySelector("#element-2 img").style.opacity = 0;
})