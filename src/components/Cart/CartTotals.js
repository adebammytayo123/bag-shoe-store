import React, { useContext } from 'react';
import { ProductContext } from '../../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';
import PayPalButton from './PayPalButton';


const CartTotals = (props) => {

    const { history } = props;

    const { value5 } = useContext(ProductContext);
    const [subTotal] = value5;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-4 mx-auto col-sm-8 text-capitalize text-center">
                        <div className=" col-10 mx-auto px-5 justify-content align-items-center">
                        <Link to="/store">
                                <ButtonContainer>
                                    <span className="pr-2">
                                        <i className="fas fa-chevron-left"></i>
                                        <i className="fas fa-chevron-left"></i>
                                        <i className="fas fa-chevron-left"></i>  
                                    </span>
                                       store
                                </ButtonContainer>
                            </Link>
                            <h5 className="mt-3">
                            <span className="text-title">total :</span>
                            <strong>$ {subTotal}</strong>
                        </h5>
                        </div>
                        <PayPalButton
                            total = {subTotal}
                            history = {history}
                        />
                       
                    </div>
                </div>
            </div>
       </React.Fragment>
    )
}

export default CartTotals;
