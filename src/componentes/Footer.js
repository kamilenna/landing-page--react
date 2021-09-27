/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer(){
    return(
        <div>
            <footer>
                <section id="section-footer">
                    <ul className="ul-footer">
                        <li className="list-links">About us
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</li>
                            </ul>
                        </li>

                        <li className="list-links">Useful links
                            <ul>
                                <li><a href="#">Downloadable product</a></li>
                                <li><a href="#">On sale product</a></li>
                                <li><a href="#">Our new product</a></li>
                                <li><a href="#">Order tracking</a></li>
                                <li><a href="#">Payment methods</a></li>
                            </ul>
                        </li>

                        <li className="list-links">Download
                            <ul>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Pinterest</a></li>
                                <li><a href="#">Youtube</a></li>
                            </ul>
                        </li>

                        <li className="list-links">Call center
                            <ul>
                                <li>Monday to Friday: 9-20</li>
                                <li>Saturday to Sunday: closed</li>
                                <span/>
                                <br/>
                                <li><a href="#">arredo@qode.com</a></li>
                                <li><a href="#">+1 333 555</a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <hr/>
                <section id="menu-footer">
                    <ul className="ul-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <p>Made with love by <span><a href="#">Qode Interactive</a></span></p>
                </section>
            </footer>
        </div>
    )
}

export default Footer;