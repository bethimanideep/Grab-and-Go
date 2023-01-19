
let addBtn1 = document.getElementById("btn1");
let addBtn2 = document.getElementById("btn2");
let addBtn3 = document.getElementById("btn3");
let addBtn4 = document.getElementById("btn4");
let addBtn5 = document.getElementById("btn5");
let addBtn6 = document.getElementById("btn6");
let addBtn7 = document.getElementById("btn7");
let addBtn8 = document.getElementById("btn8");
let addBtn9 = document.getElementById("btn9");
let addBtn10 = document.getElementById("btn10");

let product1 = {
    "brand": "freesho",
    "mrp": 97,
    "name": "Paneer",
    "image": "https://www.bigbasket.com/media/uploads/p/s/264679_4-milky-mist-paneer-premium-fresh.jpg",
   
    "packsize": "500gm"
}

let product2 = {
    "brand": "freesho",
    "mrp": 99,
    "name": "Sandwitch-Bread",
    "image": "https://www.bigbasket.com/media/uploads/p/s/1204352_1-fresho-sandwich-bread-white-chemical-free-400g-eggs-regular-6pcs.jpg",
   
    "packsize": "500gm"
}
let product3 = {
    "brand": "freesho",
    "mrp": 204,
    "name": "Butter",
    "image": "https://www.bigbasket.com/media/uploads/p/s/1204991_3-amul-butter-pasteurized.jpg",
   
    "packsize": "500gm"
}
let product4 = {
    "brand": "freesho",
    "mrp": 97,
    "name": "Paneer",
    "image": "https://www.bigbasket.com/media/uploads/p/s/264679_4-milky-mist-paneer-premium-fresh.jpg",
   
    "packsize": "500gm"
}
let product5 = {
    "brand": "freesho",
    "mrp": 33,
    "name": "Onion(Loose)",
    "image": "https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
   
    "packsize": "500gm"
}

let product6 = {
    "brand": "freesho",
    "mrp": 20.50,
    "name": "Cauliflower",
    "image": "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
   
    "packsize": "500gm"
}

let product7 = {
    "brand": "freesho",
    "mrp": 9,
    "name": "Carrot-Orane(Loose)",
    "image": "https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg",
   
    "packsize": "500gm"
}

let product8 = {
    "brand": "freesho",
    "mrp": 33,
    "name": "Capsicum-Green(Loose)",
    "image": "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
   
    "packsize": "500gm"
}

let product9 = {
    "brand": "freesho",
    "mrp": 8.50,
    "name": "Coriander-Leaves",
    "image": "https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
   
    "packsize": "500gm"
}

let product10 = {
    "brand": "freesho",
    "mrp": 31,
    "name": "Ladies'Fingers(Loose)",
    "image": "https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
   
    "packsize": "500gm"
}

addBtn1.addEventListener("click",()=>{

    let cartitem =  [];
    cartitem = cartitem.filter(item => item.name != product1.name)        //update obj with original obj and id
    cartitem.push(product1)                //update obj with original obj
    localStorage.setItem("cartitem", JSON.stringify(cartitem))
    alert("Successfully added to cart")
    
})

addBtn2.addEventListener("click",()=>{

    let cartitem =  [];
    cartitem = cartitem.filter(item => item.name != product2.name)        //update obj with original obj and id
    cartitem.push(product2)                //update obj with original obj
    localStorage.setItem("cartitem", JSON.stringify(cartitem))
    alert("Successfully added to cart")
    //quant.innerHTML = 1
})

addBtn3.addEventListener("click",()=>{

    let cartitem =  [];
    cartitem = cartitem.filter(item => item.name != product3.name)        //update obj with original obj and id
    cartitem.push(product3)                //update obj with original obj
    localStorage.setItem("cartitem", JSON.stringify(cartitem))
    alert("Successfully added to cart")
    //quant.innerHTML = 1
})

addBtn4.addEventListener("click",()=>{

    let cartitem =  [];
    cartitem = cartitem.filter(item => item.name != product4.name)        //update obj with original obj and id
    cartitem.push(product4)                //update obj with original obj
    localStorage.setItem("cartitem", JSON.stringify(cartitem))
    alert("Successfully added to cart")
    //quant.innerHTML = 1
})

addBtn5.addEventListener("click",()=>{

    let cartitem =  [];
    cartitem = cartitem.filter(item => item.name != product5.name)        //update obj with original obj and id
    cartitem.push(product5)                //update obj with original obj
    localStorage.setItem("cartitem", JSON.stringify(cartitem))
    alert("Successfully added to cart")
    //quant.innerHTML = 1
})

addBtn6.addEventListener("click",()=>{

    let cartitem =  [];
    cartitem = cartitem.filter(item => item.name != product6.name)        //update obj with original obj and id
    cartitem.push(product6)                //update obj with original obj
    localStorage.setItem("cartitem", JSON.stringify(cartitem))
    alert("Successfully added to cart")
    //quant.innerHTML = 1
})

addBtn7.addEventListener("click",()=>{

    let cartitem =  [];
    cartitem = cartitem.filter(item => item.name != product7.name)        //update obj with original obj and id
    cartitem.push(product7)                //update obj with original obj
    localStorage.setItem("cartitem", JSON.stringify(cartitem))
    alert("Successfully added to cart")
    //quant.innerHTML = 1
})

addBtn8.addEventListener("click",()=>{

    let cartitem =  [];
    cartitem = cartitem.filter(item => item.name != product8.name)        //update obj with original obj and id
    cartitem.push(product8)                //update obj with original obj
    localStorage.setItem("cartitem", JSON.stringify(cartitem))
    alert("Successfully added to cart")
    //quant.innerHTML = 1
})

addBtn9.addEventListener("click",()=>{

    let cartitem =  [];
    cartitem = cartitem.filter(item => item.name != product9.name)        //update obj with original obj and id
    cartitem.push(product9)                //update obj with original obj
    localStorage.setItem("cartitem", JSON.stringify(cartitem))
    alert("Successfully added to cart")
    //quant.innerHTML = 1
})

addBtn10.addEventListener("click",()=>{

    let cartitem =  [];
    cartitem = cartitem.filter(item => item.name != product10.name)        //update obj with original obj and id
    cartitem.push(product10)                //update obj with original obj
    localStorage.setItem("cartitem", JSON.stringify(cartitem))
    alert("Successfully added to cart")
    //quant.innerHTML = 1
})