function login() {
    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorBox = document.getElementById("error");

    
    const uitmPattern = /^[0-9]{10}@student\.uitm\.edu\.my$/;

    
    if (email === "" || password === "") {
        showError("Please enter your email and password.");
        return;
    }

    
    if (!uitmPattern.test(email)) {
        showError("Invalid email format. Only UiTM accounts are allowed.");
        return;
    }

   
    localStorage.setItem("username", email);
    window.location.href = "index.html";
}

function showError(message) {
    const errorBox = document.getElementById("error");
    errorBox.innerText = message;
    errorBox.classList.remove("d-none");
}