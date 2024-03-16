const toggleMenu = document.querySelector(".toggle-nav");
const menuBtn = document.querySelector(".menu-btn");
const closeToggleBtn  = document.querySelector(".close-toggle-btn");

/*Start Toggle menu*/
menuBtn.addEventListener("click" , () => {
    toggleMenu.classList.toggle("none");
})

closeToggleBtn.addEventListener("click" , () => {
    toggleMenu.classList.toggle("none");
})

/* End Toggle menu*/