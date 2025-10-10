import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
gsap.registerPlugin(useGSAP);

const App = () => {
  const [circle, setcircle] = useState(0);
  const random = gsap.utils.random(-500, 500, 10);
  function section1Anime() {
    useGSAP(() => {
      gsap.to(".section1 .box1", {
        x: 1550,
        duration: 3,
        delay: 1,
        rotate: 360,
        repeat: -1,
        // yoyo: true,
      });
    });
  }
  section1Anime();

  function section2Anime() {
    useGSAP(() => {
      gsap.to(".circle", {
        x: circle,
        duration: 1,
        ease: "bounce.out",
      });
    }, [circle]);
  }
  section2Anime();

  const randomX = gsap.utils.random(-480, 480, 30);
  const rotateX = gsap.utils.random(-360, 360, 30);
  const randomY = gsap.utils.random(-480, 480, 30);

  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

  const [rota, setrota] = useState(0);

  const imageRef = useRef();
  const section3Ref = useRef();

  useGSAP(() => {
    gsap.to(imageRef.current, {
      x: xValue,
      y: yValue,
      duration: 0.6,
      rotate: rota
    })
  }, {scope: section3Ref, dependencies:[xValue, yValue, rota]});

  const box2Ref = useRef();
  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(
    function() {
    gsap.to(box2Ref.current, {
      rotate: 360,
      duration: 1
    })
  }
  )

  return (
    <main>
      <section className="section1">
        <div className="box1"></div>
      </section>
      <section className="section2">
        <button onClick={() => setcircle(random)}>Animate</button>
        <div className="circle"></div>
      </section>
      <section ref={section3Ref} className="section3">
        <img onClick={() => {
          setXValue(randomX), setrota(rotateX), setYValue(randomY) 
        }} ref={imageRef} src="https://static.vecteezy.com/system/resources/thumbnails/024/077/679/small_2x/bloodsucker-mosquito-isolated-on-transparent-background-file-png.png" alt="" />
      </section>

      <section className="section4">
        <button onClick={rotateBox}>Animate</button>
        <div ref={box2Ref} className="box2"></div>
      </section>
    </main>
  );
};

export default App;
