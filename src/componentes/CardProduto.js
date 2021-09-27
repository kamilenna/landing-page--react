import React from "react";
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


function CardProduto(props) {
    return (
        <div>
            <section id="card-produto">
                <Card id="card" style={{ maxWidth: "320px", maxHeight: "480px", backgroundColor: "#ffffff", boxShadow: "none" }}>
                    <CardActionArea>
                        <p id="infos">{props.infos}</p>
                        <button id="btn-card">{props.button}<span>+</span></button>
                        <CardMedia
                        component="img"
                        width="300"
                        height="360"
                        src={props.img}
                        alt={props.alt}
                        />
                        <CardContent>
                        <p className="card-title">
                            {props.titulo}
                        </p>
                        <Rating style={{color: "#B4B4B4", fontSize:"1.1em", display: "flex", justifyContent: "center"}} name="read-only" value={props.estrelas} readOnly />
                        <section className="card-preco">
                        <del id="precoAnterior"><p>{props.precoAnterior}</p></del>
                        <p id="precoAtual">
                        {props.preco}
                        </p>
                        </section>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </section>
        </div>
    );
}

export default CardProduto;