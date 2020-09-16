function mobileNavbarResponsive() {
    var chocNavLinks = document.getElementById('chocolateMuseumLinks')
    if (chocNavLinks.style.display === 'block') {
        chocNavLinks.style.display = 'none'
    } else {
        chocNavLinks.style.display = 'block'
    }
}

// Navbar color change 

const header = document.querySelector('.chocolate-museum')

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('header-active')
    } else {
        header.classList.remove('header-active')
    }
}