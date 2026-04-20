

let gmail = [];
// localStorage.clear('helphubUser');
let user = localStorage.getItem("helphubUser");
if (user) {
    gmail = JSON.parse(user);

} else {
    gmail = [];
}

function create() {

    const demoUser = document.getElementById("demoUser").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    for (let i = 0; i < gmail.length; i++) {
        if (email == gmail[i].email) {
            alert("User already exists! Logging in...");
            return
        }
    }

    if (!email || !password || !confirmPassword || !demoUser) {
        alert("Please fill all fields!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const userData = {
        name: demoUser,
        role: role,
        email: email,
        password: password
    };

    document.querySelectorAll('.user').forEach(element => {
        element.innerText = userData.name;
    });

    console.log(gmail);

    gmail.push(userData)

    localStorage.setItem("helphubUser", JSON.stringify(gmail));

    window.location.href = "/dashboard.html";
}

function login() {
    const demoUser = document.getElementById("demoUser").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password || !demoUser) {
        alert("Please fill all fields!");
        return;
    }

    if (gmail.length == 0) {
        alert("No users found! Please create an account.");
        return;
    }

    let flag = false;
    console.log(gmail);

    for (let i = 0; i < gmail.length; i++) {
        if (email == gmail[i].email && password == gmail[i].password && demoUser.toLowerCase() == gmail[i].name.toLowerCase() && role.toLowerCase() == gmail[i].role.toLowerCase()) {
            flag = true;
            console.log(gmail[i]);
        }
        if (flag === true) {
            break
        }
    }



    if (flag) {
        window.location.href = "/dashboard.html";
        localStorage.setItem("User", demoUser);
        // return email 
    }else{
        alert("Invalid credentials! Please try again.");
        return
    }
}

window.login = login;
window.create = create;

console.log(localStorage.getItem("User") || "Guest");


const getCurrentUser = () => localStorage.getItem("User") || "Guest";
export function updateUI() {
    const currentUser = getCurrentUser();
    document.querySelectorAll('.user').forEach(el => {
        el.innerText = currentUser;
    });
}
