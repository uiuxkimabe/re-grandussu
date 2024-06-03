// // HamBtn
const hamBtn = document.querySelector(".hamBtn span");
const navbar = document.querySelector(".navbar");
hamBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
});