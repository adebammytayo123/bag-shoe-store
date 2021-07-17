import React, { useState, createContext, useEffect, useCallback } from 'react';
import { storeProducts, detailProduct } from './data';

export const ProductContext = createContext();
// provider
// consumer


const ProductProvider = (props) => {
  const [products, setProducts] = useState(storeProducts);
  const [details, setDetails] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [btns, setBtns] = useState(["all products","bracelets","clutches","earrings","necklaces","set","shoes",]);



  const newProducts = useCallback(() => {
    setProducts(products)
  },[products])

  useEffect(() => {
    newProducts()
  })


  const handleDetail = (id) => {
    const item = products.find(item => item.id === id);
    setDetails(item)

  };

  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(products.find(item => item.id === id));
    const item = tempProducts[index];
    item.inCart = true;
    item.count = 1;
    const price = item.price;
    item.total = price;


    setCart([
      ...cart, item
    ])
  };
  // console.log(cart)

  const increment = (id) => {
    let tempCart = [...cart];
    const selectedItem = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedItem);
    const item = tempCart[index];
    item.count = item.count + 1;
    item.total = item.count * item.price;


    setCart(
      tempCart, item
    )
  };

  const decrement = (id) => { 
    let tempCart = [...cart];
    const selectedItem = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedItem);
    const item = tempCart[index];
    item.count = item.count - 1;

    if (item.count < 0) {
      removeItem(id)
    }
    else {
      item.total = item.count * item.price;
    }
    setCart(
      tempCart, item
    )
  };

  const removeItem = (id) => {
    let tempCart = [...cart];
    let tempProducts = [...products];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(products.find(item => item.id === id));
    let removeItem = tempProducts[index]
    removeItem.inCart = false;
    removeItem.count = 0;
    removeItem.total = 0;
    setCart(
      tempCart,removeItem
      );
  };



  let subTotal = cart.reduce((acc, amount) => acc + amount.total,0);

  console.log('total', subTotal);

  return (
    <ProductContext.Provider value={
      {
        value1: [products, setProducts],
        value2: [details, setDetails],
        value3: [handleDetail],
        value4: [addToCart],
        value5: [subTotal],
        value6: [increment],
        value7: [decrement],
        value8: [removeItem],
        value9: [cart, setCart],
        // value10: [productsCopy],
        // value11: [handleBtns],
        value12: [btns, setBtns],
      }
    } >
      {props.children}
    </ProductContext.Provider>
  )
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }