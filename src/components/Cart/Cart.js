import React, {useContext} from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductContext } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';



const Cart = (props) => {

    const { value } = useContext(ProductContext);


    const { value9 } = useContext(ProductContext);
    const [cart] = value9;
    console.log(cart)
    return (
        <section>
            {cart.length > 0 ?
                (<React.Fragment>
                    <Title name="your" title="cart" />
                    <CartColumns />
                    <CartList value={value} />
                    <CartTotals value={value}
                        history={props.history} />
                </React.Fragment>) :
                <EmptyCart />} 
        </section>
    )
}

export default Cart
  