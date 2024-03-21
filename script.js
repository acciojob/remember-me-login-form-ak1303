document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('loginForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let checkbox = document.getElementById('checkbox');

        if (checkbox.checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
        alert(`Logged in as ${username}`);
        displayExistingUserButton(); // Call function to update the existing user button
    });

    function displayExistingUserButton() {
        let user = localStorage.getItem('username');
        let existingBtn = document.getElementById('existing');

        if (user && !existingBtn) { // If user exists and button doesn't
            existingBtn = document.createElement('button');
            existingBtn.id = 'existing';
            existingBtn.innerText = 'Login as existing user';
            form.appendChild(existingBtn);
            existingBtn.addEventListener('click', () => {
                alert(`Logged in as ${user}`);
            });
        } else if (!user && existingBtn) { // If user doesn't exist and button exists
            existingBtn.remove();
        }
    }

    // Initial call to display existing user button based on local storage
    displayExistingUserButton();
});
