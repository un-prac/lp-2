// login page logic

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault()

    var uname = document.getElementById("username").value
    var pwd = document.getElementById("password").value
    var msg = document.getElementById("message")

    // just using hardcoded values for now
    if(uname == "admin" && pwd == "admin") {
        msg.style.color = "green"
        msg.innerText = "Login successful!"

        localStorage.setItem("isLoggedIn", "true")
        
        // redirect after 1 second
        setTimeout(function() {
            window.location.href = "success.html"
        }, 1000)

    } else {
        msg.style.color = "red"
        msg.innerText = "Wrong username or password!"
    }
})
