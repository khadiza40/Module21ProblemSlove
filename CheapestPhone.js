// CheapestPhone.js
const phones = [
    {name: "Samsung ", price:4567, camera :10, storage:32},
    {name: "Walton ", price:29567, camera :15, storage:16},
    {name: "Nokea ", price:2367, camera :17, storage:4},
    {name: "Oppo", price:34567, camera :13, storage:8},
    {name: "htc", price:40567, camera :9, storage:16},
    {name: "Shawmi", price:41567, camera :8, storage:32},
];
let cheapest = phones[0];
for(const phone of phones){
    if (phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);