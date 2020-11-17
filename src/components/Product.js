import React,{ useContext} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import FilterProduct from './FilterProduct';
import PropTypes from 'prop-types';
import { ProductContext } from '../context';


const Product = (props) => {
  const { id, title, img, price, inCart } = props.product;
  
  const { value3 } = useContext(ProductContext);
  const [handleDetail] = value3;

  const { value4 } = useContext(ProductContext);
  const [addToCart] = value4; 



    return (
      <ProductWrapper className="col-6 mx-auto col-lg-3 my-3">
        
        <div className="card">
          {
            <div
            className="img-container p-5"
              onClick={() =>
                handleDetail(id)
            }>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
          </div>
        }
          <div className="card-footer d-block d-lg-flex text-center justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue d-flex justify-content-center font-italic my-3 text-center mx-auto">
              <span className="d-flex d-lg-none">Price: $</span>
              <span className="mr-1 d-none d-lg-block"> $</span>
              {price}
            </h5>
          </div>
          <div className="d-flex justify-content-center py-3">
          <Link to="/details">
                <button
                  className="detail-btn text-blue text-capitalize"
                  onClick={() => {
                    handleDetail(id)
                  }}
                >details</button>
          </Link>
          <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  addToCart(id);
                }
                 
              }
            >
              {inCart ? (<p className="text-capitalize mb-0" disabled>in cart</p>) : <p className="text-capitalize mb-0" disabled>add to cart</p>}
            </button>
          </div>
          </div>
        </ProductWrapper>
    )
}
Product.propTypes = {
  product: PropTypes.shape(
    {
      id: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      inCart: PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div`
.card {
  border-color: transparent;
  transition: all 1s linear;
}
.card-footer {
  background: transparent;
  border-top: transparent;
  transition: all 1s linear;
}
&:hover {
  .card {
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
  }
  .card-footer {
    background: rgba(247,247,247);
  }
}
.img-container {
  position: relative;
  overflow: hidden;
}
.card-img-top {
  transition: all 1s linear;
}
.img-container:hover .card-img-top {
  transform: scale(1.2)
}
.cart-btn {
  background: transparent;
  border-color: var(--mainBlue);
  color: var(--mainBlue);
  border-radius: 0.3em;
  margin-left: 0.1rem;
  padding: 0.3rem 0.3rem;
  align-self: center; 
  font-size: 1rem;
  transition: all 1s linear;
}
.cart-btn:hover {
  background: var(--mainBlue);
  color: var(--mainWhite);
  cursor: pointer;
}
.detail-btn {
  background: transparent;
  border-color: var(--mainBlue);
  border-radius: 0.3em;
  margin-right: 0.1rem;
  padding: 0.3rem 0.3rem;
  align-self: center; 
  font-size: 1rem;
  transition: all 1s linear;
}
.detail-btn:hover {
  background: var(--mainBlue);
  color: var(--mainWhite)
}
`

export default Product;
