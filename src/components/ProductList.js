import React, { useContext } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductContext } from '../context';
import styled from 'styled-components';

const ProductList = () => {

    const { value10 } = useContext(ProductContext);
    const [productsCopy] = value10;

    const { value11 } = useContext(ProductContext);
    const [handleBtns] = value11;

    const { value12 } = useContext(ProductContext);
    const [btns] = value12;
    
    return (
        <React.Fragment>
            <ProductListWrapper className="py-5">
                <div className="container">
                <Title name="our" title="products" />
                <div className="btns d-flex justify-content-between my-5">
                            {btns.map((btn, index) => {
                                return (
                                    <button
                                        className="filter-btn text-capitalize"
                                        key={index}
                                        value={btn}
                                        onClick={handleBtns}>
                                        {btn}
                                    </button>
                                )
                            })}
                        </div>
                    <div className="row">
                        {productsCopy.map(product => (
                            <Product
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
                       
            </ProductListWrapper>
        </React.Fragment>
        // <Product />
    )
};

const ProductListWrapper = styled.div`
.btns {
    width: 100%;
    background: var(--mainBlue);
    padding: 1rem;
}
.filter-btn {
    font-size: 1.5rem;
    color: var(--mainWhite);
    background: transparent;
    border: none;
    outline: none;
}
.filter-btn:focus,
.filter-btn:active,
.filter-btn.active  {
    border-bottom: 0.1em solid var(--lightBlue) !important;
}
`

export default ProductList;
