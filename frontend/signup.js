document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);  // Success
        } else {
            alert(`Error: ${result.message}`);  // Error from backend
        }
    } catch (error) {
        alert(`Request failed: ${error.message}`);  // Network or other errors
    }
});
