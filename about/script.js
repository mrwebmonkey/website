gsap.to(".slides",{
    transform:"translateX(-100%)",
    duration:4,
    repeat:-1,
    ease:"none",
    yoyo: true,
})
        
var logo2 = document.querySelector(".logo2");
logo2.addEventListener("click",function(){
    gsap.to(".right1 img",{
        x:-648,
        delay:0.1,
        duration:1.8,
        ease:"none",
    })
})

var logo1 = document.querySelector(".logo1");
logo1.addEventListener("click",function(){
    gsap.to(".right1 img",{
        x:0,
        delay:0.1,
        duration:1.8,
        ease:"none",
    })
})

/* svg  animation */

var initialPath = `M 10 100 Q 500 100 990 100`
var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector("svg")

string.addEventListener("mousemove", function(dets) {
initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
gsap.to("svg path",{
    attr:{d:initialPath},
    duration: 0.2,
    ease:"power3.out"
})
})

string.addEventListener("mouseleave", function() {
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)",
    })
})



