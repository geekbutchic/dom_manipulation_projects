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

// Closes Modal using ESC key
// document.addEventListener("keydown", event => {
//   if (event.key === "Escape") {
//     if (!modal.classList.contains("hidden")) {
//       closeModal();
//     }
//   }
// });

// More concise code 
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
