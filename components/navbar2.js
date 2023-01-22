let navbar = () => {
    const username = JSON.parse(localStorage.getItem("logineduser")) || []
    // alert(username[0].name)
    console.log(username)
    let name = "Login/signup"
    let item = 0
    if (username.length != 0) {
        name = username[0].name
        item = username[0].cart.length

    }

    return ` <div id="nav">
    <div class="first-box">

        <div class="logo"><a href="index.html"><img src="logo.png" alt=""></a></div>

        <div class="category-drop"><p>SHOP BY CATAGORY<i class="fas fa-angle-down"></i></p>
        <div class="dropdown">
           <ul type = "none">
               <li><a href="/Products/Allprodut.html">Fruits and vegetables</a></li>
               <li><a href="#">Food grains, Oil & Masala</a></li>
               <li><a href="#">Bakery, Cakes & Dairy</a></li> 
               <li><a href="#">Beverages</a></li> 
               <li><a href="#">Snacks & Branded Foods</a></li> 
               <li><a href="#">Beauty & Hygiene</a></li> 
               <li><a href="#">Cleaning & Household</a></li> 
               <li><a href="#">Kitchen, Garden & Pets</a></li> 
               <li><a href="#">Eggs, Meat & Fish</a></li> 
               <li><a href="#">Gourmet & World Food</a></li> 
               <li><a href="#">Baby Care</a></li> 
               <li><a href="#">View All</a></li> 
           </ul>
        </div>
        </div>
    </div>
    <div class="Second-box">
        <div class="phone"><span><i class="fa-solid fa-phone"></i></span> 1860 123 1000</div>
        <div class="input-area"><input type="text" id="search" placeholder="Search for Products..."><button id="btn"><i class="fa-solid fa-magnifying-glass"></i></button></div>
        <div class="offer"><span class="offers"><i class="fas fa-tag"></i> OFFERS</span><span class="empty"></span></div>
    </div>
    <div class="third-box">
        <div class="bangalore"><i class="fas fa-map-marker-alt"></i> <span>560004, Bangalore <i class="fas fa-angle-down"></i></span> <i class="far fa-user"></i><a href="/routes/login.html" id ="login">${name}</a></div>

        <button class="cart-btn"><a href="cart.html"><i class="fas fa-shopping-basket fa-3x"></i> <span><sup>My Basket</sup></span><p id="cartCount">${item} items</p></a></button>
    </div>
</div>
    `
}

export { navbar };


