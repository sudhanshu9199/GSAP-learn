let path = `M 10 100 Q 765 100 1520 100`;
let finalPath = `M 10 100 Q 765 100 1520 100`;

let string = document.getElementById('string');

string.addEventListener('mousemove', (dets) => {
    path = `M 10 100 Q ${dets.x} ${dets.y} 1520 100`
    gsap.to('svg path', {
        attr: {d: path},
        duration: 0.2,
        ease: "power4.out",
    })
    
})
string.addEventListener('mouseleave', () => {
    gsap.to('svg path', {
        attr: {d: finalPath},
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
    })
})