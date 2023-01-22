let baseURL = `https://63c6633cdcdc478e15c05f89.mockapi.io`

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let obj = {
        'name': document.querySelector("#name").value,
        'email': document.querySelector("#email").value,
        'password': document.querySelector("#password").value,
        'confirmPassword': document.querySelector("#confirm-password").value,
        'cart': [],
        'address': []
    }


    registeration(obj);
});

// --------------- Form Validation------------------

function validForm(obj) {
    if (obj.username == "") {
        document.getElementById("name").innerHTML = "Please fill the name";
        return false;
    }
    if (obj.username.length <= 4 || obj.username.length > 15) {
        document.getElementById("name").innerHTML = "Name length should be between 4 and 15";
        return false;
    }


    if (obj.email == "") {
        document.getElementById("email").innerHTML = "Please fill the email";
        return false;
    }

    if (obj.confirmEmail == "") {
        document.getElementById("confirm-email").innerHTML = "Please confirm email";
        return false;
    }
    if (obj.email != obj.confirmEmail) {
        document.getElementById("email").innerHTML = "Email does not match";
        return false;
    }

    if (obj.password == "") {
        document.getElementById("password").innerHTML = "Please fill the password";
        return false;
    }
    if (obj.password.length <= 7 || obj.password.length > 12) {
        document.getElementById("password").innerHTML = "Password should be in between 7 and 12";
        return false;
    }

    if (obj.confirmPassword == "") {
        document.getElementById("confirm-password").innerHTML = "Please confirm password";
        return false;
    }
    if (obj.password != obj.confirmPassword) {
        document.getElementById("password").innerHTML =
            "Password does not match";
        return false;
    }
    if (obj.mobile_number == "") {
        document.getElementById("phone_number").innerHTML = "Please fill the number";
        return false;
    }
    if (isNaN(obj.mobile_number)) {
        document.getElementById("phone_number").innerHTML = "Please fill numbers , Other characters not allowed";
        return false;
    }
    if (obj.mobile_number.length != 10) {
        document.getElementById("phone_number").innerHTML = " Number should be of 10 digits";
        return false;
    }

    return true;
}



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
            window.location.href = "../routes/login.html"
            // console.log(register_request)
        }
        else {
            alert("Wrong request.");
        }
    } catch (error) {
        alert("Something went wrong. Please try again later.");
    }


}