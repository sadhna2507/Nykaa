let sendBtn = document.getElementById("submitButton")

sendBtn.addEventListener("click", (event)=>{

    send(event)
});

function send(event){
    event.preventDefault()
    // console.log("here")
let inputVal = document.querySelector(".input").value
let validation = document.getElementById("valid")

// console.log(inputVal)
if(inputVal.endsWith('@gmail.com')){
    validation.textContent = "Sent Successfully";
    validation.style.color = "limegreen";

            setTimeout(() => {
                validation.textContent = "";
            },2000);
}else{
    validation.textContent = "Please enter valid email !!"; 
    setTimeout(() => {
        validation.textContent = "";
        validation.style.color = "red";
    },3000);
}
    
}