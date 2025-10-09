function section1() {
  function breakText() {
    let h1 = document.querySelector(".section1 h1");
    let h1Text = h1.textContent;

    let splittedText = h1Text.split("");
    let clutter = "";

    let halfValue = Math.floor(splittedText.length / 2);
    splittedText.forEach((elem, idx) => {
      if (idx < halfValue) clutter += `<span class="left">${elem}</span>`;
      else clutter += `<span class="right">${elem}</span>`;
    });

    h1.innerHTML = clutter;
  }
  breakText();

  gsap.from(".section1 h1 .left", {
    y: 100,
    opacity: 0,
    duration: 0.9,
    delay: 0.3,
    stagger: 0.2,
  });
  gsap.from(".section1 h1 .right", {
    y: 100,
    opacity: 0,
    duration: 0.9,
    delay: 0.3,
    stagger: -0.2,
  });
}
section1();

function section2Marque() {
  const marqueeAnim = gsap.to(".section2 .marque", {
    xPercent: -190,
    duration: 8,
    repeat: -1,
    ease: "none",
    modifiers: {
      xPercent: gsap.utils.wrap(-95, 0) // loop seamlessly
    }
  });
  window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
      marqueeAnim.timeScale(1); // normal direction
      gsap.to(".marque img", { rotate: 180, duration: 0.5 });
    } else {
      marqueeAnim.timeScale(-1); // reverse direction
      gsap.to(".marque img", { rotate: 0, duration: 0.5 });
    }
  });
}
section2Marque();