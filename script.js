const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const demoUser = document.getElementById("demoUser").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (!email || !password) {
        alert("Please fill all fields!");
        return;
    }

    const userData = {
        name: demoUser,
        role: role,
        email: email,
        password: password,
        isLoggedIn: true
    };

    localStorage.setItem("helphubUser", JSON.stringify(userData));

    window.location.href = "dashboard.html";
});





