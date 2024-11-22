const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Optional: You can add more JavaScript logic here to handle user type selection if you need specific behavior for 'student' or 'faculty'
// JavaScript to remove pre-loader after 5 seconds
window.addEventListener('load', () => {
  setTimeout(() => {
      // Select pre-loader and fade it out after 5 seconds
      const preLoader = document.querySelector('.pre-loader');
      preLoader.style.opacity = 0; // Fade it out
      setTimeout(() => {
          preLoader.style.display = 'none'; // Remove the element after the fade-out
      }, 1000); // Wait 1 second for the fade-out effect to complete
  }, 1200); // Wait for 5 seconds before hiding the pre-loader
});

///////////////////////////////////////////////////////////////////////////////////////////////////
signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission
  
  // Collect data from the form
  const formData = new FormData(signUpForm);
  const data = Object.fromEntries(formData.entries());

  // Send data to the server
  const response = await fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  
  const result = await response.json();
  alert(result.message); // Display the server response
});

// Example of adding interactivity (optional)
document.querySelector('.contact-btn').addEventListener('click', () => {
  alert('Contact us clicked!');
});



///////////////////////////////////////////////////////////////////////////////
const loginForm = document.querySelector('.sign-in-form');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Collect data from the form
  const formData = new FormData(loginForm);
  const data = Object.fromEntries(formData.entries());
  
  // Send data to the server
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  
  const result = await response.json();
  if (response.status === 200) {
    alert(result.message); // Show success message
    // You can redirect the user or store user data here if needed
  } else {
    alert(result.message); // Show error message
  }
});

