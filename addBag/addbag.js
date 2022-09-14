let cart = localStorage.getItem("cart");
let parseCart = JSON.parse(cart)
let addCont = document.getElementById("addToBagCont")

let sum = 0;


parseCart.map(item =>{
    let { category, id, price, product_link, image_link, description } = item;

    let div = document.createElement('div');
    div.classList.add("cartEL")


    let img = document.createElement('img');
    img.src = image_link;
    img.classList.add("imgBox")

    let des = document.createElement('p')
    des.classList.add("productName")
    des.innerHTML= description

    let priceVal  = document.createElement('p')
    priceVal.classList.add("priceName")
    priceVal.innerText= price

    sum += Number(price)

    div.append(img,des, priceVal);
    addCont.append(div)
 
})

console.log(sum)