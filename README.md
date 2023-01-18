# loyal-elbow-6166

API LINK:-
https://63c6633cdcdc478e15c05f89.mockapi.io/products

CATEGORIES:-
fruits
bakery
bevarages
SnacksFood
cleaninghousehold
foodgrains&oils&masala

******* TO GET DATA IN ARRAY REPLACE "CATEGORIES" WITH THE ABOVE NAMES ******
USAGE:-
fetch("https://63c6633cdcdc478e15c05f89.mockapi.io/products")
        .then((res) => res.json())
        .then((data) => {
            console.log(data[0]."CATEGORIES");
        })

