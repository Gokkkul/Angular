// User Interface
interface User {
    fullname: string,
    mnumber: string,
    address: string,
    email: string,
    password: string
}

// Validation Function
function validateForm(user: User): boolean {
    let isValid = true;

    // Fullname validation
    if (!user.fullname || !/^[a-zA-Z\s]+$/.test(user.fullname)) {
        document.getElementById('fullnameError').textContent = 'Enter valid fullname...!';
        document.getElementById('fullnameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('fullnameError').style.display = 'none';
    }

    // Mobile number validation
    if (!user.mnumber || !/^\d{10}$/.test(user.mnumber)) {
        document.getElementById('mnumberError').textContent = 'Enter valid mobile number...!';
        document.getElementById('mnumberError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('mnumberError').style.display = 'none';
    }

    // Address validation
    if (!user.address) {
        document.getElementById('addressError').textContent = 'Address cannot be empty...!';
        document.getElementById('addressError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('addressError').style.display = 'none';
    }

    // Email validation
    if (!user.email || !/^\S+@\S+\.\S+$/.test(user.email)) {
        document.getElementById('emailError').textContent = 'Enter valid email id...!';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Password validation
    if (!user.password || user.password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password should be at least more than 6 characters...!';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    return isValid;
}

// Form Event Listener
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const user: User = {
        fullname: (document.getElementById('fullname') as HTMLInputElement).value,
        mnumber: (document.getElementById('mnumber') as HTMLInputElement).value,
        address: (document.getElementById('address') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        password: (document.getElementById('password') as HTMLInputElement).value
    };

    if (validateForm(user)) {
        // Form is valid, submit it
        alert('Form submitted successfully!');
        this.classList
        // You can add code here to send form data to the server
    }
});
