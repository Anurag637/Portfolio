document.querySelector('form').addEventListener('submit', function(e) {
    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;

    if (!email || !name || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});
