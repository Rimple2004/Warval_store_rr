
import { products_from_ls } from "./getproductfrom_ls.js";
export const    bill = ()=>{
        let cart_products = products_from_ls();
        const sumbox = document.querySelector('.tp_val')
        console.log(sumbox)
       let sum=0;
       cart_products.forEach((el)=>{
          sum+=el.total_price
      })
       sumbox.innerText = sum;
 }