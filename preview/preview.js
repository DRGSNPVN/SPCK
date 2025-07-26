let user = localStorage.getItem("user")
if(user) {
    let login = document.getElementById("login")
    login.innerHTML = user
    login.addEventListener("click", () => {
        localStorage.removeItem("user")
        window.location.href = "../authentication/sign_up.html"
    })
}