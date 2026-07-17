import { products_from_ls } from "./getproductfrom_ls.js";
import { bill } from "./bill.js";

const tempcart = document.querySelector('.cart_product')
const box = document.querySelector('.cart_container')
const sumbox = document.querySelector('.tp_val')

let cart_products = products_from_ls();





window.addEventListener('click' ,() =>{
       bill();
})

cart_products.forEach( (el) => {
      const tcart = tempcart.content.cloneNode(true)

      const cartitem = tcart.querySelector('.cart_item')

      let btn = tcart.querySelector('.remove');
      btn.addEventListener('click', ()=>{
            let index = cart_products.indexOf(el)
            cart_products.splice(index,1)
            localStorage.setItem('cart_product' , JSON.stringify(cart_products))
            cartitem.remove()

      })

      window.addEventListener('click' ,() =>{
       bill();
      })

      let btn2 = tcart.querySelector('.adder');
      let btn3 = tcart.querySelector('.subtracter');

      btn2.addEventListener('click',()=>{
         let p = cartitem.querySelector('.no_items').innerText;
         let n = el.stock;
         p++;

         if(p>n){
          return false
         }


         cartitem.querySelector('.no_items').innerText = p;
         let index = cart_products.indexOf(el)
         cart_products[index].count = p;
         cart_products[index].total_price = p*cart_products[index].mrp;
         localStorage.setItem('cart_product' , JSON.stringify(cart_products))

          cartitem.querySelector('.total_price').innerText =  `₹${ p*cart_products[index].mrp}`;
        
        
         

      })

        btn3.addEventListener('click',()=>{
         let p = cartitem.querySelector('.no_items').innerText;
         p--;

         if(p<1){
          return false
         }
         

         cartitem.querySelector('.no_items').innerText = p;
         let index = cart_products.indexOf(el)
         cart_products[index].count = p;
         cart_products[index].total_price = p*cart_products[index].mrp;



         localStorage.setItem('cart_product' , JSON.stringify(cart_products))

       cartitem.querySelector('.total_price').innerText = `₹${ p*cart_products[index].mrp}`;


      })
      
    tcart.querySelector('.no_items').innerText = el.count;
    tcart.querySelector('.name').innerText = el.name;
      tcart.querySelector('.type').innerText = el.category;
      tcart.querySelector('.total_price').innerText = `₹${el.total_price}`;
    tcart.querySelector('.photo').innerHTML = el.iphoto;
    bill();
    
    box.append(tcart)
});

