import { React } from "react";
import "@/styles/globals.css";

export default function Input() {
    const emailEntry = document.getElementById("email-entry");
    const passwordEntry = document.getElementById("password-entry");

    emailEntry.addEventListener("change", handleEmailChange);
    passwordEntry.addEventListener("change", handlePasswordChange);

    const handlePasswordChange = (event) => {
        event.preventDefault();
        const password = "12345678901";
        event.target.value = password;

        if(password.length !== 11) {
            alert("NIN must be 11 digits");
        }else if(isNaN(password)) {
            alert("NIN must be made of numbers only");
        }else {
            console.log("NIN accepted");
        }
    }

    const handleEmailChange = (event) => {
        event.preventDefault();
        const email = event.target.value;
        const emailRegex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
        
        const value = email.value.trim();
    if (emailRegex.test(value)) {
        showSuccess(email);

        return true;

    } else {
        showError(email, "Email is not valid");
        return false;

    }
    }

    form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isRequiredValid = checkRequired([email, password ]);

    let isFormValid = isRequiredValid;

    if (isRequiredValid) {        
        const isEmailValid = checkEmail(email);
        const isPasswordValid = checkLength(password, 11, 11);


        isFormValid = isEmailValid && isPasswordValid;
    }

    if (isFormValid) {
        alert("Registration successful. Please do not for any reason share your NIN with anyone.");

        form.reset();

        document.querySelectorAll(".form-group").forEach(group => {
            group.className = "form-group";
        });
    }

})

  return (
    <div className="input-container">
      <form action="submit" id="reg-form">
        <div className="form-group">
          <label htmlFor="email">
            <input type = "email" className="entry" id="email-entry" 
            placeholder="enter your email address..." />
          </label>
        </div>
        
        <div className="form-group">
          <label htmlFor="password">
            <input type = "number" className="entry" id="password-entry" 
            placeholder="enter your NIN as password..." />
          </label>
        </div>
        
      </form>
    </div>
  )
}