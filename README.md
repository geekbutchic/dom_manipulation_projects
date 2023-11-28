# Dom Manipulation - Modal Design

### Js Code prior to refactoring

```
"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", () => {
    console.log(btnsOpenModal[i].textContent);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
```

### Refactored Version

```
"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Open Modal Function
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Close Modal Function
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Add event listener to the document (or a suitable parent element)
document.addEventListener("click", event => {
  if (event.target.classList.contains("show-modal")) {
    openModal();
  } else if (event.target === btnCloseModal || event.target === overlay) {
    closeModal();
  }
});
```

- Now, regarding the four loop, it's generally not necessary to use a loop to add event listeners to multiple elements when you can achieve the same functionality using event delegation. Event delegation involves adding a single event listener to a parent element that listens for events on its child elements.
- Event delegation is a design pattern in JavaScript where you attach a single event listener to a parent element (like the document or any other suitable parent) to listen for events on its child elements. When an event occurs on a child element, it bubbles up to the parent element, and the parent's event listener is triggered. This approach is particularly useful when you have a large number of elements to which you want to attach the same type of event listener.

## Adds ESC modal function 
* Removes modal when esc is pressed. Before refactored version.

```
// Closes Modal using ESC key
// document.addEventListener("keydown", event => {
//   if (event.key === "Escape") {
//     if (!modal.classList.contains("hidden")) {
//       closeModal();
//     }
//   }
// });
```
