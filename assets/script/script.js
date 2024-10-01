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
  
  // Get the login button element
const loginButton = document.getElementById('loginBtn');

// Get the login button and modal elements
const login_Button = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close');


// Get the modal
var modal = document.getElementById('login_id');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } }

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    // Get the values from the form fields
    var username = document.querySelector('input[name="uname"]').value;
    var gmail = document.querySelector('input[name="gmail"]').value;
    var password = document.querySelector('input[name="psw"]').value;

    // Save them to local storage
    localStorage.setItem("username", username);
    localStorage.setItem("gmail", gmail);
    localStorage.setItem("password", password);

    // Display success message
    document.getElementById("login-message").innerText = "Login successful!";

    // Clear the form after submission
    document.getElementById("login-form").reset();

    // Hide the modal
    document.getElementById("login_id").style.display = "none";
});
  
setTimeout(function() {
  document.getElementById("login-message").innerText = "";
}, 2000); // Clears the message after 2 seconds




// == 
  // $(document).ready(function() {
  //   // Get the width of the product card, including margin
  //   const cardWidth = $('.product-card').outerWidth(true); // Includes margin
  
  //   // Event listener for the right arrow
  //   $('#right-arrow').on('click', function() {
  //     // Animate scrolling to the right by one card's width
  //     $('#product-feed').animate({
  //       scrollLeft: $('#product-feed').scrollLeft() + cardWidth
  //     }, 500); // 500ms for smooth scroll
  //   });
  
  //   // Event listener for the left arrow
  //   $('#left-arrow').on('click', function() {
  //     // Animate scrolling to the left by one card's width
  //     $('#product-feed').animate({
  //       scrollLeft: $('#product-feed').scrollLeft() - cardWidth
  //     }, 500); // 500ms for smooth scroll
  //   });
  
  //   // Scroll snapping ensures cards align perfectly when scrolled
  //   $('#product-feed').on('scroll', function() {
  //     let currentScroll = $(this).scrollLeft();
  //     let remainder = currentScroll % cardWidth;
  //     // Snap to the nearest card position
  //     if (remainder !== 0) {
  //       $(this).animate({
  //         scrollLeft: currentScroll - remainder + (remainder > cardWidth / 2 ? cardWidth : 0)
  //       }, 300); // Snap animation
  //     }
  //   });
  // });
  


  /** Footer Start
 * Saves form data (name, email, message) to local storage.
 * @param {string} name - User's name from the form.
 * @param {string} email - User's email from the form.
 * @param {string} message - User's message from the form.
 */
function saveToLocalStorage(name, email, message) {
  // Create an object to store form data
  const formData = {
      name: name,
      email: email,
      message: message
  };
  // Store the data in local storage as a JSON string
  localStorage.setItem('contactFormData', JSON.stringify(formData));
}

/**
* Loads saved form data from local storage (if any) and populates the form fields.
*/
function loadFromLocalStorage() {
  // Retrieve the stored data from local storage
  const storedData = localStorage.getItem('contactFormData');
  // If data exists, parse it and populate the form fields
  if (storedData) {
      const formData = JSON.parse(storedData);
      document.getElementById('name').value = formData.name;
      document.getElementById('email').value = formData.email;
      document.getElementById('message').value = formData.message;
  }
}

// Event listener for the form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic form validation to check if all fields are filled
  if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
  } else {
      // Save the form data to local storage
      saveToLocalStorage(name, email, message);

      // Feedback to user on successful submission
      alert('Message sent successfully! Your data has been saved locally.');

      // Optionally reset the form (this can be commented out if you want to keep the form filled)
      this.reset();
  }
});

// Event listener to load the form data from local storage when the page is loaded
window.addEventListener('load', loadFromLocalStorage);

//* Footer End //




// search bar
document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const sections = document.querySelectorAll('.card, .product-card, .video-card');

  sections.forEach(section => {
      const sectionText = section.textContent.toLowerCase();
      if (sectionText.includes(searchTerm)) {
          section.style.display = 'block';
      } else {
          section.style.display = 'none';
      }
  });
  document.getElementById('search-input').value = '';
});

function highlightText(text, term) {
  const regex = new RegExp(`(${term})`, 'gi');  //g for Global search \ i for Case-insensitive စာကို အကြီးအသေးမခွဲဘဲ အကုန်ရှာပေးတာ 
  return text.replace(regex, '<mark>$1</mark>');
}

// Update display logic to highlight matching text
sections.forEach(section => {
  const sectionText = section.innerHTML;
  if (sectionText.toLowerCase().includes(searchTerm)) {
      section.innerHTML = highlightText(sectionText, searchTerm);
      section.style.display = 'block';
  } else {
      section.style.display = 'none';
  }
});
