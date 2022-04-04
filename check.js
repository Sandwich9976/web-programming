const registerbutton = document.querySelector("#checker");
registerbutton.addEventListener("click", RegisterCheck);

function RegisterCheck(){
	const email_TX = document.querySelector("#email");
	const pass_TX = document.querySelector("#password");
	const rpt_pass_TX = document.querySelector("#psw-repeat");
	const email = email_TX.value;
	const pass = pass_TX.value;
	const rpt_pass = rpt_pass_TX.value;
	
	if(email.length<4 && !email_TX.classList.contains("red"))
	{
		email_TX.classList.add("red");
	}
	else if (email.length>=4 && email_TX.classList.contains("red"))
	{
		email_TX.classList.remove("red");
	}
	
	if(pass.length<4 && !pass_TX.classList.contains("red"))
	{
		pass_TX.classList.add("red");
	}
	else if (pass.length>=4 && pass_TX.classList.contains("red"))
	{
		pass_TX.classList.remove("red");
	}
	
	if(rpt_pass!=pass && !rpt_pass_TX.classList.contains("red"))
	{
		rpt_pass_TX.classList.add("red");
	}
	else if (rpt_pass==pass && rpt_pass_TX.classList.contains("red"))
	{
		rpt_pass_TX.classList.remove("red");
	}
};
setInterval(RegisterCheck,1000)


