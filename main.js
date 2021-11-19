const summerMove1 = document.getElementById("summerArtist-1")
const summerMove2 = document.getElementById("summerDes-1")
const summerMove3 = document.getElementById("summerArtist-2")
const summerMove4 = document.getElementById("summerDes-2")
const summerMove5 = document.getElementById("summerArtist-3")
const summerMove6 = document.getElementById("summerDes-3")


window.onload = function() {
  document.body.className += " loaded";
  summerMove1.classList.add('active')
  summerMove2.classList.add('active')
  summerMove3.classList.add('active')
  summerMove4.classList.add('active')
}
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 200) {
    summerMove5.style.opacity="1"
    summerMove5.style.left="50px"
    summerMove5.style.transition="left 2s, opacity 2s"
    summerMove6.style.opacity="1"
    summerMove6.style.left="50px"
    summerMove6.style.transition="left 2s, opacity 2s"
    // //배지 숨기기
    // // gsap.to(요소, 지속시간(s), 옵션(css속성 가능));
    // gsap.to(summerMove5, 1, {
    //   left: '50px',
    //   position: 'relative',
    //   opacity: 1,
    // }); 

  }}, 300));
// _.throttle(함수, 시간(단위ms))