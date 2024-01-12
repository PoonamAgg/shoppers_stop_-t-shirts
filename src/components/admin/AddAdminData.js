import React, { useContext, useState } from "react";
import ProductList from "./ProductList";
import classes from './AddAdmin.module.css'
import CartContext from "../Store/CartContext";

const AddAdminData = () => {
  const [id, setId] = useState("");
  const [tShirtName, setTShirtName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [largeQuantity, setLargeQuantity] = useState("");
  const [mediumQuantity, setMediumQuantity] = useState("");
  const [smallQuantity, setSmallQuantity] = useState("");

  const menuCtx = useContext(CartContext);

  const idHandler = (e) => {
    setId(e.target.value);
  };

  const tShirtHandler = (e) => {
    setTShirtName(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const largeQuantityHandler = (e) => {
    setLargeQuantity(e.target.value);
  };

  const mediumQuantityHandler = (e) => {
    setMediumQuantity(e.target.value);
  };

  const smallQuantityHandler = (e) => {
    setSmallQuantity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const obj = {
      name: tShirtName,
      des: description,
      amount: price,
      quantL: largeQuantity,
      quantM: mediumQuantity,
      quantS: smallQuantity,
    };

    menuCtx.addToMenu(obj);

    setId("");
    setDescription("");
    setTShirtName("");
    setPrice("");
    setLargeQuantity("");
    setMediumQuantity("");
    setSmallQuantity("");
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler}>

        <div>
          <label>ID:</label>
          <input type="number" value={id} onChange={idHandler}></input>
          <label>T_Shirt Name:</label>
          <input
            type="text"
            placeholder="Enter T-Shirt Name"
            value={tShirtName}
            onChange={tShirtHandler}
          ></input>

          <label> Description:</label>
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={descriptionHandler}
          ></input>
          <label>Price:</label>
          <input
            type="number"
            placeholder="Enter Price"
            value={price}
            onChange={priceHandler}
          ></input> </div>
        <hr />
        <label>Large:</label>
        <input
          type="number"
          placeholder="Enter quantity"
          value={largeQuantity}
          onChange={largeQuantityHandler}
        ></input>
        <label>Medium:</label>
        <input
          type="number"
          placeholder="Enter quantity"
          value={mediumQuantity}
          onChange={mediumQuantityHandler}
        ></input>
        <label>Small:</label>
        <input
          type="number"
          placeholder="Enter quantity"
          value={smallQuantity}
          onChange={smallQuantityHandler}
        ></input>
        <button type="submit"> Add Product</button>
      </form>
      <ProductList />
    </div>
  );
};

export default AddAdminData;
