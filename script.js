document.addEventListener('DOMContentLoaded', () => {
    let submitBtn = document.getElementById('submit');
    let checkbox = document.getElementById('checkbox');
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let form = document.getElementById('loginForm');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (checkbox.checked) {
            localStorage.setItem('username', username.value);
            localStorage.setItem('password', password.value);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
        alert(`Logged in as ${username.value}`);
        displayExistingUserButton();
    });

    function displayExistingUserButton() {
        let user = localStorage.getItem('username');
        let existingBtn = document.getElementById('existing');
        if (user && !existingBtn) {
            existingBtn = document.createElement('button');
            existingBtn.id = 'existing';
            existingBtn.innerText = 'Login as existing user';
            form.appendChild(existingBtn);
            existingBtn.addEventListener('click', () => {
                alert(`Logged in as ${user}`);
            });
        } else if (!user && existingBtn) {
            existingBtn.remove();
        }
    }

    displayExistingUserButton();
});
