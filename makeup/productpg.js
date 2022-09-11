

  let prodHTML = ''

//  fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
//   .then(response => response.json())
//   .then(json => console.log(json)).catch((error) => {
//  console.log(error)
// })

// fetch('http://makeup-api.herokuapp.com/api/v1/products.json').then((response) =>{
// response.json();
// }).then((data) => {
//   console.log(data)
// }).catch((error) => {
//  console.log(error)
// })

   const mainDiv = document.querySelector('.products');
  
  const loading = document.querySelector('.loading')
       const getData = async () =>{

        
              //  let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
              let res = await fetch('https://prakash-dey.github.io/api/nyka.json');

            let acutaldata = await res.json();
            loading.remove();
            // console.log(acutaldata)
            acutaldata.slice(0, 40).map((val, index) =>{
              let { category, id, price, product_link,image_link, description} = val;
              // console.log(image_link)

              // let img_array = [
              //   "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
              //   "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFrZXVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              //   "https://images.unsplash.com/photo-1557205465-f3762edea6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZXVwJTIwZm91bmRhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
              //   "https://images.unsplash.com/photo-1631214524115-9942bf927d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1ha2V1cCUyMGZvdW5kYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
              //   "https://images.unsplash.com/photo-1590156424570-698d124ec7dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1ha2V1cCUyMGZvdW5kYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
              //   "https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFrZXVwJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
              //   "https://images.unsplash.com/photo-1620946419190-5b1345a7e5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1ha2V1cCUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"


              // ]

              // if(index >2){
              //   image_link = img_array[Math.floor(Math.random()*img_array.length)]; 
              // }



              let htmlcode = `
                 <div class="productEl ${category}" id="${id}">
                        <div class="productBox">
                        <div class="product_tag">
                            <span class="feature" aria-hidden="true">FEATURED</span>
                            <span class="bestSell" aria-hidden="true">BestSellers</span>
                            </div>

                            <a href="${product_link}"
                                target="_blank" class="productLink">

                                <img src="${image_link}"
                                    alt="Nykaa" class="productImg">

                                <div class="productInfo">
                                    <div class="productName">${description}
                                    </div>
                                    <div class="price">
                                        <span class="mrp">MRP:</span>
                                        <span class="priceValue">₹${price}</span>
                                    </div>
                                    <p class="productOffer">Enjoy Free Gift</p>
                                    <div class="productRate">
                                        <span class="star-wrap">
                                            <i class='bx bx-star'></i>
                                        </span>
                                        <span class="star-wrap">
                                            <i class='bx bx-star'></i>
                                        </span>
                                        <span class="star-wrap">
                                            <i class='bx bx-star'></i>
                                        </span>
                                        <span class="star-wrap">
                                            <i class='bx bx-star'></i>
                                        </span>
                                        <span class="star-wrap">
                                            <i class='bx bx-star'></i>
                                        </span>
                                        <span class="value">(1679)
                                        </span>
                                    </div>


                                </div>


                            </a>
                        </div>
                        <div class="wishlist">
                            <div class="shades">
                                16 Shades
                            </div>
                            <div class="hoverbtn" style="display: none;">
                                <button class="heartBtn" type="button">
                                    <i class='bx bx-heart'></i>

                                </button>
                                <button class="fillBtn" style=" display: none;">
                                    <i class='bx bxs-heart'></i>
                                </button>

                                <button type="button" class="previewBtn">
                                    Preview Shades
                                </button>
                            </div>
                        </div>
                    </div>`;
 
                     mainDiv.insertAdjacentHTML('beforeend', htmlcode);   
                  

            })

        

        
       };

     getData();

$(document).ready(function () {
    $('.slider').slick({
        dots:true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"> < </button>',
        nextArrow: '<button class="slick-next"> > </button>',
    });

   
  
});




//radio functions

$(" .filters input[type='radio']").click(function(){
  var radioValue = $("input[name='product-radio']:checked").val();
  if(radioValue){
    $('.productEl').hide();
    $(`.${radioValue}`).show();
  }
});

let sortBtn = document.querySelector(".sortBtn")
let sortDiv = document.querySelector(".sortDiv")
let downArr = document.querySelector(".downArr")

sortBtn.addEventListener("click" , showSort)

let showSortFlag = true

function showSort() {
  if(showSortFlag) {
    sortDiv.style.display = "flex"
    sortDiv.style.flexDirection = "column"
    showSortFlag = false
  }else {

    sortDiv.style.display = "none"
    downArr.style.display = "block"
    showSortFlag = true

  }

}


//Price multi here

let FPRICE = document.querySelector(".FPRICE")
let PRICEMULTI = document.querySelector(".PRICEMULTI")
let PriDOWN = document.querySelector(".PriDOWN")
let PriCUT = document.querySelector(".PriCUT")

FPRICE.addEventListener("click" , SHOWPriceFil)

let FPRICEflag = true

function SHOWPriceFil() {
  if(FPRICEflag) {
    PRICEMULTI.style.display = "flex"
    PriDOWN.style.display = "none"
    PriCUT.style.display = "block"
    FPRICEflag = false
  }else {

    PRICEMULTI.style.display = "none"
    PriDOWN.style.display = "block"
    PriCUT.style.display = "none"
    FPRICEflag = true

  }

}

//category
let categery = document.querySelector(".categery")
let catOptions = document.querySelector(".catOptions")
let CATDOWN = document.querySelector(".CATDOWN")
let CATCUT = document.querySelector(".CATCUT")

categery.addEventListener("click" , showCat)

let categoryflag = true

function showCat() {
  if(categoryflag) {
    catOptions.style.display = "flex"
    catOptions.style.flexDirection = "column"
    CATDOWN.style.display = "none"
    CATCUT.style.display = "block"
    categoryflag = false
  }else {

    catOptions.style.display = "none"
    CATDOWN.style.display = "block"
    CATCUT.style.display = "none"
    categoryflag = true

  }

}


// // wishlsit

// let shades = document.querySelector(".shades");
// let hoverbtn = document.querySelector(".hoverbtn")
// let hoverFlag = true

// shades.addEventListener("click", showDDiv);

// function showDDiv(){
//     if(hoverFlag){
//         hoverbtn.style.display = "flex"
//         hoverbtn.style.width = "100%"

//         shades.style.display = "none"

//     } else{
//         hoverbtn.style.display = "none"
//         shades.style.display = "block"


//     }

// }

// //heart fill

// let heartBtn = document.querySelector(".heartBtn")
// let fillBtn = document.querySelector(".fillBtn")

// let heartflag = true

// heartBtn.addEventListener("click", function (){
//     if(heartflag){
//         heartBtn.style.display = "none"
//         fillBtn.style.display = "block"
//     } else{
//         heartBtn.style.display = "block"
//         fillBtn.style.display = "none"
//     }
   
   
// })