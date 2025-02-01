// Validation Function
function validateForm(user) {
    var isValid = true;
    // Fullname validation
    if (!user.fullname || !/^[a-zA-Z\s]+$/.test(user.fullname)) {
        document.getElementById('fullnameError').textContent = 'Enter valid fullname...!';
        document.getElementById('fullnameError').style.display = 'block';
        isValid = false;
    }
    else {
        document.getElementById('fullnameError').style.display = 'none';
    }
    // Mobile number validation
    if (!user.mnumber || !/^\d{10}$/.test(user.mnumber)) {
        document.getElementById('mnumberError').textContent = 'Enter valid mobile number...!';
        document.getElementById('mnumberError').style.display = 'block';
        isValid = false;
    }
    else {
        document.getElementById('mnumberError').style.display = 'none';
    }
    // Address validation
    if (!user.address) {
        document.getElementById('addressError').textContent = 'Address cannot be empty...!';
        document.getElementById('addressError').style.display = 'block';
        isValid = false;
    }
    else {
        document.getElementById('addressError').style.display = 'none';
    }
    // Email validation
    if (!user.email || !/^\S+@\S+\.\S+$/.test(user.email)) {
        document.getElementById('emailError').textContent = 'Enter valid email id...!';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    else {
        document.getElementById('emailError').style.display = 'none';
    }
    // Password validation
    if (!user.password || user.password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password should be at least more than 6 characters...!';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }
    else {
        document.getElementById('passwordError').style.display = 'none';
    }
    return isValid;
}
// Form Event Listener
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var user = {
        fullname: document.getElementById('fullname').value,
        mnumber: document.getElementById('mnumber').value,
        address: document.getElementById('address').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    if (validateForm(user)) {
        // Form is valid, submit it
        alert('Form submitted successfully!');
        // You can add code here to send form data to the server
    }
});
