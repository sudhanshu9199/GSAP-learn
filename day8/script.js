function section1Animation() {
    let tl1 = gsap.timeline();

tl1.from('nav h1, nav h4, nav button', {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 0.7,
    stagger: 0.3
})

tl1.from('.center-part1 h1', {
    x: -500,
    opacity:0,
    duration: 0.6
})
tl1.from('.center-part1 p', {
    x: -100,
    opacity:0,
    duration: 0.4
})
tl1.from('.center-part1 button', {
    opacity:0,
    duration: 0.4
})
tl1.from('.center-part2 img', {
    opacity: 0,
    duration: 0.6
}, "-=0.5")
tl1.from('.section1 .bottom img', {
    opacity: 0,
    y: 30,
    stagger: 0.3,
    duration: 0.6
})
}

section1Animation();

function section2Animation() {
    
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: 'body',
        // markers: true,
        start: "top 70%",
        end: "top 0%",
        scrub: 1
    }
});
tl2.from('.section2 .services', {
    y: 30,
    opacity: 0,
})
tl2.from('.section2 .container .line1.elem.left', {
    x: -300,
    opacity: 0,
    duration: 1
}, 'anime1')
tl2.from('.section2 .container .line1.elem.right', {
    x: 300,
    opacity: 0,
    duration: 1
}, 'anime1')

tl2.from('.section2 .container .line2.elem.left', {
    x: -300,
    opacity: 0,
    duration: 1
}, 'anime2')
tl2.from('.section2 .container .line2.elem.right', {
    x: 300,
    opacity: 0,
    duration: 1
}, 'anime2')
}

section2Animation();