////modal image section funtion/////


function modalimg(e){
    console.log(e.src)

    var modal_img = document.getElementById("modal-image");
    modal_img.src = e.src;
    modalPrice()
     

   
}

function wishlist(e){
     document.getElementById("heart").style.color = "red"
    
}

function modalPrice(e){
    var itemPrice = document.getElementById("itemval");
    var a = document.querySelector(".price")
console.log(a.textContent)
    itemPrice.innerHTML = a.textContent;
}
// console.log(data.price)

///increase & decrease quantity///

// const decreaseNum = (inc_dec) =>{
//     var itemval = document.getElementById("textbox");
//     if(itemval.value < 0){

//         itemval.value = 0;
//         alert("Negative value not allowed")
//     }
//     else{
//         itemval.value = parseInt(itemval.value) - 1;
//         itemval.style.background = "white";
//         itemval.style.color = "black";
//     }
// }

// const increaseNum = (inc_dec) =>{
//     var itemval = document.getElementById("textbox");
//     if(itemval.value > 6){
//         itemval.value = 6;
//         alert("Maximumm six piece allowed");
//         itemval.style.background = "red";
//         itemval.style.color = "white";
//     }
//     else{
//         itemval.value = parseInt(itemval.value) + 1;
//     }
// }


///Adding  data to local storage////

const  addToCart = document.getElementsByClassName("add-to-cart");
const items = [];

// console.log(addToCart)
for(let i = 0; i < addToCart.length ; i++){
    addToCart[i].addEventListener("click", function(e) {
    
        if(typeof(Storage) !== "undefined"){
            const item = {
                id : i+1,
                product_img : e.target.parentNode.parentNode.children[0].textContent,
                name : e.target.parentNode.parentNode.children[0].textContent,
                price : e.target.parentNode.parentNode.children[1].children[0].textContent,
                no : 1
            }
         if(JSON.parse(localStorage.getItem("items")) === null){
             items.push(item);
            //  console.log(items)
             
            localStorage.setItem("items",JSON.stringify(items));
         }
         else{
            const localItems = JSON.parse(localStorage.getItem("items"));
            localItems.map(data =>{
                if(item.id == data.id){
                    item.no = data.no + 1
                    // console.log(item)
            

                }
                else{
                items.push(data);

                }
            });
            items.push(item);
            localStorage.setItem("items",JSON.stringify(items));
            window.location.reload();
         }
        }
        else{
            alert("storage is not working")
        }
    })
    
    
    ////adding data to shopping cart////

    const iconShoping = document.getElementById("cart-num");
    let no = 0;
    JSON.parse(localStorage.getItem("items")).map(data=>{
        no = no + data.no;
    });
    iconShoping.innerHTML = no;
    // console.log(no)



    ///Cart page  display block & display none////


function cartBox(){
    
    document.getElementById("cart-box").style.display = "block"
    // window.location.href = "cart.html"
}

function closeCartBox(){
    document.getElementById("cart-box").style.display = "none"
    // window.location.href = "index.html"
}



        //// Cart page table creating///


const cart_table = document.querySelector("table");

    let tableData = " ";
    tableData +=  `<tr>
                    <th>S no </th>
                    <th>Item Name</th>
                    <th>Item No</th>
                    <th>Price</th>
                    <th></th>
                </tr>`
    if(JSON.parse(localStorage.getItem("items"))=== null){
        tableData += `<tr><td colspan="5">No Items Found</td></tr>`
    }
    else{
        JSON.parse(localStorage.getItem("items")).map(data=>{
            tableData += "<tr>" +
                           " <th>" + " " + data.id + " " + "</th>" +  
                            "<th>" + " " + data.name + " " + "</th>" +
                            "<th>" + " " + data.no + " " + "</th>" +
                            "<th>" + " " + data.price + " " + "</th>" +
                          `  <th><a href= "#" onclick= deleteCart(this) >  <i class = "fas fa-trash"></i>  </a> </th>` +
                        "</tr>"
        })
        



    }
    cart_table.innerHTML = tableData

        function deleteCart(e){
            let items = [];
            JSON.parse(localStorage.getItem("items")).map(data=>{
                if(data.id != e.parentElement.parentElement.children[0].textContent){
                    items.push(data);
                }
            });
            localStorage.setItem("items",JSON.stringify(items));
            window.location.reload();
        }

}
