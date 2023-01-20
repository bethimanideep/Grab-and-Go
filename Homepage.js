
let container = document.querySelector(".slide1");
let container2 = document.querySelector(".slide3");

let  products = [{
    "brand": "freesho",
    "mrp": 97,
    "name": "Paneer",
    "image": "https://www.bigbasket.com/media/uploads/p/s/264679_4-milky-mist-paneer-premium-fresh.jpg",
   
    "packsize": "500gm"
},

 {
    "brand": "freesho",
    "mrp": 99,
    "name": "Sandwitch-Bread",
    "image": "https://www.bigbasket.com/media/uploads/p/s/1204352_1-fresho-sandwich-bread-white-chemical-free-400g-eggs-regular-6pcs.jpg",
   
    "packsize": "500gm"
}, {
    "brand": "freesho",
    "mrp": 204,
    "name": "Butter",
    "image": "https://www.bigbasket.com/media/uploads/p/s/1204991_3-amul-butter-pasteurized.jpg",
   
    "packsize": "500gm"
},
{
    "brand": "freesho",
    "mrp": 97,
    "name": "Paneer",
    "image": "https://www.bigbasket.com/media/uploads/p/s/264679_4-milky-mist-paneer-premium-fresh.jpg",
   
    "packsize": "500gm"
},
 {
    "brand": "freesho",
    "mrp": 33,
    "name": "Onion(Loose)",
    "image": "https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
   
    "packsize": "500gm"
}];

 let products2 = [{
    "brand": "freesho",
    "mrp": 20.50,
    "name": "Cauliflower",
    "image": "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
   
    "packsize": "500gm"
},

 {
    "brand": "freesho",
    "mrp": 9,
    "name": "Carrot-Orane(Loose)",
    "image": "https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg",
   
    "packsize": "500gm"
},

 {
    "brand": "freesho",
    "mrp": 33,
    "name": "Capsicum-Green(Loose)",
    "image": "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
   
    "packsize": "500gm"
}

, {
    "brand": "freesho",
    "mrp": 8.50,
    "name": "Coriander-Leaves",
    "image": "https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
   
    "packsize": "500gm"
},

 {
    "brand": "freesho",
    "mrp": 31,
    "name": "Ladies'Fingers(Loose)",
    "image": "https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
   
    "packsize": "500gm"
}];

    products.forEach((ele,index)=>{
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src",ele.image);

        image.addEventListener("click",()=>{
            localStorage.setItem("productdetails", JSON.stringify(ele));
            window.location.href = "productdetail.html";
        })

        let name = document.createElement("h3");
        name.innerText = ele.name;

        let price = document.createElement("p");
        price.innerText = "Rs"+ele.mrp;

        let text = document.createElement("p");
        text.innerText = "Standard Delivery";

        let time = document.createElement("p");
        time.innerText = "09:00AM to 12:00PM";

        let input = document.createElement('input');
        input.value = 1;
        input.style.width = '20%';

        let btn = document.createElement("button");
        btn.innerText = "ADD";

        
        btn.addEventListener("click",()=>{
            let cartitem = JSON.parse(localStorage.getItem("cartitem")) || [];
            
            ele["quantity"] = input.value
            products.push(ele)      
            cartitem.push(products[index])               
            localStorage.setItem("cartitem", JSON.stringify(cartitem))
            alert("Successfully added to cart");
        })
       

        div.append(image,name,price,text,time,input,btn);
        container.append(div);

    })



products2.forEach((ele,index)=>{
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src",ele.image);

    image.addEventListener("click",()=>{
        localStorage.setItem("productdetails", JSON.stringify(ele));
        window.location.href = "productdetail.html";
    })

    let name = document.createElement("h3");
    name.innerText = ele.name;

    let price = document.createElement("p");
    price.innerText = "Rs"+ele.mrp;

    let text = document.createElement("p");
    text.innerText = "Standard Delivery";

    let time = document.createElement("p");
    time.innerText = "09:00AM to 12:00PM";

    let qp = document.createElement('p')
    qp.innerText = "Qty";

    let input = document.createElement('input');
    input.value = 1;
    input.style.width = '20%';
    

    let btn = document.createElement("button");
    btn.innerText = "ADD";

    
    btn.addEventListener("click",()=>{
        let cartitem = JSON.parse(localStorage.getItem("cartitem")) || [];
        
        ele["quantity"] = input.value
        products2.push(ele)      
        cartitem.push(products2[index])               
        localStorage.setItem("cartitem", JSON.stringify(cartitem))
        alert("Successfully added to cart");
    })

    div.append(image,name,price,text,time,input,btn);
    container2.append(div);

})
