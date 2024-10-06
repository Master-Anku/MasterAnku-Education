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
  
  /* ================= Mobile Menubar end =================== */
  

  //**  Get the login button element start  **
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

document.getElementById("login").addEventListener("submit", function(event) {
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
    document.getElementById("message").innerText = "Login successful!";
    alert("Login successful!")

    // Clear the form after submission
    document.getElementById("login").reset();

    // Hide the modal
    document.getElementById("login_id").style.display = "none";
});
  
// ============= Login Form end ============================


// ** footer start** 

document.getElementById('submit').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get form values
  const urname = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  var Form = document.getElementById("contactForm");

  // Create a user object to store form data
  var user = {
      Name: urname,
      Email: email,
      Message: message
  };

  // Store the user object in localStorage
  localStorage.setItem("user", JSON.stringify(user));

  // Reset the form fields
  Form.reset();

});
 
//======================== Footer End =================//

// ** search bar ** ==
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
  const regex = new RegExp(`(${term})`, 'gi');  //g for Global search \ i for Case-insensitive စာကို အကြီးအသေးမခွဲဘဲ အကုန်ရှာပေးတာ  Regular expression
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

// ===========Search bar end =============