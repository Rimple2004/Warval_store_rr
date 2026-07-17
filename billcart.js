import {product} from './api'
import { products_from_ls } from "./getproductfrom_ls.js";

let cart_products = products_from_ls();

console.log(cart_products)

let existting_products = product.filter( (p)=>{
     return cart_products.some((el)=>el.cid===p.id)
})

console.log(existting_products)