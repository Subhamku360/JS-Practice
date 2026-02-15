let form=document.querySelector("#loginForm");
let error1=document.querySelector(".emailError");
let error2=document.querySelector(".passwordError");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let correct=document.querySelector(".correct");

form.addEventListener("submit", function(e)
{
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(email.value.length===0)
    {
        error1.textContent="Enter the email";
        error1.style.display="block";
    }
    else if(!emailPattern.test(email.value))
    {
        error1.textContent="Enter the Valid Email";
        error1.style.display="block";
    }
    else{
        error1.style.display="none";
        error1.textContent=" ";

    }

    if(password.value.length===0)
    {
        error2.textContent="Enter Password to Login";
        error2.style.display="block";
    }
    else if(!passwordPattern.test(password.value))
    {
        error2.textContent="Enter The Correct Password ";
        error2.style.display="block";
    }
    else{
        error2.textContent=" ";
        error2.style.display="none";
    }

    if((passwordPattern.test(password.value))&&(emailPattern.test(email.value)))
    {
        correct.style.display="flex"
    }








})
