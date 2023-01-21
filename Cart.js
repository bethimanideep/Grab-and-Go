let carts = JSON.parse(localStorage.getItem('cartitems')) || []
let tbody = document.querySelector("tbody")
let chan = document.getElementById('chan')
let fin = document.getElementById('fin')

createtbody(carts)
function createtbody(data) {
    data.forEach(function (ele) {
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

        plus.addEventListener('click', () => {
            ++(sp.innerText)
            let sum = +(td4.innerText) + ele.mrp
            td4.innerText = sum
            chan.innerText = Number(chan.innerText) + ele.mrp
            fin.innerText=chan.innerText

        })
        minus.addEventListener('click', () => {
            if (sp.innerText > 1) {
                --(sp.innerText)
                let sum = +(td4.innerText) - ele.mrp
                td4.innerText = sum
                chan.innerText = Number(chan.innerText) - ele.mrp
                fin.innerText=chan.innerText
            }
        })
        let num = 0
        data.forEach((ele) => {
            num += ele.mrp * ele.quantity
        })
        chan.innerText = num
        fin.innerText=chan.innerText


    })
}



