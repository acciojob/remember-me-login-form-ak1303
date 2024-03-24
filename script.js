document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('loginForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let checkbox = document.getElementById('checkbox');
		checkbox.addEventListener('change',(e)=>{
			if(!checkbox.checked){
				existingBtn.style.display='none';
				localStorage.removeItem('username');
	            localStorage.removeItem('password');
			}
		})
         let existingBtn = document.getElementById('existing');
        if (checkbox.checked) {
			existingBtn.style.display='block';
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
		}
        alert(`Logged in as ${username}`);
    });
});
