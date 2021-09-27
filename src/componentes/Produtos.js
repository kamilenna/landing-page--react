
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
/*import Lampada from '../img/home-product-1.jpg'*/
/*import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';*/
import CardProduto from "./CardProduto";


function Produtos() {
    return (
        <div>
            <main>
            <section id="section-produtos">
                {
                    dadosProdutos.map((e, key) =>{
                        return(
                            <CardProduto key={key} infos={e.infos} img={e.img} titulo={e.titulo} alt={e.alt} estrelas={e.estrelas} preco={e.preco} precoAnterior={e.precoAnterior} button={e.button}/>
                        )
                    }
                    )
                }
            </section>
            </main>
        </div>
    );
}

const dadosProdutos = [
    {
        infos: "",
        img:"https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/home9-product1-img1-500x604.jpg",
        titulo: "White light",
        estrelas: 5,
        preco: "£64.00",
        precoAnterior: "",
        alt:"White light",
        button:"Add to cart"
    },
    {
        infos: "",
        img:"https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/home9-product2-img1-500x604.jpg",
        titulo: "Blue light",
        estrelas: 4,
        preco: "£41.00",
        precoAnterior: "",
        alt:"Blue light",
        button:"Add to cart"
    },
    {
        infos: "",
        img:"https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/home9-product3-img1-500x604.jpg",
        titulo: "Black light",
        estrelas: 5,
        preco: "£73.00",
        precoAnterior: "",
        alt:"Black light",
        button:"Add to cart"
    },
    {
        infos: "SALE",
        img:"https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/home9-product4-img1-500x604.jpg",
        titulo: "Transparent light",
        estrelas: 3,
        preco: "£55.00",
        precoAnterior: "£60.00",
        alt:"Transparent light",
        button:"Add to cart"
    },
    {
        infos: "NEW",
        img:"https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/home9-product5-img1-500x604.jpg",
        titulo: "Black light II",
        estrelas: 5,
        preco: "£23.00",
        alt:"Black light II",
        button:"Add to cart"
    },
    {
        infos: "SALE",
        img:"https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/home9-product6-img1-500x604.jpg",
        titulo: "Stick light",
        estrelas: 5,
        preco: "£30.00",
        precoAnterior: "£35.00",
        alt:"Stick light",
        button:"Add to cart"
    },
    {
        infos: "",
        img:"https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/home9-product7-img1-500x604.jpg",
        titulo: "Sliver light",
        estrelas: 5,
        preco: "£70.00",
        alt:"Sliver light",
        button:"Add to cart"
    },
    {
        infos: "SALE",
        img:"https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/home9-product8-img1-500x604.jpg",
        titulo: "Cube light",
        estrelas: 3,
        preco: "£70.00",
        precoAnterior: "£80.00",
        alt:"Cube light",
        button:"Add to cart"
    },
    {
        infos: "SOLD",
        img:"https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/home9-product9-img1-500x604.jpg",
        titulo: "Tube light",
        estrelas: 5,
        preco: "£44.00",
        precoAnterior: "",
        alt:"Tube light",
        button:"Read more"
    },
    {
        infos: "",
        img:"https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/home9-product10-img1-500x604.jpg",
        titulo: "Ceiling light",
        estrelas: 4,
        preco: "£90.00",
        precoAnterior: "",
        alt:"Ceiling light",
        button:"Add to cart"
    },
    {
        infos: "",
        img:"https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/home9-product11-img1-500x604.jpg",
        titulo: "Small black lamp",
        estrelas: 5,
        preco: "£90.00",
        precoAnterior: "",
        alt:"Small black lamp",
        button:"Add to cart"
    },
    {
        infos: "SOLD",
        img:"https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/home9-product12-img1-500x604.jpg",
        titulo: "White ceiling lamp",
        estrelas: 5,
        preco: "£115.00",
        precoAnterior: "",
        alt:"White ceiling lamp",
        button:"Read more"
    }
]

export default Produtos;