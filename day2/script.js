gsap.from('.page1 #box1', {
    scale: 0,
    duration: 1,
    delay: 1,
    rotate: 360
})
gsap.from('.page2 #box1', {
    scale: 0,
    duration: 1,
    delay: 1,
    rotate: 360,
    scrollTrigger: '.page2 #box1'
})
gsap.from('.page3 #box1', {
    scale: 0,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: '.page3 #box1',
        scroller: 'body',
        markers: true, // to showing mark when triggering
        // start: 'top 60%' // mark of start position
        pin: true
    }
})
gsap.from('.page4 #box1', {
    scale: 0,
    duration: 1,
    rotate: 760,
    scrollTrigger: {
        trigger: '.page4 #box1',
        scroller: 'body',
        markers: true, // to showing mark when triggering
        start: 'top 60%', // mark of start position
        end: 'top 30%',
        scrub: 2, // you can put any value b/w (1 to 5) or true/false
        pin: true // this pin the block as the screen view till its parents
    }
})
gsap.from('.page5 #box1', {
    scale: 0,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: '.page5 #box1',
        scroller: 'body',
        markers: true, // to showing mark when triggering
        // start: 'top 60%' // mark of start position
    }
})

gsap.to('.page6 h1', {
    transform: 'translate(-167%)',
    scrollTrigger: {
        trigger: '.page6',
        scroller: 'body',
        scrub: 2,
        markers: true,
        start: 'top 0%',
        end: 'top -150%',
        pin: true,
    }
})