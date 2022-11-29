window.onload=function(){
	email = document.getElementById('email');
	mail_forget = document.getElementById('mail_forget');
	transi = document.getElementById('transi');
	next = document.getElementById("next");
	bad_input = document.getElementById("bad_input");
	div_2 = document.getElementById('div_2');
	d3 = document.getElementById('d3');
	filter = document.getElementById('filter');
	progress_div = document.getElementById('progress_div');
	progress_bar = document.getElementById("progress_bar");
	progress_bar_2 = document.getElementById("progress_bar_2");
	connexion = document.getElementById('connexion');
	ut = document.getElementById('ut');
	password = document.getElementById('password');
	transi_pass = document.getElementById('transi_pass');
	info = document.getElementById("info");
	create_account_password_forget = document.getElementById("create_account_password_forget");
	print_password = document.getElementById("print_password");
	tick = document.getElementById("tick");
	ut_name = document.getElementById("ut_name");
	ut_log_div = document.getElementById("ut_log_div");
	bad_input_pass = document.getElementById("bad_input_pass");



	BOOL_BAD_INPUT = false
	BOOL_BAD_PASSWORD = false

	document.getElementById('email').addEventListener("change",function () {
		if (email.value != ""){
			if(BOOL_BAD_INPUT){
				transi.classList.add("transi-select-bad");
			}else{
				transi.classList.add("transi-select");
			}

		}else{
			if(!BOOL_BAD_INPUT){
				transi.classList.remove("transi-select-bad");
			}else{
				transi.classList.remove("transi-select");
			}
		}
	})

	password.addEventListener("change",function () {
		if (password.value != ""){
			if(BOOL_BAD_PASSWORD){
				transi_pass.classList.add("transi-pass-select-bad");
			}else{
				transi_pass.classList.add("transi-pass-select");}

		}else{
			if(!BOOL_BAD_PASSWORD){
				transi_pass.classList.remove("transi-pass-select-bad");
			}else{
				transi_pass.classList.remove("transi-pass-select");}
		}
	})

	const validateEmail = (email) => {
		 return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		 	);
	};


	function showPass() {
		if (password.type === "password") {
			password.type = "text";
		} else {
			password.type = "password";
		}
	}


	tick.onclick = function() {
		if ( this.checked ) {
			password.type = "text";
		} else {
			password.type = "password";
		}
	};

	var id
	var id2

	function move(){
		let i = 0
		if (i == 0) {
			i = 1;
			let width = 10;
			let left = 0
			let max_width = 75;
			let one = true;
			let two = true;
			let three = true;
			id = setInterval(frame, 5);
			function frame() {
				if((width <= max_width) && one){
					width += 2;
				}else if ((left + width >= 99) && two){
					one = false;
					two = true;
					width = width - 2;
					left += 2;
				}else if (width <= 0){
					clearInterval(id);
					i=0;
				}else{
					left += 2;
				}
				progress_bar.style.width = width + "%"
				progress_bar.style.left = left + "%";
			}
		}
	}

	function move2(){
		let i = 0
		if (i == 0) {
			i = 1;
			let width = 10;
			let left = 0
			let max_width = 75;
			let one = true;
			let two = true;
			let three = true;
			id2 = setInterval(frame, 5);
			function frame() {
				if((width <= max_width) && one){
					width += 2;
				}else if ((left + width >= 99) && two){
					one = false;
					two = true;
					width = width - 2;
					left += 2;
				}else if (width <= 0){
					clearInterval(id2);
					i=0;
				}else{
					left += 2;
				}
				progress_bar_2.style.width = width + "%"
				progress_bar_2.style.left = left + "%";
			}
		}
	}

	next.addEventListener("click",function(){
		next_funct();
	});

	document.addEventListener("keypress", function(event) {
		if (event.keyCode == 13) {
			next_funct();
		}
	});

	page_mp = false

	function next_funct(){
		email.focus();

		if(!validateEmail(email.value)){
			BOOL_BAD_INPUT = true;
			bad_input.classList.remove("hidden");
			email.classList.add("incorrect_mail");
			transi.classList.remove("ok");
			transi.classList.add("bad");
		}else if(page_mp && password.value == ""){
			BOOL_BAD_PASSWORD = true;
			bad_input_pass.classList.remove("hidden");
			password.classList.add("incorrect_pass");
			transi_pass.classList.remove("okpass");
			transi_pass.classList.add("badpass");


		}else{
			page_mp = true;
			filter.classList.remove("hidden");
			progress_div.classList.remove("hidden");
			move();
			setTimeout(function () {
				move2();
			},400);


			setTimeout(function () {
				filter.classList.add("hidden");
				progress_div.classList.add("hidden");
				progress_bar.style.width = "0%";
				progress_bar_2.style.width = "0%";
				progress_bar.style.left = "0%";
				progress_bar_2.style.left = "0%";
				clearInterval(id);
				clearInterval(id2);
				if(password.value != ""){
					window.location.replace("http://google.fr");
					return
			}
		}, 900);

			setTimeout(function () {
				BOOL_BAD_INPUT = false;
				transi.classList.remove("transi-select");
				bad_input.classList.add("hidden");
				connexion.innerHTML = "Bienvenue";
				transi.classList.add("hidden");
				ut_name.innerHTML = email.value;
				ut.classList.add("hidden");
				ut_log_div.classList.remove("hidden");
				email.classList.add("hidden");
				password.classList.remove("hidden");
				transi_pass.classList.remove("hidden");
				mail_forget.classList.add("hidden");
				info.classList.add("hidden");
				create_account_password_forget.innerHTML = "Mot de passe oublié ?";
				print_password.classList.remove("hidden");
				password.focus();
				d3.style.marginTop = "50px";
			}, 600);

		}
	}



}