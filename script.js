"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal"); // returns a node list

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("Button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

//---------------------------------------------
// OPEN FUNCTION
// const openModal = function () {
//   console.log("Button clicked");
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   console.log("Button clicked");
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };
// CLOSING FUNCTION
// --------------------------------------------

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].textContent);
// }

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', openModal);
// }

//------------------------------------------------
// OPENING FUNCTION
// btnsOpenModal.forEach((btn) => {
//   btn.addEventListener("click", openModal);
// });

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);
// CLOSING FUNCTION
// ---------------------------------------------

// Keyboard events
// global event listener
// keydown event is fired as soon as we press the key
// keyup event is fired as soon as we release the key

// addEventListener('keydown', function (e) {
//   console.log('A key was pressed');
//   console.log(e);
//   console.log(e.key);
// });

// addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   if (e.key === 'Escape') {
//     console.log('Escape was pressed');
//     if (!modal.classList.contains('hidden')) {
//       closeModal();
//     }
//   }
// });

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   if (e.key === 'Escape') {
//     closeModal();
//   }
// });

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   if (e.key === 'Escape') {
//     if (!modal.classList.contains('hidden')) {
//       closeModal();
//     }
//   }
// });

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   if (e.key === 'Escape'
