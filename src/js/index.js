function emailIsValid(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function clearSubscribe() {
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
}

function showMensage(text, type) {
    document.getElementById("spanMensage").innerText = text;
    if (type == "error") {
        document.getElementById("imgMensage").src = "../images/icon-X.svg";
    } else {
        document.getElementById("imgMensage").src = "../images/icon-check.svg";
    }

    const mensage = document.getElementById("mensage");

    mensage.classList.remove("hidden");
    mensage.classList.add("show");
    setTimeout(() => {
        mensage.classList.add("hidden");
        mensage.classList.remove("show");
    }, 3000);
}

function submitSubscribe(event) {
    event.preventDefault();

    const email = event.target.elements["email"].value;
    const name = event.target.elements["name"].value;

    if (!emailIsValid(email)) {
        showMensage("invalid email!", "error");
        return;
    }
    if (!name || !name.trim()) {
        showMensage("name is required!", "error");
        return;
    }
    localStorage.setItem("subscribe_email", email);
    localStorage.setItem("subscribe_name", name);
    clearSubscribe();
    showMensage("Registration completed successfully!", "success");
}

function submitLogin(event) {
    event.preventDefault();

    const email = event.target.elements["email"].value;
    const password = event.target.elements["password"].value;

    if (!emailIsValid(email)) {
        showMensage("invalid email!", "error");
        return;
    }
    if (!password || !password.trim()) {
        showMensage("password is required!", "error");
        return;
    }
    clearLogin();
    window.location.assign("/src/pages/kanban.html");
}

function clearLogin() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
