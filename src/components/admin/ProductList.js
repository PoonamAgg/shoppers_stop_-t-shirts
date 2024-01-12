import React, { useContext } from 'react'
import classes from './ProductList.module.css';
import CartContext from '../Store/CartContext';

const ProductList = (props) => {
  const menuCtx = useContext(CartContext);
  return (
    <div className={classes.container}>
      <h1>Available Stocks</h1>
      <hr/>
    
        <ul className={classes.menuItem}>
          {
            menuCtx.menuItems.map((item, index) =>(
              <div className={classes.item} key = {index}>
                <h2>{item.name}</h2>
                <h2>{item.des}</h2>
                <h2>${item.amount}</h2>
                <button className={classes.button} onClick={() =>{menuCtx.addItems(item)}} >L-Buy-{item.quantL}</button>
                <button className={classes.button} >M-Buy-{item.quantM}</button>
                <button className={classes.button} >S-Buy-{item.quantS}</button>
                {/* <button className={classes.button} onClick={() =>{menuCtx.addItems(item)}} >Add to Cart</button> */}
                
              </div>
            ))
          }
          
        </ul>
      </div>
      
  
  )
}

export default ProductList
