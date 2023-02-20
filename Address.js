let nam=document.getElementById('name')
let city=document.getElementById('city')
let pin=document.getElementById('pin')
let add=document.getElementById('add')
let data= JSON.parse(localstorage.getItem("logineduser"))||[]
let total=localStorage.getItem('totalcost')
let pr=document.getElementById("PR")
let tr=document.getElementById("TR")
let br=document.getElementById("BR")


pr.innerText=total
tr.innerText=total
br.innerText=total


document.querySelector("#button4").addEventListener("click", function () {
  let val=`${nam.value},${city.value},${add.value},${pin.value}`
  localStorage.setItem('address',val)
  window.location.href = "Payment.html"
});
