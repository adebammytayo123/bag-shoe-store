import React, { useContext } from 'react';
import { ProductContext } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

const Details = () => {

    const {value2} = useContext(ProductContext);
    const [details] = value2;

    const {value4} = useContext(ProductContext);
    const [addToCart] = value4;


    // console.log(details)
    return (
        <React.Fragment>
            <div className="container py-5">
                {/* title */}
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{details.title}</h1>    
                    </div>
                </div>
                {/* product info */}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={details.img} alt="product" className="img-fluid"/>
                    </div>
                    {/* product text */}
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h2>model: {details.title}</h2>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                            made by : <span className="text-uppercase">{details.company}</span>
                        </h4>
                        <h4 className="text-blue">
                            <strong>price : <span>$</span>{details.price}</strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            about the product :
                        </p>
                        <p className="text-muted lead">{details.info}</p>
                        <div>
                            <Link to="/store">
                                <ButtonContainer>back to products</ButtonContainer>
                            </Link>
                            <ButtonContainer
                                cart
                                disabled={details.inCart ? true : false}
                                onClick={() => {
                                    addToCart(details.id)
                                }}
                            >
                                {details.inCart ? "inCart" : "add to cart"}
                            </ButtonContainer>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Details
