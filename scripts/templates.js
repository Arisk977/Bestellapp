
function starterTemplate(i) {
    return ` <div class="product-card">
                <div class="product-info">
                <h3 class="product-name"> ${ProductArray.starter[i].name} </h3> <br>
                <p class="product-ingredients">${ProductArray.starter[i].ingredients}</p> <br>
                <h4 class="product-price">${ProductArray.starter[i].price.toFixed(2)}€</h4>
                </div>
                
                <div class="order-buttons">
                <img src="./img/plus-solid.svg" height="50px"  class="plus-icon" onclick="addStarterToCart(${i})"></div>
            </div>
            `;
}


function pizzaTemplate(i) {
    return ` <div class="product-card-pizza">
            <div class="product-info-pizza">
            <h3 class="product-name-pizza"> ${ProductArray.Pizzen[i].name}</h3> <br>
            <p class="product-ingredients-pizza">${ProductArray.Pizzen[i].ingredients}</p> <br>
            <h4 class="product-price-pizza"> ${ProductArray.Pizzen[i].price.toFixed(2)}€</h4>
            </div>
            
            <div class="order-buttons">
            <img src="./img/plus-solid.svg" height="50px" class="plus-icon" onclick="addPizzenToCart(${i})"></div>
        </div>`;
}

function dessertTemplate(i) {
    return ` <div class="product-card-dessert">
                        <div class="product-info-dessert">
                        <h3 class="product-name-dessert"> ${ProductArray.dessert[i].name} </h3> <br>
                        <p class="product-ingredients-dessert">${ProductArray.dessert[i].ingredients}</p> <br>
                        <h4 class="product-price-dessert">${ProductArray.dessert[i].price.toFixed(2)}€</h4>
                        </div>
                        
                        <div class="order-buttons">
                        <img src="./img/plus-solid.svg" height="50px"  class="plus-icon" onclick="addDessertToCart(${i})"></div>
                    </div>
                    `;
}



function CartTemplate(index) {
    return `<div class="cart-product">
            <h3>${cartArray[index].name}</h3>
            <div class="order">
                <div class="cart-buttons"><img src="./img/minus-solid.svg" class="minus" onclick="decreaseAmount(${index})"></div>
                <p class="order-amount">${cartArray[index].amount}x</p>
                <div class="cart-buttons"><img src="./img/plus-solid.svg" class="plus" onclick="increaseAmount(${index})"></div>
                <p class="total-price"> €</p>
                <div class="cart-buttons"><img src="./img/trash-solid.svg" class="trash" onclick="removeFromCart(${index})"></div>
            </div></div>`;
}

function TotalPriceTemplate() {
   return `
      <div>
        <h3>Zwischensumme:</h3> <br>
        <h4>Liefergebühren:</h4>
        <h3>Gesamt:</h3>
    </div>
    <div>
        <h3 id="subtotal"></h3> <br>
        <h4 id="delivery-fees"></h4>
        <h3 id="endprice"></h3> 
    </div>
    `
}

function emptyCartTemplate(){
    return ` <div class="no-items"><img src="./img/basket-shopping-solid.svg" alt="basket-shopping"
                                height="100px">
                            <h2>aktuell befinden sich keine Produkte im Warenkorb</h2>
                        </div>`
}

function orderButtonTemplate(){
   return `<button onclick="sendOrder()"> Bestellen</button>`
}