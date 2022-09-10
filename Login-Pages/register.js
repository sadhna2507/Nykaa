document.querySelector("button").addEventListener("click", forSubmition);
  signupArr = JSON.parse(localStorage.getItem("sugnupNykaa")) || [];
  function forSubmition(event) {
    event.preventDefault();
    var dataObj = {
      mail: document.querySelector("#email").value,
      password: document.querySelector("#pass").value,
    };
    signupArr.push(dataObj);
    console.log(signupArr);
    localStorage.setItem("signupNykaa", JSON.stringify(signupArr));

    document.querySelector("button").addEventListener("click", function () {
      window.location.href = "signin.html";
    });
  }