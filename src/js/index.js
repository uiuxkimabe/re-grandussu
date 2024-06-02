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

const notPrice = document.querySelectorAll('.not__price')
const roomPrice = document.querySelectorAll('.room__price')
const loka = document.querySelectorAll('.loka')
const tiket = document.querySelectorAll('.tiket')
const agoda = document.querySelectorAll('.agoda')

class AllPrice {
  realPrice;
  lokaPrice;
  tiketPrice;
  agodaPrice;
  averageNotPrice(e,i) {
    let averageSummary = Math.round((this.lokaPrice + this.tiketPrice + this.agodaPrice) / 3)
    e[i].innerHTML = averageSummary.toLocaleString('id-ID')
    return averageSummary
  }
  otaPrice(loka, tiket, agoda, i, type) {
    // Parameter isi dgn (loka, tiket, agoda, i, type) type == i
    if (type == i) {
      loka[i].innerHTML = this.lokaPrice.toLocaleString('id-ID')
      tiket[i].innerHTML = this.tiketPrice.toLocaleString('id-ID')
      agoda[i].innerHTML = this.agodaPrice.toLocaleString('id-ID')
    } else if (type == i) {
      loka[i].innerHTML = this.lokaPrice.toLocaleString('id-ID')
      tiket[i].innerHTML = this.tiketPrice.toLocaleString('id-ID')
      agoda[i].innerHTML = this.agodaPrice.toLocaleString('id-ID')
    } else {
      loka[i].innerHTML = this.lokaPrice.toLocaleString('id-ID')
      tiket[i].innerHTML = this.tiketPrice.toLocaleString('id-ID')
      agoda[i].innerHTML = this.agodaPrice.toLocaleString('id-ID')
    }
  }
  sellPrice(i) {
    return roomPrice[i].innerHTML = this.realPrice.toLocaleString('id-ID')
  }
}

// Standard Room
const stdRoom = new AllPrice()
stdRoom.realPrice = 699000 // Isi Harga Jual
stdRoom.lokaPrice = 750000 // Isi Harga di Traveloka
stdRoom.tiketPrice = 735000 // Isi Harga di Tiket
stdRoom.agodaPrice = 782000 //Isi Harga di Agoda
stdRoom.averageNotPrice(notPrice, 0) // 0 standard, 1 deluxe, 2 suite
stdRoom.otaPrice(loka, tiket, agoda, 0, 0)
stdRoom.sellPrice(0)

// Deluxe Room
const dlxRoom = new AllPrice()
dlxRoom.realPrice = 820000 // Isi Harga Jual
dlxRoom.lokaPrice = 1050000 // Isi Harga di Traveloka
dlxRoom.tiketPrice = 1150000 // Isi Harga di Tiket
dlxRoom.agodaPrice = 1250000 //Isi Harga di Agoda
dlxRoom.averageNotPrice(notPrice, 1) // 0 standard, 1 deluxe, 2 suite
dlxRoom.otaPrice(loka, tiket, agoda, 1, 1)
dlxRoom.sellPrice(1)

// Suite Room
const suiteRoom = new AllPrice()
suiteRoom.realPrice = 1000000 // Isi Harga Jual
suiteRoom.lokaPrice = 1150000 // Isi Harga di Traveloka
suiteRoom.tiketPrice = 1100000 // Isi Harga di Tiket
suiteRoom.agodaPrice = 1240000 //Isi Harga di Agoda
suiteRoom.averageNotPrice(notPrice, 2) // 0 standard, 1 deluxe, 2 suite
suiteRoom.otaPrice(loka, tiket, agoda, 2, 2)
suiteRoom.sellPrice(2)