const productcontainer = document.querySelector('.items')
const templ = document.querySelector('.t1')
import { quantity_buttons } from "./quantity.js";
import { addtocart } from "./cart.js";

export const showproduct = (product)=>{
   if(!product)return false;


   
   product.forEach((el)=>{

       let {   id , name , category , brand , img , desc , Price_max , Price_min , stock} = el;
       const templcl = templ.content.cloneNode(true);

       templcl.querySelector('#Cardvalue').setAttribute('id',`card${id}`);
    
       templcl.querySelector('.item_qty_btns').addEventListener('click',(e)=>{
              quantity_buttons(e, el.stock);
              console.log(stock)
        })

        templcl.querySelector('.item_addtocart').addEventListener('click',(e)=>{
             addtocart(e,id,stock);
        })

       templcl.querySelector('.item_name').textContent  = name;
       templcl.querySelector('.type').textContent  = category;
       templcl.querySelector('.item_img').innerHTML  = ` <img src="${img}" alt="">`;
       templcl.querySelector('.item_description').textContent  = desc;
       templcl.querySelector('.stock_value').textContent  = stock;
       templcl.querySelector('.min').textContent  =`₹${ Price_min}`;
       templcl.querySelector('.max').textContent  = `₹${Price_max}`;
       productcontainer.append(templcl)
  })
}