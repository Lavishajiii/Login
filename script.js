document.getElementById('basicDetailsForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.getElementById('gender').value.trim();

    // Validation flags
    let valid = true;

    // Validate Name
    if (name === "") {
        valid = false;
        document.getElementById('nameError').style.display = 'block';
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Validate Email
    if (email === "" || !validateEmail(email)) {
        valid = false;
        document.getElementById('emailError').style.display = 'block';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Validate Gender
    if (gender === "") {
        valid = false;
        document.getElementById('genderError').style.display = 'block';
    } else {
        document.getElementById('genderError').style.display = 'none';
    }

    if (valid) {
        alert('Form submitted successfully!');
        // Optionally, you can add code here to submit the form data to the server
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
