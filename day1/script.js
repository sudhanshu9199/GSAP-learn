gsap.to('.box', {
    x: 1200,
    duration: 2,
    delay: 2,
    borderRadius: '50%'
})
gsap.from('.box2', {
    x: 1200,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: '#2A7B9B'
})

gsap.to('.box3', {
    x: 600,
    duration: 2,
    delay: 2,
    scale: 1.5
})

gsap.from('h1', {
    // color: 'red',
    duration: 1,
    delay: 1,
    y: 30,
    opacity:0
})

gsap.from('.text1 h2', {
    duration: 0.5,
    delay: 1,
    stagger: 0.5,
    y: 30,
    opacity: 0
})

gsap.from('.text2 h2', {
    duration: 0.5,
    delay: 1,
    stagger: -1,
    y: 30,
    // opacity: 0
})

gsap.to('.box4', {
    duration: 1,
    delay: 1,
    x: 580,
    rotate: 360,
    repeat: -1, // repeat the animation (-1: for infinite)
    yoyo: true // for bounce back
})

let tl = gsap.timeline() // its maintain the timeline one-after-one run whats we don't need to write 'delay' each time.

tl.to('.time #box1', {
    x: 1200,
    rotate: 360,
    duration: 1.5,
    delay: 1
})
tl.to('.time #box2', {
    x: 1000,
    duration: 1.5,
})
tl.to('.time #box3', {
    x: 700,
    duration: 1.5,
})

let tl2 = gsap.timeline();

tl2.from('.navs #left', {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5
})
tl2.from('.navs #right p', {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
})