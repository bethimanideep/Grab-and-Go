let baseURL = `https://63c6633cdcdc478e15c05f89.mockapi.io`
let logineduser = JSON.parse(localStorage.getItem("logineduser")) || []
let address = localStorage.getItem('address')
let total = localStorage.getItem('totalcost')
let addnew = document.getElementById('addnew')
let pr = document.getElementById("PR")
let tr = document.getElementById("TR")
let br = document.getElementById("BR")
let pay = document.getElementById("PAY")
pay.addEventListener('click', () => {
    let obj = { cart: logineduser[0].cart }
    // logineduser[0].name = "Mani"
    fetch(`${baseURL}/users/${logineduser[0].id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    window.location.href = "Order.html"
})

addnew.innerText = address


pr.innerText = total
tr.innerText = total
br.innerText = total


document.querySelector("#bt").addEventListener("click", function () {
    window.location.replace("address.html");
});
document.querySelector("#app").addEventListener("click", function () {
    let sum = 0;
    let sal = 0;
    let INP = document.querySelector("#VAl").value;
    if (INP == "big123") {
        let final = 0;
        let arr = JSON.parse(localStorage.getItem("carts"));
        for (let i = 0; i < arr.length; i++) {
            final += arr[i];
        }
        sum = final - 0.2 * final;
        sal = 0.2 * final;
        document.querySelector("#BR").innerText = sum;
        document.querySelector("#TR").innerText = sal.toFixed(2);
        alert("Hurray..!! 20% discount applicable.");
    } else {
        alert("Worng Code");
    }
});

let final = 0;
let arr = JSON.parse(localStorage.getItem("carts"));
for (let i = 0; i < arr.length; i++) {
    final += Number(arr[i]);
}
document.querySelector("#PR").innerText = final;
document.querySelector("#BR").innerText = final;