document.getElementById('card-number').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(.{4})/g, '$1 ').trim();
    e.target.value = value;
});
document.getElementById('exp-month').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) value = value.slice(0, 2);
    e.target.value = value;
});

document.getElementById('exp-year').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) value = value.slice(0, 2);
    e.target.value = value;
});

document.querySelector('.submit-btn').addEventListener('click', function () {
    alert('Payment Submitted!');
});
document.addEventListener('DOMContentLoaded', function () {
    let cvvInput = document.getElementById('cvv');

    // Ensure input box is interactive and accepts only numbers
    cvvInput.addEventListener('focus', function () {
        this.style.border = '2px solid black'; // Optional: Highlight when clicked
    });

    cvvInput.addEventListener('blur', function () {
        this.style.border = '1px solid #ccc'; // Reset border on blur
    });

    cvvInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        e.target.value = value.slice(0, 3); // Limit to 3 digits
    });
});

