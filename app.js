var tl=gsap.timeline()
tl.from(".nav-start,.nav-center,.nav-end",{
    y:-80,
    opacity:0,
    duration:0.5,
    stagger:0.3,
    delay:0.5
})
tl.from(".left-top-text,.left-bottom-text",{
    x:-200,
    opacity:0,
    duration:1,
    stagger:0.5
})
gsap.from(".right img",{
    x:200,
    opacity:1,
    scale:0,
    duration:1,
    delay:1.5
})
gsap.from(".page2-left h3",{
    x:-40,
    opacity:0,
    duration:0.5,
    stagger:0.5,
    scrollTrigger:{
        trigger:".page2-left",
        scroll:"body",
        start:"top 60%",
        end:"top 40%",
    }
})
gsap.from(".boxes .box",{
    x:40,
    opacity:0,
    scale:2,
    duration:0.5,
    stagger:0.5,
    scrollTrigger:{
        trigger:".boxes .box",
        scroll:"body",
        start:"top 60%",
        end:"top 40%",
    }
})