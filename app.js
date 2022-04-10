const myImg = document.querySelector('.slider_show');

const images = ["imgs/01.jpg", "imgs/02.png", "imgs/03.jpg", "imgs/04.jpg"];
let i = 0;

const sliderShow = () => {
    myImg.setAttribute('src', images[i]);

    if(i >= images.length -1) {
        i = 0;
    } else {
        i++
    }

    setTimeout(() => {
        sliderShow()
    }, 2000);
}

sliderShow();