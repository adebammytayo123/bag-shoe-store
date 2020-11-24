import React, { useContext, useState } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductContext } from '../context';
import styled from 'styled-components';

const ProductList = () => {

    const [search, setSearch] = useState("");


    const { value1 } = useContext(ProductContext);
    const [products] = value1;


    // const { value10 } = useContext(ProductContext);
    // const [productsCopy] = value10;

    // const { value11 } = useContext(ProductContext);
    // const [handleBtns] = value11;

    // const { value12 } = useContext(ProductContext);
    // const [btns] = value12;

    const filterProducts = products.filter((product) =>
        product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }


    
    return (
        <React.Fragment>
            <ProductListWrapper className="py-5">
                <div className="container">
                    <Title name="our" title="products" />
                    <div className="col-12 mx-auto text-center my-5">
                        <form className="search-box " onSubmit={handleSubmit}>
                        <input
                            className="search-input"
                            value={search}
                            onChange={(e)=> setSearch(e.target.value)}
                            type="text"
                            placeholder="search brand..."
                        />
                        <i class="search-icon fas fa-search"></i>
                        </form>
                    </div>
                {/* <div className="btns col-12 d-block d-lg-flex  text-center my-5">
                            {btns.map((btn, index) => {
                                return (
                                    <button
                                        className="filter-btn text-capitalize mx-auto py-2"
                                        key={index}
                                        value={btn}
                                        onClick={handleBtns}>
                                        {btn}
                                    </button>
                                )
                            })}
                        </div> */}
                    <div className="row">
                        {filterProducts.map(product => (
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
.search-box {
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-input {
    position: relative;
    width: 50%;
    height: 3rem;
    padding: 1rem;
    border: 0.1rem solid var(--mainYellow);
    border-radius: 0.5rem;
    text-transform: capitalize;
    color: var(--mainBlue);
    outline: none;
}
.search-icon {
    position: absolute;
    right: 25%;
    margin-left: 2rem;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    color: var(--mainBlue);
    border-radius: 0.5rem;
    cursor: pointer;
    outline: none;
}
.btns {
    width: 100%;
    background: var(--mainBlue);
    padding: 0.5rem;
}
.filter-btn {
    font-size: 1rem;
    color: var(--mainWhite);
    background: transparent;
    border: none;
    outline: none;
}
.filter-btn:hover {
    color: var(--mainYellow) !important;
}
.filter-btn:focus,
.filter-btn:active,
.filter-btn.active  {
    border-bottom: 0.1em solid var(--mainYellow) !important;
}
`

export default ProductList;
