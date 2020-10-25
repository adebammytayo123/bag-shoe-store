import React, { useContext } from 'react';
import { ProductContext } from '../../context';
import { Link } from 'react-router-dom';


const CartTotals = () => {

    const { value7 } = useContext(ProductContext);
    const [subTotal] = value7;

    const { value11 } = useContext(ProductContext);
    const [clearCart] = value11;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-4 mx-auto col-sm-8 text-capitalize text-center">
                        <Link to="/">
                            <button
                                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                type="button"
                                onClick={
                                    () => clearCart()
                                }
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">total :</span>
                            <strong>$ {subTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
       </React.Fragment>
    )
}

export default CartTotals;
