# GSAP Day 2 Lecture Notes

## Topic: ScrollTrigger in GSAP

---

## What is ScrollTrigger?
- ScrollTrigger is a GSAP plugin that lets you trigger animations as you scroll through a webpage.
- It helps create scroll-based effects like pinning, scrubbing, and revealing elements.

---

## How to Use ScrollTrigger

### 1. Setup
- Add GSAP and ScrollTrigger via CDN in your HTML:
  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js"></script>
  ```

---

## Basic Animation Example

```javascript
gsap.from('.page1 #box1', {
    scale: 0,
    duration: 1,
    delay: 1,
    rotate: 360
});
```
- This animates the box on page load (no scroll).

---

## ScrollTrigger Properties

### 2. Trigger Animation on Scroll

```javascript
gsap.from('.page2 #box1', {
    scale: 0,
    duration: 1,
    delay: 1,
    rotate: 360,
    scrollTrigger: '.page2 #box1'
});
```
- `scrollTrigger`: Starts animation when the element enters the viewport.

---

### 3. Advanced ScrollTrigger Options

```javascript
gsap.from('.page3 #box1', {
    scale: 0,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: '.page3 #box1',
        scroller: 'body',
        markers: true, // Shows start/end markers for debugging
        pin: true      // Pins the element during scroll
    }
});
```

#### Common ScrollTrigger Properties:
- `trigger`: Element that starts the animation.
- `scroller`: Defines the scroll container (usually 'body').
- `markers`: Shows visual markers for debugging.
- `pin`: Pins the element while the animation is active.
- `start`: When the animation should start (e.g., `'top 60%'`).
- `end`: When the animation should end (e.g., `'top 30%'`).
- `scrub`: Syncs animation with scroll (can be `true` or a number for smoothness).

---

### 4. Example with Start, End, Scrub, and Pin

```javascript
gsap.from('.page4 #box1', {
    scale: 0,
    duration: 1,
    rotate: 760,
    scrollTrigger: {
        trigger: '.page4 #box1',
        scroller: 'body',
        markers: true,
        start: 'top 60%',
        end: 'top 30%',
        scrub: 2,
        pin: true
    }
});
```
- `scrub: 2`: Animation follows scroll with smoothing.
- `pin: true`: Keeps the element fixed during animation.

---

### 5. Horizontal Scroll Animation Example

```javascript
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
});
```
- Moves the heading horizontally as you scroll through `.page6`.

---

## Revision Checklist

- [ ] Understand what ScrollTrigger does
- [ ] Know how to set up GSAP and ScrollTrigger
- [ ] Use `scrollTrigger` to animate elements on scroll
- [ ] Use properties: `trigger`, `scroller`, `markers`, `pin`, `start`, `end`, `scrub`
- [ ] Try pinning and scrubbing animations

---

## Practice Task

1. Animate boxes on different pages using ScrollTrigger.
2. Experiment with `start`, `end`, `scrub`, and `pin` properties.
3. Use `markers: true` to debug your scroll animations.
4. Create a horizontal scroll effect for text.

---

**Tip:** For more details and examples, visit the official GSAP ScrollTrigger documentation:  
[GSAP ScrollTrigger Docs](https://greensock.com/scrolltrigger/)

<!-- Day 2 in GSAP -->
<!-- Learn about scrollTrigger, with scrollTrigger property's are trigger, scroller, markers, pin, start, end, scrub. -->