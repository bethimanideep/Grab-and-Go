let baseURL = `https://63c6633cdcdc478e15c05f89.mockapi.io`
let logineduser = JSON.parse(localStorage.getItem("logineduser")) || []
let address=localStorage.getItem('address')
let total=localStorage.getItem('totalcost')
let addnew=document.getElementById('addnew')
let pr=document.getElementById("PR")
let tr=document.getElementById("TR")
let br=document.getElementById("BR")
let pay=document.getElementById("PAY")
pay.addEventListener('click',()=>{
    let obj = { cart: logineduser[0].cart }
    // logineduser[0].name = "Mani"
    fetch(`${baseURL}/users/${logineduser[0].id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    window.location.href="Order.html"
})

addnew.innerText=address


pr.innerText=total
tr.innerText=total
br.innerText=total