"use strict";
function getProduct() {
    return fetch('/product.json')
        .then(res => res.json())
        .then(res => { return res; });
}
getProduct()
    .then(pro => {
    console.log(pro.map(u => 'ProductId:' + u.ProductId + '\n' + 'ProductName:' + u.ProductName + '\n' + 'ProductPrice' + u.Price + '\n' + 'Quantity' + u.Quantity + '\n' + '\n').toString());
});
