const loader = document.querySelector('.loader');
const submitBtn = document.querySelector('.Submit_Btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-end-cond');

// Show alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    
    if (alertBox && alertMsg) {
        alertMsg.innerHTML = msg;
        alertBox.classList.add('show');
        setTimeout(() => {
            alertBox.classList.remove('show');
        }, 3000);
    } else {
        console.error('Alert elements are missing in the HTML');
    }
};

// Submit button click event
submitBtn.addEventListener('click', () => {
    // Validation checks
    if (name.value.length < 3) {
        showAlert('Name must be at least 3 letters long');
    } else if (!email.value.length) {
        showAlert('Please enter a valid email');
    } else if (password.value.length < 8) {
        showAlert('Password should be at least 8 characters long');
    } else if (!number.value.length) {
        showAlert('Please enter your phone number');
    } else if (!Number(number.value) || number.value.length < 10) {
        showAlert('Please enter a valid phone number');
    } else if (!tac.checked) {
        showAlert('You must agree to our terms and conditions');
    } else {
        // Show loader during saving
        loader.style.display = 'block';

        // Store data in local storage
        storeDataLocally({
            name: name.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked
        });

        // Hide loader and show success message
        loader.style.display = 'none';
        showAlert('Account created successfully!');
    }
});

// Store data in local storage
const storeDataLocally = (data) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('User data saved:', data);
};
