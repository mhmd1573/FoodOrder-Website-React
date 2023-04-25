import './Card.css';
import { Button } from 'react-bootstrap';
import React from 'react';

import { useShoppingCart } from '../../context/ShoppingCartContext';

const Card = ({id,title,serve,image} ) => {

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  console.log("Card component rendered");

const quantity = getItemQuantity(id);
  return (
    
    <div className="col-md-4 col-sm-12 col-lg-4 ">

<div class="card" >
  <img class="card-img-top" src={image} />

  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{serve}</p>
    <p class="card-text2">$10.50 <span>$11.70</span> </p>
    
    <div className="mt-auto">
          {quantity === 0 ? (
                <Button 
                className="button" 
                title="Add To Cart"
                 onClick={() => 
                  {
                    increaseCartQuantity(id)
                    console.log('Button clicked');
                  }}>
                  Add To Cart
                      </Button> 

                  

               

               

                

          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button className="cart-btn" title="-" onClick={()=>decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity} in cart</span>
                </div>
                <Button className="cart-btn" title="+" onClick={()=>increaseCartQuantity(id)}>+</Button>
              </div>
              <Button className="button" title="Remove" onClick={()=>removeFromCart(id)}>Remove</Button>
              
                
              
            </div>
          )}
        </div>
    
  </div>

</div>

        </div>
        
  )
}

export default Card