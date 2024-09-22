//== Mobile Menubar start =>
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
  
    // Toggle the 'show' class
    // menu.classList.toggle("show");
    if (window.innerWidth <= 597) {
      menu.classList.toggle("show");
    
  
    // Check if the 'show' class is active and adjust the width
    if (menu.classList.contains("show")) {
      menu.style.width = "100vw"; // Full width when menu is open
    } else {
      menu.style.width = "auto"; // Auto or small width when menu is hidden
    }
  }
  }
  
  // Adding event listener to the menu button
  let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  mobileMenuBtn.addEventListener("click", toggleMenu);
  
  /*  Mobile Menubar end */