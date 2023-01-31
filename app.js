const carouselContainer = document.getElementById('carousel-container')
const carouselItems = [...document.querySelectorAll('.carousel-item')]
const nextBtn = document.getElementById('carousel-btn-next')
const prevBtn = document.getElementById('carousel-btn-prev')
let carouselOnShow = carouselItems.filter(item => item.hasAttribute("show"))
let caouselHide = carouselItems.filter(item => !item.hasAttribute("show"))

console.log(caouselHide)
console.log(carouselOnShow)

// console.log(caouselHide.pop())
function prevSlide() {
    const nextItem = caouselHide.pop()
    const hideItem = carouselOnShow.shift()
    hideItem.removeAttribute('data-show')
    hideItem.removeAttribute('show')
    caouselHide.unshift(hideItem)
    carouselOnShow.push(nextItem)
    carouselOnShow.forEach((item,i) => {
        item.setAttribute("show",'')
        item.setAttribute("data-show",`${i + 1}`)
    })
    
}

function nextSlide() {
    const nextItem = caouselHide.shift()
    const hideItem = carouselOnShow.pop()
    hideItem.removeAttribute('data-show')
    hideItem.removeAttribute('show')
    caouselHide.push(hideItem)
    carouselOnShow.unshift(nextItem)
    carouselOnShow.forEach((item,i) => {
        item.setAttribute("show",'')
        item.setAttribute("data-show",`${i + 1}`)
    })
    
}
prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)


const swipeCarousel = () =>{
    const itemWrapper = document.querySelector('.item-wrapper')
    let swipeStartX, swipeEndX = 0

    itemWrapper.addEventListener('touchstart', (e) => {
        swipeStartX = e.changedTouches[0].clientX
    })
    itemWrapper.addEventListener('touchend', (e) => {
        swipeEndX = e.changedTouches[0].clientX
        swipeStartX > swipeEndX ? prevSlide() : nextSlide()
    })
}

swipeCarousel()