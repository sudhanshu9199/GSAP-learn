let main = document.getElementById('main')
let cursor = document.getElementById('cursor');
let image = document.querySelector('.image');
main.addEventListener('mousemove', (dets) => {
    // console.log(dets.clientX, dets.clientY);
    // cursor.style.left = `${dets.clientX}px`;
    // cursor.style.top = `${dets.clientY}px`;

    gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.8,
        ease: "back.out(4)",
    })
})

image.addEventListener('mouseenter', (dets) => {
    cursor.innerHTML = 'View',
    gsap.to(cursor, {
        scale: 2.5,
    })
})

image.addEventListener('mouseleave', (dets) => {
    cursor.innerHTML = '',
    gsap.to(cursor, {
        scale: 1,
    })
})

