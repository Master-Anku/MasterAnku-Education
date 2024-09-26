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
      alert('Message sent successfully! Your data has been saved locally. Thanks for your comments.');

      // Optionally reset the form (this can be commented out if you want to keep the form filled)
      this.reset();
  }
});

// Event listener to load the form data from local storage when the page is loaded
window.addEventListener('load', loadFromLocalStorage);

//* Footer End //

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