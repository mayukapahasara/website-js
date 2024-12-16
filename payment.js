document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const cardName = document.getElementById('card-name').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expMonth = document.getElementById('exp-month').value.trim();
    const expYear = document.getElementById('exp-year').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (!fullName || !email || !address || !city || !state || !zip || !cardName || !cardNumber || !expMonth || !expYear || !cvv) {
        alert('Error: Please fill in all the fields before submitting.');
        return;
    }
    alert('Payment Submitted Successfully!');
});
