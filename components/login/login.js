const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(signupForm);
    const data = {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password')
    };

    try {
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', result.token);
            window.location.href = '/findjobs.html';
        } else {
            alert(result.message);
        }
    } catch (error) {
        alert('Error during signup');
    }
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(loginForm);
    const data = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        
        // Update redirect paths after successful login/signup
        if (response.ok) {
            localStorage.setItem('token', result.token);
            window.location.href = '../findjob/findjobs.html';
        } else {
            alert(result.message);
        }
    } catch (error) {
        alert('Error during login');
    }
});