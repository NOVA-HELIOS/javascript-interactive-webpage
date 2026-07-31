// ===============================
// Dropdown Menu
// ===============================

const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");

dropdownBtn.addEventListener("click", function () {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});

// Close dropdown when clicking outside
window.addEventListener("click", function (event) {
    if (!event.target.matches("#dropdownBtn")) {
        dropdownContent.style.display = "none";
    }
});


// ===============================
// Modal Popup
// ===============================

const modal = document.getElementById("myModal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", function () {
    modal.style.display = "block";
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


// ===============================
// Form Validation
// ===============================

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get Input Values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Error Elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Name Validation
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Password Validation
    if (password.length < 6) {
        passwordError.textContent =
            "Password must be at least 6 characters.";
        isValid = false;
    }

    // Success
    if (isValid) {

        alert("🎉 Form Submitted Successfully!");

        form.reset();
    }

});
