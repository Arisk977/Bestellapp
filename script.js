function init() {
    renderCategory('starter', starterTemplate);
    renderCategory('Pizzen', pizzaTemplate);
    renderCategory('dessert', dessertTemplate);
    if (localStorage.length > 0) {
        getFromLocalStorage();
    }
    if (cartArray.length > 0) {
        renderCart();
    }
    else{
        renderEmptyCart();
    }
    
}

function renderCategory(elementId, templateFunction) {
    const elementRef = document.getElementById(elementId);
    elementRef.innerHTML = '';
    for (let i = 0; i < ProductArray[elementId].length; i++) {
        elementRef.innerHTML += templateFunction(i);
    }
}


function pushProductToCart(category, i) {
    let ProductToCart = {
        'name': ProductArray[category][i].name,
        'price': ProductArray[category][i].price,
        'amount': 1,
    };

    let cartIndex = cartArray.findIndex(item => item.name === ProductArray[category][i].name);

    if (cartIndex === -1) {
        cartArray.push(ProductToCart);
    } else {
        increaseAmountFromProductCard(cartIndex);
    }
}


function renderCart() {
    
    let cartRef = document.getElementById('order');
    let totalSumRef = document.getElementById('order-endprice');
    let orderButtonRef= document.getElementById('button');

    cartRef.innerHTML = '';
    totalSumRef.innerHTML = '';
    orderButtonRef.innerHTML = '';
    for (let index = 0; index < cartArray.length; index++) {
        cartRef.innerHTML += CartTemplate(index);
        totalSumRef.innerHTML = TotalPriceTemplate();
        orderButtonRef.innerHTML = orderButtonTemplate();
        calcProductPrices(index);
        CalcEndprice();
        saveToLocalStorage(index)
    }
}

function calcProductPrices(index){
    const totalPriceRef = document.getElementsByClassName('total-price');

    
    const calcTotalPrice = (cartArray[index].price * cartArray[index].amount).toFixed(2);
    totalPriceRef[index].innerHTML = calcTotalPrice + " €";
}

function CalcEndprice() {
    let subtotal = document.getElementById('subtotal');
    let sum = 0;
    let deliveryFeesRef = document.getElementById('delivery-fees');
    let deliveryFees = 2
    let endpriceRef = document.getElementById('endprice');

    for (let index = 0; index < cartArray.length; index++) {
        let calculateSubtotal = sum += (cartArray[index].price * cartArray[index].amount);
        subtotal.innerHTML = calculateSubtotal.toFixed(2) + ' €';
        deliveryFeesRef.innerHTML = '+ ' + deliveryFees.toFixed(2) + ' €';
        let endprice = calculateSubtotal + deliveryFees;
        endpriceRef.innerHTML = endprice.toFixed(2) + ' €';
    }
}

function addStarterToCart(i) {
    pushProductToCart('starter', i)
    renderCart();
}

function addPizzenToCart(i) {
    pushProductToCart('Pizzen', i);
    renderCart();
}

function addDessertToCart(i) {
    pushProductToCart('dessert', i);
    renderCart();
}

function increaseAmount(index) {
    cartArray[index].amount++;

    let cartAmountRef = document.getElementsByClassName('order-amount');
    cartAmountRef[index].innerHTML = cartArray[index].amount + ' x';
    renderCart();
}

function increaseAmountFromProductCard(index) {
    cartArray[index].amount += 1;
}


function decreaseAmount(index) {
    let cartAmountRef = document.getElementsByClassName('order-amount');
    if (cartArray[index].amount > 1) {
        cartArray[index].amount--;
        cartAmountRef[index].innerHTML = cartArray[index].amount + ' x';
    }
    else {
        cartArray[index].amount--;
        removeFromCart(index);
    }
    renderCart();
}

function removeFromCart(index) {
    removeFromLocalStorage(index);
    cartArray.splice(index, 1);
    renderCart();
    renderEmptyCart();
}

function saveToLocalStorage(index) {
    localStorage.setItem(cartArray[index].name, JSON.stringify(cartArray[index]))
}

function removeFromLocalStorage(index) {
    localStorage.removeItem(cartArray[index].name);
}


function getFromLocalStorage() {
    cartArray = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = localStorage.getItem(key);
        const parsedItem = JSON.parse(item);

        cartArray.push(parsedItem);
    }
    renderCart();
}

function renderEmptyCart(){
    let orderContainer= document.getElementById('order');

    if (cartArray.length === 0 && localStorage.length === 0) {
    orderContainer.innerHTML = '';
    orderContainer.innerHTML = emptyCartTemplate();}
}

function toggleCart(){
    cartRef= document.getElementById('cart');
    mainRef= document.getElementById('main');
    shoppingCartRef= document.getElementById('shopping-cart')

    cartRef.classList.toggle('toggle');
    mainRef.classList.toggle('main-overflow');
    shoppingCartRef.classList.toggle('clicked');
}

function sendOrder(){
    let orderRef= document.getElementById('order');
    let orderOverlayRef = document.getElementById('order-overlay');
    let totalSumRef = document.getElementById('order-endprice');
    let orderButtonRef= document.getElementById('button');

    localStorage.clear();
    orderRef.innerHTML= '';
    totalSumRef.innerHTML= '';
    orderButtonRef.innerHTML= '';
    orderOverlayRef.classList.remove('d_none');
}

function removeOverlay(){
    let orderOverlayRef= document.getElementById('order-overlay');

    orderOverlayRef.classList.add('d_none');
    window.location.href = './index.html'
}