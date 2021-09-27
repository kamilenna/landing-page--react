/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function navProdutos() {
    return (
        <nav id="nav-produtos">
            <ul>
                <li><a className="link-produtos" href="#">All</a></li>
                <li><a className="link-produtos" href="#">Decoration</a></li>
                <li><a className="link-produtos" href="#">Ceiling</a></li>
                <li><a className="link-produtos" href="#">Floor</a></li>
                <li><a className="link-produtos" href="#">LED</a></li>
            </ul>
        </nav>
    );
}

export default navProdutos;