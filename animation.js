/* navbar elements animation */

gsap.from(".navbar .left h1",{
    y:17,
    duration:0.8,
    delay:0.3,
    opacity:0,
    ease: "power2.out",
})
gsap.from(".navbar .middle h5",{
    y:17,
    duration:0.8,
    delay:1.1,
    opacity:0,
    ease: "power2.out",
})
gsap.from(".navbar .right h5",{
    y:17,
    duration:0.8,
    delay:1.9,
    opacity:0,
    ease: "power2.out",
})

/* main text animation */

gsap.from(".page1 .main",{
    x:400,
    opacity:0,
    delay:1.3,
    duration:2,
    ease: "expoScale(0.5,7,none)",
})

/* projects slide animation */

window.addEventListener("wheel",function(dets) {
    if(dets.deltaY>0){
        gsap.to(".slides",{
            transform:"translateX(-200%)",
            duration:2.5,
            repeat:-1,
            ease:"none",
        })
        gsap.to(".slides i",{
            rotate:180,
            ease:"none",
        })
    }else{
        gsap.to(".slides",{
            transform:"translateX(0%)",
            duration:2.5,
            repate:-1,
            ease:"none",
        })
        gsap.to(".slides i",{
            rotate:0,
            ease:"none",
        })
    }
})
/* project animation */

function projectAnimation1() {
    gsap.from(".project1", {
        x:-400,
        opacity:0,
        delay:0.2,
        duration:1,
        ease:"none",
        scrollTrigger:{
            trigger: ".page2",
            scroller: "body",
            start: "top 190px",
            end: "top 50px",
            scrub:1,
            ease:"none",
        }
    })
    gsap.from(".project2", {
        x:400,
        opacity:0,
        delay:0.2,
        duration:1,
        ease:"none",
        scrollTrigger:{
            trigger: ".page2",
            scroller: "body",
            start: "top 190px",
            end: "top 50px",
            scrub:1,
            ease:"none",
        }
    })
}
projectAnimation1();
// 
function projectAnimation2() {
    gsap.from(".project3", {
        x:-400,
        opacity:0,
        delay:0.2,
        duration:1,
        ease:"none",
        scrollTrigger:{
            trigger: ".page3",
            scroller: "body",
            start: "top 300px",
            end: "top 50px",
            scrub:1,
            ease:"none",
        }
    })
    gsap.from(".project4", {
        x:400,
        opacity:0,
        delay:0.2,
        duration:1,
        ease:"none",
        scrollTrigger:{
            trigger: ".page3",
            scroller: "body",
            start: "top 300px",
            end: "top 50px",
            scrub:1,
            ease:"none",
        }
    })
}
projectAnimation2();

/* mrwebmonkey text animation */

gsap.to(".page4 span",{
    transform:"translateX(-1700px)",
    duration:12,
    ease: "none",
    scrollTrigger:{
        trigger: ".page4",
        start: "top top",
        end:"bottom",
        scrub:3,
        pin: true,
    }
})




