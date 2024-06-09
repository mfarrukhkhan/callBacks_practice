function OrderPizza(preparePizza) {
    console.log("Place your Order📞...");
    setTimeout(() => {
        console.log("\nOrder Placed");
        preparePizza();
        deliveryPizza();
    }, 2000);
}
function preparePizza(deliveryPizza) {
    setTimeout(() => {
        console.log("\nPreparing Pizza");
    }, 4000);
    setTimeout(() => {
        console.log("\nPrepared Pizza🍕");
    }, 5000);
}
function deliveryPizza() {
    setTimeout(() => {
        console.log("\nReady for Delivering🚚");
    }, 6000);
    setTimeout(() => {
        console.log("\nPizza Delivered");
    }, 7000);
}
OrderPizza(preparePizza);
export {};
