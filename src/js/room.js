// Room Type
// StdRoom
const stdRoomType = document.querySelectorAll('.room__detail .scroll__preview')
const mainPreview = document.querySelector('.main__preview')
mainPreview.style.background = 'blue'

class RoomDetail {
    constructor(roomName,type,roomPrice) {
        this.roomName = roomName;
        this.type = type;
        this.roomPrice = roomPrice;
    }
    roomChange(chgName,chgType,chgPrice,i) {
        chgName[i].innerHtml = this.roomName
        chgType[i].innerHtml = this.type
        chgPrice[i].innerHtml = this.roomPrice
    }
}



