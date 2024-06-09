// Its an example of Ordering Books to BookStore

import chalk from "chalk";

console.log(chalk.bgGray.bold.blue("\n***WellCome to Online Book Store***"))
function orderBooks (){
    console.log (chalk.bold("\nPlace your Order of Books"))
    setTimeout(() => {
        console.log(chalk.blue("\nYour Order recieved\nThank You for your Order. Our Team will Deliver it within 05 Working Days"))
        arrangeBooks();
        godownBooks();
        deliveryBooks();
    },1500)

}
orderBooks();
function arrangeBooks () {
    setTimeout(() =>{
        console.log("\n05 Books arranged from Book Shop, for rest books message deliver to Godown")
    },2500)
    setTimeout(()=>{
        console.log(chalk.blue("\nOrder completed now ready for delivery"))
    },4500)
}
function godownBooks () {
    setTimeout(()=>{
        console.log(chalk.bold("\nBooks arranged and sent to Shop"))
    },3500)
}
function deliveryBooks (){
    setTimeout(()=>{
        console.log(chalk.red("\nOrder Dispacted"))
    },5500)
}