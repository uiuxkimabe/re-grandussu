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
class HighlightPrice {
  constructor(notPrice, priceWd, priceWe) {
    this.unPrice = notPrice;
    this.priceWeekDay = priceWd;
    this.priceWeekEnd = priceWe
  }
}

const notPrice = document.querySelectorAll('.not__price')
let [standardPrice, deluxePrice, suitePrice] = notPrice

// Cluster Type
// Standard
const stdType = new HighlightPrice(800000);
stdType.unPrice = 800000
let stdTypeUnPrice = stdType.unPrice;
standardPrice.innerHTML = stdTypeUnPrice.toLocaleString("id-ID")

// Deluxe
const dlxType = new HighlightPrice(950000);
dlxType.unPrice = 950000
let dlxTypeUnPrice = dlxType.unPrice;
deluxePrice.innerHTML = dlxTypeUnPrice.toLocaleString("id-ID")

// Junior Suite Price
const suitesType = new HighlightPrice(1050000);
suitesType.unPrice = 1050000
let suitesTypeUnPrice = suitesType.unPrice;
suitePrice.innerHTML = suitesTypeUnPrice.toLocaleString("id-ID")