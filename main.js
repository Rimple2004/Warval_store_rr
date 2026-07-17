import products from "./api/items.json";
//import { bill } from "./cart_page.js";
import { showproduct } from "./product.js";

import { bill } from "./bill.js";


//function calling
showproduct(products);

window.addEventListener('click' ,() =>{
       bill();
})