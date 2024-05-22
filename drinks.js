const categories = document.querySelectorAll(".category > *");
const itemsContainer = document.querySelector(".items");

async function fetchData() {
    const req = await fetch("./DrinksJsonData");
    console.log(req)
    const data = await req
        .json()
        .then((data) => {
            console.log(data)
            data.forEach((item) => {
                displayItems(item);
                console.log(item , "=>>");
            });
        })
        .then(addFilter);
    ss();

    const categories = document.querySelectorAll(".category > *");
    console.log(data);
}
fetchData();
function displayItems(item) {
    const div = document.createElement("div");
    div.classList.add(item.category);
    div.classList.add("item");
    div.innerHTML = `

                <div class="img" ><img src="/images/${item.image}" alt="" /></div>
                <div>
                  <h3 class="item--title tname">${item.name}</h3>
                   <p hidden style="font-size:1px" class="card-title tid">${item.id}</p>
                  

                  <p class="price">${item.m} $</p>
                </div>
                <div class="item--hover">
                  <div class="quantity">
                    <button class="plus" type="button">+</button>
                    <span class="num">0</span>
                    <button class="miuns" type="button">-</button>
                  </div>
                  <button type="button" id="addToCart" class="cart">
                    <i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                  </div>
                  <div class="favourite"><i class="fas fa-heart"></i> <input type="checkbox" name="isFavourite" class="tCheck"  ${item.isFavorite ? "checked" : ""}/></div>
                `;
    itemsContainer.appendChild(div);
    const addToCart = div.querySelector(".cart");
    addToCart.addEventListener("click", () => {
        console.log(addToCart);
        console.log(item);
        const quantity = div.querySelector(".num").innerHTML;

        $.ajax({
            url: "/Product/AddToCart",
            type: "POST",
            data: {
                productid: item.id,
                quantity: +quantity,
                price: item.m
            },
            contentType: 'application/x-www-form-urlencoded',
            success: function (response) {
                // Handle success response
                console.log(response); // Example: Log the response to the console
                getCartNumber();

            },
            error: function (xhr, status, error) {
                // Handle error
                console.error(xhr.responseText); // Log the error response to the console
            }
        });
    })

}

function addFilter() {
    const items = document.querySelectorAll(".item");
    categories.forEach((category) => {
        category.addEventListener("click", () => {
            const categoryTitle = category.innerText;
            items.forEach((item) => {
                if (item.classList.contains(categoryTitle)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
    const plusBtn = document.querySelectorAll(".plus");
    plusBtn.forEach((btn) => {
        console.log(btn);
        btn.addEventListener("click", () => {
            const parent = btn.parentElement;
            const value = parent.querySelector(".num");
            console.log("ddsd");
            value.innerText = +value.innerText + 1;
        });
    });
    const miunsBtn = document.querySelectorAll(".miuns");
    miunsBtn.forEach((btn) => {
        console.log(btn);
        btn.addEventListener("click", () => {
            const parent = btn.parentElement;
            const value = parent.querySelector(".num");
            console.log("ddsd");
            if (value.innerText == 0) return;
            value.innerText = +value.innerText - 1;
        });
    });
    console.log(items);
}
function ss() {
    $(document).ready(function () {
        console.log($('.tCheck'));

        $('.tCheck').change(function () {
            console.log("Ahmed");
            var checkbox = $(this);
            var isChecked = checkbox.is(':checked');
            var cardBody = checkbox.closest('.item');
            var Id = cardBody.find('.tid')[0].innerText;
            console.log(Id)
            var Name = cardBody.find('.tname').text();
            console.log(cardBody);
            console.log("Name: " + Name);
            console.log("IsFavorite: " + isChecked);

            $.ajax({
                url: '/Product/Index',
                method: 'post',
                data: {
                    Id: +Id,
                    Name: Name,
                    IsFavorite: isChecked
                },
                contentType: 'application/x-www-form-urlencoded',
                success: function (response) {
                    console.log("response");
                    // Update UI if needed
                    if (isChecked) updateFavorte("add")
                    else if (!isChecked) updateFavorte("remove")
                },
                error: function (xhr, status, error) {
                    console.error(xhr.responseText);
                }
            });
        });
    });
}