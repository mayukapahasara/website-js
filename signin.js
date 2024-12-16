const loginButton = document.querySelector('.Submit_Btn');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Login Event Listener
loginButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    const email = emailInput?.value.trim();
    const password = passwordInput?.value.trim();

    if (!email || !isValidEmail(email)) {
        return showAlert('Enter a valid email address');
    }

    if (!password || password.length < 8) {
        return showAlert('Password must be at least 8 characters long');
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        alert(`Login successful! Welcome, ${validUser.name}!`);
        window.location.href = 'index.html';
        showAlert('Invalid email or password. Please try again.');
    }
});

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Alert Function (shared)
const showAlert = (msg) => {
    const alertBox = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert-msg');

    if (alertBox && alertMsg) {
        alertMsg.textContent = msg;
        alertBox.style.display = 'block';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 3000);
    } else {
        console.error('Alert elements are missing in the HTML');
    }
};
