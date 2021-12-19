function Register(){
	var args = document.getElementsByTagName("input")

	var name = document.getElementById("Fname")
	var lastName = document.getElementById("Lname")
	var email = document.getElementById("email")
	var password = document.getElementById("password")
	
	console.log(email)

	regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	
	if (args[0].value.length == 0){
		name.innerHTML = "First Name cannot be empty"
		name.style.color = "hsl(0, 100%, 74%)"
		name.style.textAlign = "right"
		args[0].style.borderColor = "hsl(0, 100%, 74%)"
		args[0].placeholder = ""
	}else{
		name.innerHTML = ""
		args[0].style.borderColor = "hsl(246, 25%, 77%)"
	}
	if (args[1].value.length == 0){
		lastName.innerHTML = "Last Name cannot be empty"
		lastName.style.color = "hsl(0, 100%, 74%)"
		lastName.style.textAlign = "right"
		args[1].style.borderColor = "hsl(0, 100%, 74%)"
		args[1].placeholder = ""
	}else{
		lastName.innerHTML = ""
		args[1].style.borderColor = "hsl(246, 25%, 77%)"
	}
	if (!args[2].value.match(regex)){
		email.innerHTML = "Looks like this is not an email"
		email.style.color = "hsl(0, 100%, 74%)"
		email.style.textAlign = "right"
		args[2].style.borderColor = "hsl(0, 100%, 74%)"
		args[2].style.color = "hsl(0, 100%, 74%)"
		args[2].placeholder = ""
	}else{
		email.innerHTML = ""
		args[2].style.borderColor = "hsl(246, 25%, 77%)"
		args[2].style.color = "black"
	}
	if (args[3].value.length == 0){
		password.innerHTML = "Password cannot be empty"
		password.style.color = "hsl(0, 100%, 74%)"
		password.style.textAlign = "right"
		args[3].style.borderColor = "hsl(0, 100%, 74%)"
		args[3].placeholder = ""
	}else{
		password.innerHTML = ""
		args[3].style.borderColor = "hsl(246, 25%, 77%)"
	}
}