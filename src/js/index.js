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

// Harga Yang Di Coret
const notPrice = document.querySelectorAll('.not__price')
let [standardNotPrice, deluxeNotPrice, suiteNotPrice] = notPrice

// Cluster Type for Not Price
// Standard
const stdType = new HighlightPrice(750000);
stdType.unPrice = 750000
let stdTypeUnPrice = stdType.unPrice;
standardNotPrice.innerHTML = stdTypeUnPrice.toLocaleString("id-ID")

// Deluxe
const dlxType = new HighlightPrice(1150000);
dlxType.unPrice = 1150000
let dlxTypeUnPrice = dlxType.unPrice;
deluxeNotPrice.innerHTML = dlxTypeUnPrice.toLocaleString("id-ID")

// Junior Suite Price
const suitesType = new HighlightPrice(1250000);
suitesType.unPrice = 1250000
let suitesTypeUnPrice = suitesType.unPrice;
suiteNotPrice.innerHTML = suitesTypeUnPrice.toLocaleString("id-ID")

// Ending Cluster Type for Not Price

// Harga Jual (Harga Sebenarnya)
const salePrice = document.querySelectorAll('.room__price')
let [stdRoomPrice, dlxRoomPrice, suiteRoomPrice] = salePrice

// Sale Per CLuster
// Sale Price STD
const roomStdWd = new HighlightPrice(699000);
roomStdWd.priceWeekDay = 699000;
let roomStdWdShow = roomStdWd.priceWeekDay;
stdRoomPrice.innerHTML = roomStdWdShow.toLocaleString("ID-id")

// Sale Price DLX
const roomDlxWd = new HighlightPrice(949000);
roomDlxWd.priceWeekDay = 949000;
let roomDlxWdShow = roomDlxWd.priceWeekDay;
dlxRoomPrice.innerHTML = roomDlxWdShow.toLocaleString("ID-id")

// Sale Price DLX
const roomSuiteWd = new HighlightPrice(1029000);
roomSuiteWd.priceWeekDay = 1029000;
let roomSuiteWdShow = roomSuiteWd.priceWeekDay;
suiteRoomPrice.innerHTML = roomSuiteWdShow.toLocaleString("ID-id")

// Compare OTA
const loka = document.querySelectorAll('.loka')
const tiket = document.querySelectorAll('.tiket')
const agoda = document.querySelectorAll('.agoda')
let [lokaStd,lokaDlx,lokaSuite] = loka
let [tiketStd,tiketDlx,tiketSuite] = tiket
let [agodaStd, agodaDlx, agodaSuite] = agoda

// Compare 
const stdOta = new HighlightPrice(750000, 1150000, 1250000)
stdOta.unPrice = 750000
stdOta.priceWeekDay = 1150000
stdOta.priceWeekEnd = 1250000