const slider = document.querySelectorAll(".slide");
// console.log(slider);
let connter = 0;

const sliceClassLoop = (slide, index)=>{
    slide.style.left = `${index * 100}%`;
}
slider.forEach(sliceClassLoop);
    const goPrev = ()=>{
        connter++;
        slideImage();
    }
    const goNext = ()=>{
        connter--;
        slideImage();
    }

const slideImage = () =>{
    slider.forEach( (slide) =>{
        slide.style.transform = `translateX( ${connter * 100}%)`;
    } )
}

