import { products_from_ls } from "./getproductfrom_ls.js";



export const addtocart = (e,id,stock)=>{
    
     let cart_products = products_from_ls();

     console.log(cart_products);
     

     let checker = cart_products.find((el) => { return el.cid === id}) || false;

     if(checker){
          alert("Product already exists in cart")
          console.log("removed")
          return false;
     }

     let card = document.querySelector(`#card${id}`)   
     let price = card.querySelector('.min').innerText;
     console.log(price);
     
     price = price.replace("₹","")
      console.log(price);


     let qty = card.querySelector('.displayer').innerText;
     let iname = card.querySelector('.item_name').innerText;
     let cate = card.querySelector('.type').innerText;
     let stk = card.querySelector('.stock_value').innerText;
     let photo_item =  card.querySelector('.item_img').innerHTML;
     
    // console.log(iname);
    // console.log(cate);
     
     

     let tt = {
          cid: id,
          category:cate,
          name:iname,
          iphoto:photo_item,
          mrp : price,
          count : qty,
          total_price:qty*price,
          stock:stk
     }

     cart_products.push(tt)
     console.log(tt)

     localStorage.setItem('cart_product' , JSON.stringify(cart_products));
        
}