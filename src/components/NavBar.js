import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

const NavBar = () =>  {
    return (
        < NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link className="nav-link" to="/">home</Link>
            <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">Store</Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                       </span>
                        cart
                </ButtonContainer>
            </Link>
            
       </ NavWrapper>
    )
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
.nav-link:hover {
    color: var(--mainYellow) !important;
}
.nav-link:focus,
.nav-link:active,
.nav-link.active {
    color: var(--mainYellow) !important;
    border-bottom: 0.1em solid var(--mainYellow) !important;
}
`


export default NavBar
