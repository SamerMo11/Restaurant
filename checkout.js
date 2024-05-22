const plusBtn = document.querySelector(".plus");
const itemsContainer = document.querySelector(".items--container");
const submitBtn = document.getElementById("checkoutBtn");
const formsContainer = document.querySelector(".forms--container");
const contactInfoForm = formsContainer.querySelector(".contact--info");
const phoneInput = document.querySelector("#phone");
//const contactInfoInputs = contactInfoForm.querySelectorAll("input");
const deliveryMethodForm = document.querySelector(".delivery--method");
const deliveryMethodInputs = deliveryMethodForm.querySelectorAll("input");
const paymentMethodForm = document.querySelector(".payment--method");
const paymentMethodInputs = paymentMethodForm.querySelectorAll("input");
const cardInfo = paymentMethodForm.querySelectorAll(".card--information input");
const cardHolderInput = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNum");
let totalPrice = document.querySelector("#totalPrice span");
let totalPriceValue = 0;

console.log(totalPrice);

async function fetchData() {
    const req = await fetch("/Order/orderData");

    console.log("helol");

    const data = await req.json();
    console.log(data);
    console.log("asasgasash");
    window.localStorage.setItem("orders", JSON.stringify(data));
    data.forEach((ele) => {
        displayOrder(ele);
    });
}
fetchData();
function displayOrder(item) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
                  <div class="item--img"><img src="../images/${item.image}" alt="" /></div>
                  <div>
                    <h2>${item.name}</h2>
                    <div>
                      <p class="price"><span>${item.price * item.quantity}</span>$</p>
                      <div class="quantity">
                        <button class="plus" type="button">+</button>
                        <span class="num">${item.quantity}</span>
                        <button class="miuns" type="button">-</button>
                      </div>
                    </div>
                  </div>
                
  `;

    const price = div.querySelector(".price span");
    console.log(price);

    const itemQuantity = div.querySelector(".num");

    const priceValue = +price.innerHTML / +itemQuantity.innerHTML;
    //console.log(priceValue + +totalPrice.innerHTML);
    totalPrice.innerHTML = (priceValue * +itemQuantity.innerHTML) + +totalPrice.innerHTML;
    console.log(itemQuantity);

    const addBtn = div.querySelector(".plus");
    addBtn.addEventListener("click", () => {
        itemQuantity.innerText = +itemQuantity.innerText + 1;
        price.innerText = priceValue * +itemQuantity.innerText;
        console.log(priceValue);    

        totalPrice.innerHTML = +totalPrice.innerHTML + item.price;
        console.log(totalPrice);
        let orders = localStorage.getItem("orders");
        if (orders) {
            orders = JSON.parse(orders);
            orders.forEach((order) => {
                if (order.id == item.id) {
                    console.log("right");
                    console.log("oredr ==> ", order);
                    order.quantity = +itemQuantity.innerHTML;

                    localStorage.setItem("orders", JSON.stringify(orders));
                }
            });
        }
        console.log(orders);
    });
    const miunsBtn = div.querySelector(".miuns");
    miunsBtn.addEventListener("click", () => {
        if (itemQuantity.innerHTML == 1) return;
        itemQuantity.innerHTML = +itemQuantity.innerHTML - 1;
        price.innerText = priceValue * +itemQuantity.innerText;
        totalPrice.innerHTML = +totalPrice.innerHTML - priceValue;

        let orders = localStorage.getItem("orders");
        if (orders) {
            orders = JSON.parse(orders);
            orders.forEach((order) => {
                if (order.id == item.id) {
                    console.log("right");
                    console.log("oredr ==> ", order);
                    order.quantity = +itemQuantity.innerHTML;

                    localStorage.setItem("orders", JSON.stringify(orders));
                }
            });
        }
    });
    itemsContainer.appendChild(div);
}
submitBtn.addEventListener("click", () => {

    const data = {};
    const contactObj = {};
    let deliveryMethod;
    let paymentMethod;
    let allow = true;
    let address = [];
    const creditCardInfo = {};

    deliveryMethodInputs.forEach((input) => {
        input.checked ? (deliveryMethod = input.id) : "";
    });
    paymentMethodInputs.forEach((input) => {
        input.checked ? (paymentMethod = input.id) : "";
    });
    if (deliveryMethod == "delivery") {
        const city = document.querySelector("#city");
        const detailedAddress = document.querySelector("#address");
        address.push(city.value, detailedAddress.value);
    }


    cardInfo.forEach((input) => {
        creditCardInfo[input.getAttribute("name")] = input.value;
    });



    data["UserAddress"] = address;

    console.log(paymentMethod);
    allow;
    console.log(allow);
    console.log(deliveryMethod);
    data["ContactInfo"] = contactObj;
    data["deliveryMethod"] = deliveryMethod;
    data["paymentMethod"] = paymentMethod;
    data["creditCardInfo"] = creditCardInfo;

    if (allow) postData(data);
});


//function postData(data) {
//    const orders = localStorage.getItem("orders");
//    data["orders"] = JSON.parse(orders);
//    console.log(data);
//    // Assuming data is already prepared

//    $.ajax({
//        url: "/Order/FFF", // Adjust the URL to match your controller and action
//        type: "POST",
//        contentType: "application/json; charset=UTF-8",
//        data: JSON.stringify(data),
//        success: function (response) {
//            // Redirect to the Stripe checkout link
//            window.location.href = response; // Assuming the server returns the Stripe checkout URL
//        },
//        error: function (xhr, status, error) {
//            console.error(xhr.responseText);
//        }
//    });
//}



//function postData(data) {


//    const orders = localStorage.getItem("orders");
//    data["orders"] = JSON.parse(orders);
//    console.log(data);
//    fetch("/Order/FFF", {
//        method: "POST",
//        mode: "no-cors",
//        body: JSON.stringify(data),
//        headers: {
//            "Content-Type": "application/json; charset=UTF-8", // Set the correct Content-Type header
//        },
//    })
//        .then((response) => response.json())
//        .then((json) => console.log(json));

//}

function postData(data) {
    const orders = localStorage.getItem("orders");
    data["orders"] = JSON.parse(orders);
    console.log(data);

    $.ajax({
        url: "/Order/FFF",
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json; charset=UTF-8",
        dataType: "json",
        success: function (json) {
            console.log(json);
            displayMessage("success","Purches Completely Successfully ");
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}


cardHolderInput.addEventListener("input", () => {
    const regEx = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    console.log(cardHolderInput.value.match(regEx));
    console.log();
    if (!regEx.test(cardHolderInput.value)) {
        cardHolderInput.classList.add("error");
        return;
    } else {
        cardHolderInput.classList.remove("error");
    }
    if (cardHolderInput.value.match(regEx)[0] !== cardHolderInput.value) {
        cardHolderInput.classList.add("error");
        console.log("ddd");
    } else {
        cardHolderInput.classList.remove("error");
    }
});
cardNumber.addEventListener("input", () => {
    const regEx = /^[0-9]{16}$/;
    regEx.test(cardNumber.value);
    console.log(regEx.test(cardNumber.value));
    if (regEx.test(cardNumber.value)) {
        cardNumber.classList.remove("error");
    } else {
        cardNumber.classList.add("error");
    }
});