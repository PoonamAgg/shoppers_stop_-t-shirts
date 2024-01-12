import React, { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
const [cart, setCart] = useState([]);
const [menuItems, setMenuItems] = useState([]);
const addToMenu = (newItem) => {
  const updatedNewItem = {...newItem, id:Math.random().toFixed(2)}
  setMenuItems([...menuItems, updatedNewItem]);
}

const addItems = (newItem) =>{
  
  const menuItemIndex = menuItems.findIndex((item) => item.id === newItem.id)
  const menuItem = menuItems[menuItemIndex]
  console.log(menuItem, "line 12")
    if(menuItem.quantL === 0)
    {
      alert('out of stock');
    }
    else{
      const updatedMenu = { ...menuItem, quant: menuItem.quantL-1}
      const updatedMenuItems = [...menuItems]
      updatedMenuItems[menuItemIndex] = updatedMenu
      setMenuItems(updatedMenuItems)
    }

  
}
const removeItems = () => {}

  const obj = {
    cart, addItems,removeItems, menuItems, addToMenu
  }
  return (
    <CartContext.Provider value = {obj}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider