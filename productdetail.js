// let product = JSON.parse(localStorage.getItem("cartitem")) || []
let product = {
    "brand": "freesho",
    "mrp": 888,
    "name": "Tender Coconut Water - No Added Sugar, Flavours",
    "image": "https://www.bigbasket.com/media/uploads/p/s/1214886_8-fresho-tender-coconut-water-no-added-sugar-flavours.jpg",
    "description": "A glass of coconut water a day keeps the doctor away. Fresho brings you the refreshing experience with a bottle of natural tender coconut water. Quench your thirst and enlighten your body with goodness. Leave the mess and fuss of popping open a tender coconut. You can just open the cap and sip the delicious sweetness whenever you please. It’s a perfect option to hydrate yourself while working out, when at the office, or traveling. Explore Fresho's full range of Juices, Syrups, Concentrates and enjoy.",
    "discount": 20,
    "country": "china",
    "season": "summer",
    "packsize": "500gm"
}



const prodcont = document.querySelector(".prod_cont")
const prodimg = document.querySelector(".prodimg>img")
const brand = document.querySelector(".brand")
const names = document.querySelector(".name")
const mrp = document.querySelector(".mrp")
const price = document.querySelector(".prc")
const perc = document.querySelector(".save td span")
const desch2 = document.querySelector(".desch2")
const detail = document.querySelector(".aboutdetail>div>ul>li")
const pack1size = document.querySelector(".pack1size")
const pack2size = document.querySelector(".pack2size")
const pack3size = document.querySelector(".pack3size")
const pack1price = document.querySelector(".pack1price")
const pack2price = document.querySelector(".pack2price")
const pack3price = document.querySelector(".pack3price")


const imgzoom = document.querySelector(".imgzoom")
const imgzoomimg = document.querySelector(".imgzoom img")
const simg = document.querySelectorAll(".simg img")

const plus = document.querySelectorAll(".plus")
const none1 = document.querySelector(".none1")
const none2 = document.querySelector(".none2")
const none3 = document.querySelector(".none3")
const none4 = document.querySelector(".none4")

const packsize = document.querySelector(".pack_size")
const pack1 = document.querySelector(".pack1")
const pack2 = document.querySelector(".pack2")
const pack3 = document.querySelector(".pack3")
const pack1img = document.querySelector(".pack1 div:nth-child(3)")
const pack2img = document.querySelector(".pack2 div:nth-child(3)")
const pack3img = document.querySelector(".pack3 div:nth-child(3)")

const basket = document.querySelector(".basket")
const inc = document.querySelector(".inc")
const dec = document.querySelector(".dec")
const quant = document.querySelector(".quant")
const saveit = document.querySelector(".saveit")




imgzoomimg.src = product.image

for (let key of simg) {
    key.src = product.image
    key.addEventListener("click", () => {
        prodimg.src = ""
        setTimeout(() => {
            prodimg.src = product.image
        }, 0.1)
    })
}


prodimg.addEventListener("click", () => {
    imgzoom.classList.toggle("none")
    prodcont.classList.toggle("opac")
})

actprice = product.mrp * (100 - product.discount) / 100
prodimg.src = product.image
brand.innerHTML = product.brand
names.innerHTML = product.name
mrp.innerHTML = "Rs. " + product.mrp
price.innerHTML = `Rs. ${actprice}/kg`
perc.innerHTML = product.discount + "%"
desch2.innerHTML = product.name
detail.innerHTML = product.description

const sizeofpacklength = product.packsize.length
let sizeofpack = +product.packsize.slice(0, sizeofpacklength - 2)
if (sizeofpack > 1)
    sizeofpack = sizeofpack / 1000


pack3size.innerHTML = product.packsize
pack3price.innerHTML = `Rs.  ${actprice * sizeofpack} (Save ${product.discount}% /kg)`
pack2size.innerHTML = 2 + "Kg"
pack2price.innerHTML = `Rs.  ${actprice * 2 - 5} (Save ${product.discount + 2.1}%)`
pack1size.innerHTML = 5 + "Kg"
pack1price.innerHTML = `Rs.  ${actprice * 5 - 10} (Save ${product.discount + 5.2}%)`




for (let key of plus) {
    console.log(key)
    key.addEventListener("click", (e) => {
        block(e.target.dataset.id)
    })
}


function block(id) {
    console.log(id)
    if (id == 1) {
        none1.classList.toggle("block")
        none1.classList.toggle("none")
    }
    if (id == 2) {
        none2.classList.toggle("block")
        none2.classList.toggle("none")
    }
    if (id == 3) {
        none3.classList.toggle("block")
        none3.classList.toggle("none")
    }
    if (id == 4) {
        none4.classList.toggle("block")
        none4.classList.toggle("none")
    }
}


packsize.addEventListener("click", (e) => {
    console.log(e.target.getAttribute("class"))
    pack1img.classList.remove("darkgreen")
    pack2img.classList.remove("darkgreen")
    pack3img.classList.remove("darkgreen")
    pack1.classList.remove("lightgreen")
    pack2.classList.remove("lightgreen")
    pack3.classList.remove("lightgreen")

    if (e.target.getAttribute("class") == "pack1") {
        pack1.classList.add("lightgreen")
        pack1img.classList.add("darkgreen")
    }
    if (e.target.getAttribute("class") == "pack2") {
        pack2.classList.add("lightgreen")
        pack2img.classList.add("darkgreen")
    }
    if (e.target.getAttribute("class") == "pack3") {
        pack3.classList.add("lightgreen")
        pack3img.classList.add("darkgreen")
    }
})

basket.addEventListener("click", () => {
    inc.classList.remove("none")
    dec.classList.remove("none")
    saveit.classList.remove("none")
    basket.classList.add("none")
    product.quan = 1
})

dec.addEventListener("click", () => {
    quant.innerHTML = +quant.innerHTML - 1
    product.quan = +quant.innerHTML        //update obj with original obj
})
inc.addEventListener("click", () => {
    quant.innerHTML = +quant.innerHTML + 1
    product.quan = +quant.innerHTML       //update obj with original obj
})

saveit.addEventListener("click", () => {
    let cartitem = JSON.parse(localStorage.getItem("cartitem")) || []
    cartitem = cartitem.filter(item => item.name != product.name)        //update obj with original obj and id
    cartitem.push(product)                //update obj with original obj
    localStorage.setItem("cartitem", JSON.stringify(cartitem))
    alert("Successfully added to cart")
    quant.innerHTML = 1
})




// fetch("https://63c6633cdcdc478e15c05f89.mockapi.io/products").then((res) => res.json()).then((data) => { console.log(data[0]) })