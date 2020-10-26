import React, { useContext } from 'react';
import { ProductContext } from '../../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';


const CartTotals = () => {

    const { value5 } = useContext(ProductContext);
    const [subTotal] = value5;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-4 mx-auto col-sm-8 text-capitalize text-center">
                        <div className=" col-10 mx-auto px-5 justify-content align-items-center">
                        <Link to="/">
                                <ButtonContainer>back to store</ButtonContainer>
                            </Link>
                            <h5 className="mt-3">
                            <span className="text-title">total :</span>
                            <strong>$ {subTotal}</strong>
                        </h5>
                        </div>
                       
                    </div>
                </div>
            </div>
       </React.Fragment>
    )
}

export default CartTotals;
