let sendBtn = document.getElementById("submitButton")

sendBtn.addEventListener("click", (event)=>{

    send(event)
});

function send(event){
    event.preventDefault()
    // console.log("here")
let inputVal = document.querySelector(".input").value
let validation = document.getElementById("valid")

console.log(inputVal)
if(inputVal.endsWith('@gmail.com')){
    validation.textContent = "Sent Successfully";
            setTimeout(() => {
                validation.textContent = "";
                validation.textContent.color = "green";
            },2000);
}else{
    validation.textContent = "Please enter valid email"; 
    setTimeout(() => {
        validation.textContent = "";
        validation.color = "red";
    },2000);
}
    
}