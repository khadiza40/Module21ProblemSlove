// totalPrice.js
const products = [
    {Name: 'Laptop', price:43000},
    {Name: 'Shirt', price:300},
    {Name: 'Watch', price:3900},
    {Name: 'Phone', price:39000}
];
let totalPrice = 0;
for(const product of products){
    totalPrice =totalPrice+product.price;
}
console.log(totalPrice);
const products2 = [
    {Name: 'Laptop', price:43000 , quantity:1},
    {Name: 'Shirt', price:300 , quantity:4},
    {Name: 'Watch', price:4000 , quantity:3},
    {Name: 'Phone', price:40000 , quantity:2}
];
let totalPrice2 = 0;
for(const product of products2){
    totalPrice2 =totalPrice2+ (product.price*product.quantity);
}
console.log(totalPrice2);
