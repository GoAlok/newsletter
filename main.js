const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const successEmail = document.getElementById('success-email');
const dismissButton = document.getElementById('dismiss-button');
const successMessage = document.getElementById('success-message');

const body_container = document.getElementById("container");

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();

    // Reset error messages
    emailError.textContent = '';

    // Email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        emailError.textContent = 'Email is required';
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address';
    } else {
        // Simulating form submission
        form.reset();
        body_container.style.display = "none";
        successEmail.textContent = emailValue;
        successMessage.style.display = 'flex';
    }
}

// Event listener for form submission
form.addEventListener("submit", handleSubmit);

// Function to handle window resize event
function handleWindowResize() {
    if (window.innerWidth >= 720 && successMessage.style.display !== 'flex') {
        body_container.style.display = "flex";
    } else if (successMessage.style.display !== 'flex') {
        body_container.style.display = "block";
    }
}



// Event listener for dismiss button click
dismissButton.addEventListener('click', function () {
    successMessage.style.display = 'none';
    handleWindowResize(); // Call the function to handle window resize
    form.reset(); // Reset the form
});

// Add event listener for window resize
window.addEventListener("resize", handleWindowResize);
