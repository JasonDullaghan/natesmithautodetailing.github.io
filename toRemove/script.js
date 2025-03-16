// JS to make the navbar responsive


// document.addEventListener("DOMContentLoaded", function () {
//   const toggleButton = document.querySelector(".toggle");
//   const navLinks = document.querySelector(".nav-links");

//   if (!toggleButton || !navLinks) {
//       console.error("Toggle button or nav-links not found!");
//       return;
//   }

//   toggleButton.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//       toggleButton.classList.toggle("active");
//   });

//   // Close menu when a link is clicked
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", () => {
//           navLinks.classList.remove("active");
//           toggleButton.classList.remove("active");
//       });
//   });
// });