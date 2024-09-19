document.getElementById('signup-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Collect form data
    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    try {
        // Send POST request to backend
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            alert('Signup successful!');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert(result.message || 'Signup failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while signing up');
    }
});
