const ordersContainer = document.querySelector(".table");
const orderDetailsDiv = document.querySelector(".choosed--order");
const statusList = document.querySelector(".status--list");
const currStatu = document.querySelector(".curr--statu .curr--value");
const editOrderDetailsForm = document.querySelector(".order--details");
let statusValues = statusList.querySelectorAll("*");
const orderItems = document.querySelector(".items--details ul");
const userInfo = document.querySelector(".client--details ul");
//------------
const orderID = document.getElementById("orderID");
//------------

statusValues.forEach((stat) => {
    stat.addEventListener("click", () => {
        currStatu.innerText = stat.innerText;

        //------------
        editStatu(stat.innerText)
        //------------


    });
});
//------------

async function editStatu(status) {
    console.log(
        {
            orderid: +orderID.innerHTML,
            status: status,
        }
    )
    fetch('/Dashboard/UpdateOrder', {
        method: 'POST',
        body: JSON.stringify({
            orderid: +orderID.innerHTML,
            status: status,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

        .then((response) => { response.json(); location.reload(); })
        .then((json) => console.log(json));
}
//------------
async function DeleteOrder(id) {
    fetch('/Dashboard/DeleteOrder', {
        method: 'POST',
        body: JSON.stringify({
            orderid: id
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => {
            console.log(response.json());
            location.reload();
        })
        .then((json) => console.log(json));

}
console.log(statusList);
let order;
let myData;
async function fetchData() {
    const data = await fetch("/Dashboard/getOrderData", {});
    const dataJson = await data.json();

    console.log(dataJson);
    for (let i = 0; i < dataJson.length; i++) {
        addOrder(dataJson[i]);
    }
    const editBtns = document.querySelectorAll(".edit");
    //editBtns.forEach((btn) =>
    //  btn.addEventListener("click", function () {
    //    const order = btn.parentElement.parentElement;
    //    displayOrderDetails(order);
    //    // order = editPage(btn);
    //    // localStorage.setItem("order", JSON.stringify(displayOrderDetails(order)));
    //    // window.location.href = "/order.html";
    //  })
    //);
}

function addOrder(order) {
    const div = document.createElement("div");
    div.classList.add("order");
    div.innerHTML = ` <p class="order_id">${order.orderId}</p>
              <p  class="order_client">${order.client}</p>
              <p  class="order_date">${order.date}</p>

              <p aria-label="${order.statu}"><span><span class="point"></span> ${order.statu}</span></p>
              <p class="order_total">${order.total}</p>
              <div class="control">
                <button class="edit"><i class="fas fa-pencil-alt"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
              </div>`;
    ordersContainer.appendChild(div);
    const editBtn = div.querySelector(".edit");
    editBtn.addEventListener("click", () => {
        displayOrderDetails(order)
    })
    const deleteBtn = div.querySelector(".delete");
    deleteBtn.addEventListener("click", () => DeleteOrder(order.orderId))
}
fetchData();
function editPage(editBtn) { }
orderDetailsDiv.addEventListener("click", (e) => {
    e.target.classList.contains("choosed--order")
        ? orderDetailsDiv.classList.remove("active")
        : "";
    if (
        !e.target.classList.contains("curr--statu") &&
        !e.target.classList.contains("val") &&
        !e.target.parentElement.classList.contains("arrow") &&
        !e.target.classList.contains("curr--value")
    ) {
        statusList.classList.remove("active");
    } else {
        statusList.classList.toggle("active");
    }
});
function displayOrderDetails(order) {
    console.log("ddddd");
    console.log(order)
    //const orderId = order.querySelector(".order_id").innerText;
    //const orderClient = order.querySelector(".order_client").innerText;
    //const orderDate = order.querySelector(".order_date").innerText;
    //const orderstatus = order
    //  .querySelector("[aria-label]")
    //  .getAttribute("aria-label");
    //const orderTotal = order.querySelector(".order_total").innerHTML;
    orderDetailsDiv.classList.toggle("active");
    const inputs = editOrderDetailsForm;
    const orderId = editOrderDetailsForm.querySelector("#orderID");
    orderId.innerHTML = order["orderId"];
    console.log(order["orderId"])
    const date = editOrderDetailsForm.querySelector("#date");
    date.innerHTML = order["date"];
    const currStatu = document.querySelector(".curr--value");
    currStatu.innerHTML = order["statu"];
    const totalPrice = document.querySelector("#totalPrice");
    totalPrice.innerHTML = order["total"];
    orderItems.innerHTML = ""

    postData({
        orderId: order.orderId,

    })
    return {
        //order_num: orderId,
        //client: orderClient,
        //date: orderDate,
        //status: orderstatus,
        //total: orderTotal,
    };
}
const statusDiv = document.querySelector(".status");
async function postData(data) {
    console.log(data)
    fetch("/Dashboard/getOrderDetailsData", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8", // Set the correct Content-Type header
        },
    })
        .then((response) => response.json())
        .then((json) => {
            const dataItems = json.items;
            dataItems.forEach((item) => addOrderItem(item))
            console.log(json)
            displayUserInfo(json.userinfo[0]);

        });
}

function addOrderItem(item) {
    const li = document.createElement("li");
    li.innerHTML = `
                    <p>
                        x<span class="num">${item.quantity}</span>
                        <span class="item--name">${item.productName}</span>
                        price
                    </p>
                    <span class="val">${item.price}</span>
                 `;
    orderItems.appendChild(li);

}
function displayUserInfo(user) {
    userInfo.innerHTML = "";

    for (let [key, value] of Object.entries(user)) {
        const li = document.createElement("li");
        li.innerHTML = `
         <span>${key}</span>
                    <span class="val">${value}</span>`
        userInfo.appendChild(li)
    }

}