import React, { useContext } from 'react';
import { ProductContext } from '../../context';

const CartItem = (props) => {
    const { id, title, img, price, total, count } = props.item;

    // const { value } = useContext(ProductContext);
    

    const { value8 } = useContext(ProductContext);
    const [increment] = value8;

    const { value9 } = useContext(ProductContext);
    const [decrement] = value9;

    const { value10 } = useContext(ProductContext);
    const [removeItem] = value10;

    return (
        <div className="row mt-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="item" style={{width:'5rem',height:'5rem'}} className="img-fluid"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product: </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price: </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>
                            +
                        </span>
                    </div>
                </div>
            </div> 
            <div className="col-10 mx-auto col-lg-2">
               <div className="cart-icon" onClick={()=>removeItem(id)}><i className="fas fa-trash"></i></div>
            </div> 
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : $ {total}</strong>
            </div> 
        </div>
    )
}

export default CartItem;
