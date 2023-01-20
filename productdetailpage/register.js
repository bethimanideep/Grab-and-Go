let myRegisterDataArr =
    JSON.parse(localStorage.getItem("myRegisterData")) || [];

function registerData() {
    //   e.preventDefault();

    let Unique_id = document.getElementById("unique_id").value;
    let Name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    // let Priority = document.getElementById("priority").value;
    // let Vaccine = document.getElementById("vaccine").value;

    let myRegisterData = {
        Unique_id: Unique_id,
        Name: Name,
        email: email,
        pass: pass,

        otp: Math.floor(Math.random() * 1000) + 1000
    };
    myRegisterDataArr.push(myRegisterData);

    localStorage.setItem("myRegisterData", JSON.stringify(myRegisterDataArr));

    window.location.href = "dashboard.html";
}
