function mobileNavbarResponsive() {
    var chocNavLinks = document.getElementById('chocolateMuseumLinks')
    if (chocNavLinks.style.display === 'block') {
        chocNavLinks.style.display = 'none'
    } else {
        chocNavLinks.style.display = 'block'
    }
}