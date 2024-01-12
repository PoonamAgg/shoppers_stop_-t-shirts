import React from 'react'

const CartContext = React.createContext({
    cart:[],
    addItems:(items) =>{ },
    removeItems: (items) =>{ },
    menuItems: [],
    addToMenu: (items) =>{}
});

export default CartContext