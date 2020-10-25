import React, { useContext } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductContext } from '../context';

const ProductList = () => {

    const { value1 } = useContext(ProductContext);
    const [products] = value1;
    // console.log(products)


    
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="products" />
                    {/* product row */}
                    <div className="row">
                        {products.map(product => (
                            <Product
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
        // <Product />
    )
}

export default ProductList;
