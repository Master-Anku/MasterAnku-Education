// Get elements
const form = document.getElementById('userForm');
const dataDisplay = document.getElementById('dataDisplay');

// Load saved data on page load
document.addEventListener('DOMContentLoaded', loadData);

// Form submit event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const role = document.getElementById('role').value;

  const user = { name, email, phone, role };
  
  saveData(user);
  form.reset();
  loadData();
});

// Save data to localStorage
function saveData(user) {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

// Load and display saved data
function loadData() {
  dataDisplay.innerHTML = '';  // Clear previous data
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  users.forEach((user, index) => {
    const entry = document.createElement('div');
    entry.classList.add('entry');
    entry.innerHTML = `
      <p>Name: ${user.name}</p>
      <p>Email: ${user.email}</p>
      <p>Phone: ${user.phone}</p>
      <p>Subject: 
  ${user.role === 'Grammar' ? 'Grammar' : 
    user.role === 'Vocabulary' ? 'Vocabulary' : 
    user.role === 'Listening' ? 'Listening' : 
    user.role === 'Reading' ? 'Reading' : 
    user.role === 'Writing' ? 'Writing' : user.role}
</p>
      <button class="edit" onclick="editData(${index})">Edit</button>
      <button class="remove" onclick="removeData(${index})">Remove</button>
    `;
    dataDisplay.appendChild(entry);
    // alert('You have completed successfully,')
  });

}

// Edit data
function editData(index) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users[index];

  document.getElementById('name').value = user.name;
  document.getElementById('email').value = user.email;
  document.getElementById('phone').value = user.phone;
  document.getElementById('role').value = user.role;

  removeData(index); // Remove data so we can save edited data
}

// Remove data from localStorage
function removeData(index) {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.splice(index, 1);
  localStorage.setItem('users', JSON.stringify(users));
  loadData(); // Reload data after removal
}


//   /* <p>Role: ${user.role === 'Teacher' ? 'Teacher' : 'Student'}</p>*/