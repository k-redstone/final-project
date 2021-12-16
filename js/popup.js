var win
const popupWidth = 900
const popupHeight = 500
const popupX = (window.screen.width/2)- (popupWidth/2)
const popupY = (window.screen.height/2)- (popupHeight/2)
const popup = 'top='+ popupY +', left='+ popupX +', width='+ popupWidth +', height='+ popupHeight +', status=no, menubar=no, toolbar=no, resizable=no'

// let getIdValue = () => {
//   let id = document.getElementsByClassName("review-id")[1].innerHTML
//   document.getElementById("getID").innerHTML = id; 
// }

function openpopup(el) {
  if(win != null){
    win.close()
  }
  console.log(el)
  win = window.open("../html/popup.html", '_blank', popup)
  win.focus()
}
function openpopup2() {
  if(win != null){
    win.close()
  }
  win = window.open("../html/popup.html", '_blank', popup)
  win.focus()
}

let id = document.getElementsByClassName("review-id")[1].innerHTML