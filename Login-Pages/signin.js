document.querySelector("button").addEventListener("click", signin);
  var regdUser = JSON.parse(localStorage.getItem("signupNykaa"));
  function signin() {
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    for (var i = 0; i < regdUser.length; i++) {
      if (regdUser[i].mail == email && regdUser[i].password == pass) {
        window.location.href = "home.html";
      } else {
        alert("Login failed");
      }
    }
  }