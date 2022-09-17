let cart = localStorage.getItem("cart");
let parseCart = JSON.parse(cart)
let addCont = document.getElementById("addToBagCont")

let sum = 0;


parseCart.map(item =>{
    let { category, id, price, product_link, image_link, description } = item;

    let div = document.createElement('div');
    div.classList.add("cartEL");

     let closebtn = document.createElement("button");
    closebtn.innerText = "x";
    closebtn.classList.add("closebtn");
    closebtn.id = id;
    


    let img = document.createElement('img');
    img.src = image_link;
    img.classList.add("imgBox");

    let des = document.createElement('p');
    des.classList.add("productName");
    des.innerHTML= description;

    let priceVal  = document.createElement('p');
    priceVal.classList.add("priceName");
    priceVal.innerText= price;

    sum += Number(price);

    div.append(closebtn,img,des, priceVal);
    addCont.append(div);

    closebtn.addEventListener("click", function (e) {
        let productItemfromStorage = JSON.parse(localStorage.getItem("cart"));
        console.log("working", productItemfromStorage)

        productItemfromStorage.forEach((element, index )=> {
            if(element.id == e.target.id){
                productItemfromStorage.splice(index,1)
            }
            
        });

        localStorage.setItem("cart", JSON.stringify(productItemfromStorage))
        e.target.parentElement.remove();
    })
 
})


console.log(sum)