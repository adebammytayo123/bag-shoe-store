import React, { useContext } from 'react';
import CartItem from './CartItem';
import { ProductContext } from '../../context';

const CartList = () => {

    const { value } = useContext(ProductContext);

    const { value12 } = useContext(ProductContext);
    const [cart] = value12;
    // console.log(value12, cart)
    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem
                    key={item.id}
                    item={item}
                    value={value}
                />
            })}
        </div>
    )
}

export default CartList;
