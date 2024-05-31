// HamBtn
const hamBtn = document.querySelector(".hamBtn span");
const navbar = document.querySelector(".navbar");
hamBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
});


// scroll animate 
const bannerImg = document.querySelector('#jumbotron .banner img')
const msgSpacing = document.querySelector('#jumbotron .banner .banner__msg h2')
let count = 0;
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    bannerImg.classList.add('scrollAnimate')
    msgSpacing.style.letterSpacing = `${count++}px`
    msgSpacing.style.opacity = `0`
  } else {
    bannerImg.classList.remove('scrollAnimate')
    msgSpacing.style.letterSpacing = `0`;
    msgSpacing.style.opacity = '1'
  }
})


// compare room
const compareBtn = document.querySelector('.compareActive')
const ota = document.querySelectorAll('.ota')
compareBtn.addEventListener('click', () => {
  ota.forEach(element => {
    element.classList.toggle('showCompare')
  });
})

// Auto Year Footer
const date = new Date()
const authorYear = document.querySelector('.author .year')
authorYear.innerHTML = date.getFullYear(); //tahun otomatis berubah

// Price List
// Unprice adalah harga yang di coret berasal dari harga rata -rata


const loka = document.querySelectorAll('.loka')
console.info(loka)