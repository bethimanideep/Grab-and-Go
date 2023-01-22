let carts = JSON.parse(localStorage.getItem('logineduser')) || []
let tbody = document.querySelector("tbody")
let chan = document.getElementById('chan')
let fin = document.getElementById('fin')
let item = document.getElementById('Item')
item.innerHTML=carts[0].cart.length
console.log(carts[0].cart);
createtbody(carts[0].cart)
function createtbody(data) {
    tbody.innerHTML = null
    data.forEach(function (ele, i) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = ele.name;
        let td2 = document.createElement("td");
        td2.innerText = `₹ ${ele.mrp}`
        let td3 = document.createElement("td");
        let div = document.createElement('div')
        let plus = document.createElement('button')
        let minus = document.createElement('button')
        let sp = document.createElement('span')
        sp.innerText = ele.quantity
        plus.innerText = '+'
        minus.innerText = '-'
        let td4 = document.createElement("td");
        td4.innerText = ele.mrp * ele.quantity
        let del = document.createElement("button");
        del.innerText = "X";
        del.style.padding = '0px 40px'
        del.style.border = 'none'
        del.style.color = 'red'
        del.style.cursor = 'pointer'

        let td5 = document.createElement("td");
        td5.innerText = ele.discount;
        minus.style.padding = '0px 10px'
        plus.style.padding = '0px 10px'
        sp.style.margin = '0px 10px'
        div.append(minus)
        div.append(sp)
        div.append(plus)
        td3.append(div)
        tr.append(td1, td2, td3, td4, td5);
        tbody.append(tr);
        console.log(ele);
        td5.append(del)


        plus.addEventListener('click', () => {
            ++(sp.innerText)
            let sum = +(td4.innerText) + Number(ele.mrp)
            console.log(td4.innerText);
            td4.innerText = sum
            chan.innerText = Number(chan.innerText) + Number(ele.mrp)
            fin.innerText = chan.innerText
            // carts[mrp] = sum
            // localStorage.setItem('cartitem', JSONj.stringify(carts))

        })
        minus.addEventListener('click', () => {
            if (sp.innerText > 1) {
                --(sp.innerText)
                let sum = +(td4.innerText) - ele.mrp
                td4.innerText = sum
                chan.innerText = Number(chan.innerText) - ele.mrp
                fin.innerText = chan.innerText
                
            }
        })
        let num = 0
        data.forEach((ele) => {
            num += ele.mrp * ele.quantity
        })
        chan.innerText = num
        fin.innerText = chan.innerText
        


        del.addEventListener("click", () => {
            let arr = carts[0].cart.filter((ele, index) => {
                if (i == index) {
                    return false
                } else {
                    return true
                }
            })
            carts[0].cart = arr
            localStorage.setItem('logineduser', JSON.stringify(carts))

            createtbody(carts[0].cart)
        })

    })
}

document.querySelector("#butt0").addEventListener("click", function () {
    localStorage.removeItem("cartitem");
    window.location.reload();
});
document.querySelector("#butt1").addEventListener("click", function () {
    window.location.href="Products/Allproduct.html"
});

document.querySelector("#check").addEventListener("click", function () {
    localStorage.setItem('totalcost',chan.innerText)
    window.location.href = "Address.html"

});



