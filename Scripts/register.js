// let myRegisterDataArr =
//     JSON.parse(localStorage.getItem("myRegisterData")) || [];
let baseURL = `https://63c6633cdcdc478e15c05f89.mockapi.io`

const btn = document.getElementById("btn")
btn.addEventListener("click", (e) => {
    e.preventDefault();
    registerData()
})
function registerData() {
    // e.preventDefault();
    console.log(5)
    // let Unique_id = document.getElementById("unique_id").value;
    let Name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    // let Priority = document.getElementById("priority").value;
    // let Vaccine = document.getElementById("vaccine").value;

    let myRegisterData = {
        // Unique_id: Unique_id,
        name: Name,
        email: email,
        password: pass,
        confirmPassword: pass,
        cart: [],
        address: []
        // otp: Math.floor(Math.random() * 1000) + 1000
    };
    console.log(myRegisterData)
    registeration(myRegisterData)
}

// myRegisterDataArr.push(myRegisterData);

async function registeration(obj) {
    try {
        let res = await fetch(`${baseURL}/users`, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        });

        let register_request = await res.json();
        if (res.ok) {
            alert('Signed-up Successfully 🙂')
            window.location.href = "../routes/dashboard.html";
            // console.log(register_request)
        }
        else {
            alert("Wrong request.");
        }
    } catch (error) {
        alert("Something went wrong. Please try again later.");
    }

    // localStorage.setItem("myRegisterData", JSON.stringify(myRegisterDataArr));

    // window.location.href = "dashboard.html";
}
