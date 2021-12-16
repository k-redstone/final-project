
// 슬라이드
function winterSlide () {
    let MOVEING_PX = 4,
        slide = document.querySelector(".draw"),
        slideCnt = slide.getElementsByClassName("cnt"),
        slideCntItem = slideCnt[0].getElementsByTagName("li"),
        prevBtn = slide.getElementsByClassName("prev"),
        nextBtn = slide.getElementsByClassName("next"),
        before = 0,
        after = 0,
        moveIng = false;

    // init
    slideCntItem[0].style.left = 0;


    // initEvnet
    nextBtn[0].addEventListener("click", function (e) {
        if (!moveIng) {
            after++;
            if (after >= slideCntItem.length) {
                after = 0;
            }
            move(after, before, "next");
            before = after;
        }
    });

    prevBtn[0].addEventListener("click", function (e) {
        if (!moveIng) {
            after--;
            if (after < 0) {
                after = slideCntItem.length - 1;
            }
            move(after, before);
            before = after;
        }
    });

    function move(after, before, type) {
        let nextX = type === "next" ? slide.offsetWidth : slide.offsetWidth * -1,
            prevX = 0,
            set = null;
        
        set = setInterval(function () {
            moveIng = true;
            if (type === "next") {
                nextX -= MOVEING_PX;
                slideCntItem[after].style.left = nextX + "px";
                if (nextX <= 0) {
                    clearInterval(set);
                    nextX = slide.offsetWidth;
                    moveIng = false;
                }
                prevX -= MOVEING_PX;
            } else {
                nextX += MOVEING_PX;
                slideCntItem[after].style.left = nextX + "px";
                if (nextX >= 0) {
                    clearInterval(set);
                    nextX = slide.offsetWidth * -1;
                    moveIng = false;
                }
                prevX += MOVEING_PX;
            }
            slideCntItem[before].style.left = prevX + "px";
        });
    }
}

// 리스트 버튼
function listToggle () {
    const frame = document.querySelector("#frame");
    const btn = document.querySelector(".all");
    const draw = document.querySelector(".draw");
    const pic = draw.querySelectorAll("img");
    const list = document.querySelector(".list");

    btn.addEventListener("click", function () {
        btn.classList.toggle("active");
        draw.classList.toggle("active");
        list.classList.toggle("active");
        
        if (btn.classList.contains("active")) {
            btn.innerText ='BEFORE';
        } else {
            btn.innerText ='ALL';
        }
    });
    
    pic.forEach((elm) => {
        elm.addEventListener("mouseenter", function () {
            frame.classList.add("active");
        });
        elm.addEventListener("mouseleave", function () {
            frame.classList.remove("active");
        });
    });
}

window.addEventListener("load", function () {
    winterSlide();
    listToggle();
});