# 🧠 GSAP Timeline Notes (Based on Your Project)
## 🎯 Concept

`GSAP Timeline` is used to **chain multiple animations** together — so they play **in sequence** or **reverse** smoothly.
Think of it as a **playlist** of animations that you can control (play, pause, reverse, speed-up).

## 🧩 Setup
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></script>
```

Then connect your JS:
```html
<script src="script.js"></script>
```

### ⚙️ Basic Timeline Creation
```js
let tl1 = gsap.timeline();
```

👉 This creates a **timeline instance** to store multiple animations.

## 🧱 Adding Animations
### ▶️ `.to()`

Changes from **current state → target state**.
```js
tl1.to('.menuSlide', {
  right: 0,
  duration: 0.5
});
```

🔹 **Used for**: moving the menu from hidden (right: -100%) to visible (right: 0).
🔹 **Duration**: 0.5 sec animation.

### ▶️ .from()

Starts animation **from a state → to original CSS**.

```js
tl1.from('.menuSlide p', {
  x: 150,
  duration: 0.7,
  stagger: 0.28,
  opacity: 0
});
```

🔹 **Used for:** sliding menu links (`p` tags) from right side.
🔹 `stagger`: Adds delay between each link animation.
🔹 `opacity: 0`: Makes them fade in nicely.

### ▶️ Add Another Animation
```js
tl1.from('.menuSlide i', {
  opacity: 0
});
```


🔹 Used for fading in the **close icon** after the menu items appear.

### ⏸️ Pause the Timeline Initially
```js
tl1.pause();
```
Because you only want to play it when the user clicks the menu button — not on page load.
---

### 🖱️ Play & Reverse with Buttons
### 🟢 Play Animation (Menu Open)
```js
menuIcon.addEventListener('click', () => {
  menuIcon.style.opacity = 0;
  tl1.timeScale(1).play();
});
```
🔹 Hides menu icon
🔹 Plays the timeline at **normal speed (1x)**
---

## 🔴 Reverse Animation (Menu Close)
```js
closeIcon.addEventListener('click', () => {
  menuIcon.style.opacity = 1;
  tl1.timeScale(2).reverse();
});
```
🔹 Shows the menu icon again
🔹 Plays the timeline **in reverse** at **2x speed**

---

## 🧠 GSAP Timeline Key Methods
| Method          | Use                              | Example                           |
| --------------- | -------------------------------- | --------------------------------- |
| `.to()`         | Animate to a target value        | `tl.to(el, {x:100})`              |
| `.from()`       | Animate from a value to current  | `tl.from(el, {y:-50, opacity:0})` |
| `.fromTo()`     | Define start & end values        | `tl.fromTo(el, {x:0}, {x:100})`   |
| `.pause()`      | Stop timeline                    | `tl.pause()`                      |
| `.play()`       | Start/continue                   | `tl.play()`                       |
| `.reverse()`    | Play backward                    | `tl.reverse()`                    |
| `.timeScale(n)` | Control speed (2 = double speed) | `tl.timeScale(2)`                 |
| `.stagger`      | Delay between elements           | `{stagger:0.3}`                   |

---

## ✨ Bonus Tip

You can chain animations easily:
```js
tl.to(...).from(...).from(...);
```
This makes your code more readable and all animations stay in perfect sync.

---

## 💡 When to Use Timeline

✅ When multiple animations should run **one after another**
✅ When you want **play, reverse, pause** control
✅ When you need **sequence logic** (open/close menus, loaders, intros, etc.)

## 🧩 Complete Example

```js
const menuIcon = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');

let tl1 = gsap.timeline();

tl1.to('.menuSlide', { right: 0, duration: 0.5 })
   .from('.menuSlide p', { x: 150, duration: 0.7, stagger: 0.28, opacity: 0 })
   .from('.menuSlide i', { opacity: 0 })
   .pause();

menuIcon.addEventListener('click', () => {
  menuIcon.style.opacity = 0;
  tl1.timeScale(1).play();
});

closeIcon.addEventListener('click', () => {
  menuIcon.style.opacity = 1;
  tl1.timeScale(2).reverse();
});
```

## 🧭 Mind Map Summary

```pgsql
Timeline → Add animations → Pause initially → Play/Reverse on events
     ↓             ↓                 ↓               ↓
   .to()        .from()         .pause()         .play()/.reverse()
```