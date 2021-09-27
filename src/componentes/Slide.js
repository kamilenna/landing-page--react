import React from 'react'
import lampadaAzul from '../img/home-slider.png'
import lampadaBranca from '../img/home-slider-2.png'
import lampadaPreta from '../img/home-slider-3.png'

function Slide() {
    return (
        <div>
            <section className="slide-section">
                <div className="slide-info">
                    <h1>Designer lamps</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>- See the offer</button>
                </div>

                <div className="slide-imgs">
                    <img className="lamp-img1" src={lampadaAzul} alt="Lâmpada de teto azul"/>
                    <img className="lamp-img2" src={lampadaBranca} alt="Lâmpada de teto branca"/>
                    <img className="lamp-img3" src={lampadaPreta} alt="Lâmpada de teto preta"/>
                </div>
            </section>
        </div>
    );
}

export default Slide;