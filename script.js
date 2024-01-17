let itemsFirstSection = document.querySelectorAll('.carousel.first-section .carousel-item')
console.log(itemsFirstSection)
itemsFirstSection.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = itemsFirstSection[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let itemsSecondSection = document.querySelectorAll('.carousel.second-section .carousel-item')
console.log(itemsSecondSection)
itemsSecondSection.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = itemsSecondSection[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let itemsThirdSection = document.querySelectorAll('.carousel.third-section .carousel-item')
console.log(itemsThirdSection)
itemsThirdSection.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = itemsThirdSection[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let allItems = document.querySelectorAll(".carousel .carousel-item .card");
// console.log(allItems);
for (let item of allItems) {
    item.addEventListener("mouseenter", (event) => {
        event.target.classList.add("zoom-item")
    })

}
for (let item of allItems) {
    item.addEventListener("mouseleave", (event) => {
        event.target.classList.remove("zoom-item")
    })

}