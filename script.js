// function for carousel slide for every sections
function multiCarouselItems(selector) {
    let items = document.querySelectorAll(selector);
    console.log(items)
    items.forEach((el) => {
        const minPerSlide = 6
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
}

// func for zooming cards on click
function zoomCards() {
    let allItems = document.querySelectorAll(".carousel .carousel-item .card");
    for (let item of allItems) {
        item.addEventListener("mouseenter", (event) => {
            event.target.getElementsByTagName("div")[1].classList.add("zoom-item");
        })

    }
    for (let item of allItems) {
        item.addEventListener("mouseleave", (event) => {
            event.target.getElementsByTagName("div")[1].classList.remove("zoom-item");
        })

    }
}
// func to change Categories of navbar to section
function changeCategories() {
    let navLinks = document.querySelectorAll("a.nav-link");
    let sectionName = document.querySelector("section h2.categorie");
    console.log(sectionName)
    console.log(navLinks)
    for (let navLink of navLinks) {
        navLink.addEventListener("click", (event) => {
            let navLinkName = event.target.textContent;
            sectionName.textContent = navLinkName;
            event.target.classList.add("activeNav");
        })
    }
}

// at contents of DOM loaded start every functions
window.addEventListener("load", () => {
    multiCarouselItems(".carousel.first-section .carousel-item");
    multiCarouselItems(".carousel.second-section .carousel-item");
    multiCarouselItems(".carousel.third-section .carousel-item")
    zoomCards();
    changeCategories()
});

// at scroll a section compare
window.addEventListener("scroll", (event) => {
    let thirdSec = document.getElementById("third-sec");
    let sectionOffset = thirdSec.offsetHeight;
    if (window.innerWidth > 768 && window.scrollY >= sectionOffset) {
        thirdSec.classList.add("scroll-open");
        thirdSec.offsetWidth;
    }
    else if (window.innerWidth > 768 && window.scrollY < sectionOffset) {
        thirdSec.classList.remove("scroll-open")
        thirdSec.classList.add("scroll-close");
        thirdSec.offsetWidth;
    }
    else if (window.innerWidth < 768 && window.scrollY >= sectionOffset) {
        thirdSec.classList.add("scroll-open");
        thirdSec.offsetWidth;
    }
    else if (window.innerWidth < 768 && window.scrollY < sectionOffset) {
        thirdSec.classList.remove("scroll-open")
        thirdSec.classList.add("scroll-close");
        thirdSec.offsetWidth;
    }
})