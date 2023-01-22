
var redirect = document.querySelector("#mybtn").addEventListener("click", registeration);

function registeration() 
{
    window.location.href = '../routes/signup.html'
}

let baseURL = `https://63c6633cdcdc478e15c05f89.mockapi.io`



document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let obj={
    'email' : document.querySelector("#email").value,
    'password' : document.querySelector("#password").value

    }

    signin(obj);

});


async function signin(obj) {
    if (obj.email == "admin" && obj.password == "admin") {
        window.location.href = "../routes/admin.html";
    } else if (obj.email !== "admin" && obj.password !== "admin") {
        
        fetch(`${baseURL}/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                let arr = data
                console.log(data)
                let temp = []
                let verify = false;
                for (let i = 0; i < arr.length; i++) {
                    if (obj.email == arr[i].email && obj.password == arr[i].password) {
                        temp.push(arr[i])
                        verify = true;
                        break;
                    }
                }
                console.log(temp)
                if (verify == true) {
                    localStorage.setItem('logineduser', JSON.stringify(temp))
                    alert('Logged-in Successfully 🙂');
                    // let cartVar = document.getElementById("cartCount");
                    // console.log(cartVar)
                    // cartVar.innerHTML = logineduser[0].cart.length;
                    // let logineduser = JSON.parse(localStorage.getItem("logineduser")) || [];

                    // let userName = document.getElementById("login");
                    // userName.innerText = logineduser[0].name;
    
                     window.location.href = "../index.html"

                } else {
                    alert('wrong credentials')
                }
            })
            .catch((error)=>{
                alert('api error')
            })
            
    }
}

const logout = document.querySelector(".logout")
logout.addEventListener("click", () => {
    alert("Logged out successfully")
    localStorage.clear()
    window.location.href = "../index.html"

})