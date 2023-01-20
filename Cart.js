let carts = JSON.parse(localStorage.getItem('cartitem')) || []
let tbody=document.querySelector("tbody")

createtbody(carts)
function createtbody(data) {
    data.forEach(function (ele) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = ele.name;
        let td2 = document.createElement("td");
        td2.innerText = ele.mrp;
        let td3 = document.createElement("td");
        td3.innerText = ele.packsize;
            let td4 = document.createElement("td");
        td4.innerText = ele.mrp;
            let td5 = document.createElement("td");
        td5.innerText = ele.discount;
        tr.append(td1, td2, td3, td4, td5);
        tbody.append(tr);
    });
}



