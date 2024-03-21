//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
	let submitBtn = document.getElementById('submit');
	let checkbox = document.getElementById('checkbox');
	let username=document.getElementById('username');
	let password=document.getElementById('password');
	let form = document.getElementsByTagName('form')[0];
	submitBtn.addEventListener('click',(e)=>{
		if(checkbox.checked){
			localStorage.setItem('username',username.value);
			localStorage.setItem('password',password.value);
		}else{
			localStorage.removeItem('username');
			localStorage.removeItem('password');
		}
		let loginBtn = document.createElement('button');
		loginBtn.id = 'existing';
		loginBtn.innerText = 'Login as existing user';
		form.append(loginBtn);
		alert(`Logged in as ${username.value}`)
	})
	
	let user = localStorage.getItem('username') 
	if(user){
		loginBtn.addEventListener('click',()=>{
			alert(`Logged in as ${user}`);
		})
	}
});




