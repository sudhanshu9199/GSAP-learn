# GSAP Day 3 Lecture Notes

## Topic: SVG Animations and Manipulation with GSAP

---

## What is SVG?
- SVG (Scalable Vector Graphics) is an XML-based format for vector images.
- SVGs are resolution-independent and can be styled and animated using CSS and JavaScript.

---

## Why Animate SVGs with GSAP?
- GSAP allows you to animate SVG properties smoothly and efficiently.
- You can manipulate SVG paths, shapes, colors, and transforms for interactive effects.

---

## Getting Free SVGs
- You can get free SVGs from:
  - [https://www.svgbackgrounds.com/](https://www.svgbackgrounds.com/)
  - [https://undraw.co/](https://undraw.co/)
  - [https://www.svgrepo.com/](https://www.svgrepo.com/)
  - [https://www.flaticon.com/](https://www.flaticon.com/)
  - [https://www.iconmonstr.com/](https://www.iconmonstr.com/)
- You can also create your own SVGs using tools like Figma, Illustrator, or online SVG editors.

---

## Ways to Manipulate SVGs with GSAP

### 1. Animate SVG Attributes
- You can animate SVG attributes like `d` (path), `fill`, `stroke`, `transform`, etc.
- Example: Animate the `d` attribute of a path for a morphing effect.

### 2. Animate SVG Transforms
- Move, scale, rotate SVG elements using GSAP's transform properties.

### 3. Animate Colors and Opacity
- Animate `fill`, `stroke`, and `opacity` for color transitions and fades.

### 4. Interactive Animations
- Use mouse events (mousemove, mouseleave, click) to trigger SVG animations.

---

## Example: Interactive SVG Path Manipulation

### HTML Structure
```html
<div id="string">
  <svg width="1530" height="200">
    <path d="M 10 100 Q 765 100 1520 100" stroke="white" fill="transparent" />
  </svg>
</div>
```

### JavaScript (GSAP)
```javascript
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
```
- On mouse move, the path's curve changes interactively.
- On mouse leave, the path returns to its original shape with an elastic effect.

---

## Revision Checklist

- [ ] Understand what SVG is and why it's useful for animation.
- [ ] Know how to get free SVGs online.
- [ ] Learn how to animate SVG attributes (`d`, `fill`, `stroke`, etc.) using GSAP.
- [ ] Practice interactive SVG manipulation with mouse events.
- [ ] Explore morphing, color transitions, and transforms in SVGs.

---

## Practice Task

1. Download a free SVG and add it to your project.
2. Animate the SVG's path, color, or transform using GSAP.
3. Make the SVG respond to mouse events for interactive effects.
4. Try morphing between two different SVG shapes.

---

**Tip:** For more SVG animation ideas and GSAP features, check out:  
[GSAP SVG Animation Docs](https://greensock.com/docs/v3/Plugins/MorphSVGPlugin)  
[SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG)

<!-- day3 in GSAP -->
<!-- today get to know how to make design using svg in GSAP, by doing manupulation. -->