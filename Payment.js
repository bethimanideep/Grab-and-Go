let address=localStorage.getItem('address')
let total=localStorage.getItem('totalcost')
let addnew=document.getElementById('addnew')
let pr=document.getElementById("PR")
let tr=document.getElementById("TR")
let br=document.getElementById("BR")
addnew.innerText=address


pr.innerText=total
tr.innerText=total
br.innerText=total