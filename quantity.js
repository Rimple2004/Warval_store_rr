


export const quantity_buttons = ((e,stock_value)=>{
    
      let temp = e.target.innerText;
          if(e.target.innerText=='-'){
              let s = e.target.previousElementSibling;
            let p = s.innerText
            if(p>1){
                p--; 
               s.innerText = p;
             }

             else{
                alert("items can't go beyond 1")
             }
          }

          else if(e.target.innerText=='+'){
             let s = e.target.nextElementSibling;
             let p = s.innerText
              if(p<stock_value){
                  p++; 
                 console.log(s);
                 s.innerText = p;
                 stock_value--;
                 console.log(stock_value)
              }
             
             
          }
})