let menuBtn = document.querySelector('#mobile-menu-button');
let mobileMenu = document.querySelector(".mobile-menu-container");
mobileMenu.classList.add('hide');
menuBtn.checked = true;

menuBtn.addEventListener('change', (e) => {
    if (e.target.checked) {
        mobileMenu.classList.add('hide');
        
    } else {
        mobileMenu.classList.remove('hide');
    }
    
})

