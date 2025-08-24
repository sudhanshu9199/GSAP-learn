# GSAP Day 1 Lecture Notes

## What is GSAP?
- GSAP (GreenSock Animation Platform) is a powerful JavaScript library for creating high-performance animations on the web.
- It works with CSS, SVG, canvas, and JavaScript objects.

---

## Getting Started

### 1. Setup
- Include GSAP via CDN in your HTML file:
  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></script>
  ```

- Link your CSS and JS files:
  ```html
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
  ```

---

## Basic GSAP Animation Methods

### 2. `gsap.to()`
- Animates properties **to** given values.
- Example:
  ```javascript
  gsap.to('.box', {
      x: 1200,
      duration: 2,
      delay: 2,
      borderRadius: '50%'
  });
  ```

### 3. `gsap.from()`
- Animates properties **from** given values to their current state.
- Example:
  ```javascript
  gsap.from('.box2', {
      x: 1200,
      duration: 2,
      delay: 1,
      rotate: 360,
      backgroundColor: '#2A7B9B'
  });
  ```

---

## Animating Multiple Elements

### 4. Stagger Animations
- Animate multiple elements one after another.
- Example:
  ```javascript
  gsap.from('.text1 h2', {
      duration: 0.5,
      delay: 1,
      stagger: 0.5,
      y: 30,
      opacity: 0
  });
  ```

---

## Infinite & Yoyo Animations

### 5. Repeat and Yoyo
- `repeat: -1` for infinite loop.
- `yoyo: true` for reverse animation.
- Example:
  ```javascript
  gsap.to('.box4', {
      duration: 1,
      delay: 1,
      x: 580,
      rotate: 360,
      repeat: -1,
      yoyo: true
  });
  ```

---

## Timeline Animations

### 6. Timeline
- Sequence multiple animations.
- No need for delay on each animation.
- Example:
  ```javascript
  let tl = gsap.timeline();
  tl.to('.time #box1', { x: 1200, rotate: 360, duration: 1.5, delay: 1 });
  tl.to('.time #box2', { x: 1000, duration: 1.5 });
  tl.to('.time #box3', { x: 700, duration: 1.5 });
  ```

---

## Animating Navigation

### 7. Stagger Navigation Items
- Animate nav items with stagger for smooth effect.
- Example:
  ```javascript
  let tl2 = gsap.timeline();
  tl2.from('.navs #left', { y: -20, opacity: 0, duration: 1, delay: 0.5 });
  tl2.from('.navs #right p', { y: -20, opacity: 0, duration: 1, stagger: 0.5 });
  ```

---

## Revision Checklist

- [ ] Setup GSAP in your project
- [ ] Use `gsap.to()` and `gsap.from()` for basic animations
- [ ] Animate multiple elements with `stagger`
- [ ] Create infinite/yoyo animations
- [ ] Sequence animations using Timeline
- [ ] Animate navigation/menu items

---

## Practice Task

1. Try animating different boxes with various properties (x, y, scale, rotate, backgroundColor).
2. Use stagger to animate headings or menu items.
3. Create a timeline for sequential animations.

---

**Tip:** Always check the GSAP documentation for more features and examples:  
[GSAP Docs](https://greensock.com/docs/)
