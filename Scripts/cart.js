var torender = JSON.parse(window.localStorage.getItem("torender")) || [];
// let torender = JSON.parse(localStorage.getItem("logineduser")) || []
// console.log("VaccinatedData:", VaccinatedData);
const prod = document.querySelector(".products");
const similar = document.querySelector(".similar");



rendercard(torender)

function rendercard(data) {
  data.forEach(element => {
    console.log(element)
    const card = document.createElement("div")
    card.className = "card"
    const img = document.createElement("img")
    img.className = "cardimg"
    img.src = element.image
    const brand = document.createElement("a")
    brand.className = "cardbrand"
    brand.innerHTML = element.brand
    const name = document.createElement("p")
    name.className = "name"
    name.innerHTML = element.name

    const table = document.createElement("table")
    const tr1 = document.createElement("tr")
    tr1.className = "mrptd"
    const td1 = document.createElement("td")
    td1.innerHTML = "MRP:"
    const span1 = document.createElement("span")
    span1.className = "mrp"
    span1.innerHTML = "Rs." + element.mrp

    const td2 = document.createElement("td")
    td2.className = "price"
    actprc = element.mrp * (100 - element.discount) / 100
    td2.innerHTML = "Rs " + actprc

    const tr2 = document.createElement("tr")
    tr2.className = "save"
    const td3 = document.createElement("td")
    td3.innerHTML = "You save:"
    const span2 = document.createElement("span")
    span2.className = "perct"
    span2.innerHTML = element.discount + " %"

    const quant = document.createElement("p")
    quant.className = "quant"
    quant.innerHTML = "Quantity: " + element.quantity





    td1.append(span1)
    tr1.append(td1, td2)
    td3.append(span2)
    tr2.append(td3)
    table.append(tr1, tr2)




    // const add = document.createElement("button")
    // add.className = ("addbtn")
    // add.innerHTML = "ADD"

    // add.addEventListener("click", () => {
    //   let cartitem = JSON.parse(localStorage.getItem("cartitem")) || []
    //   element.quan = 1
    //   cartitem = cartitem.filter(item => item.name != element.name)        //update obj with original obj and id
    //   cartitem.push(element)                    //update obj with original obj
    //   localStorage.setItem("cartitem", JSON.stringify(cartitem))
    //   alert("Successfully added to cart")
    // })


    card.append(img, brand, name, table, quant)
    prod.append(card)


    card.addEventListener("click", (e) => {
      if (e.target.getAttribute("class") != "addbtn") {
        localStorage.setItem("productdetails", JSON.stringify(element))
        setTimeout(() => {
          window.location.href = "./productdetail.html"
        }, 500)
      }
    })
  });
}
