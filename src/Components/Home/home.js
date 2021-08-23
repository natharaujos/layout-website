import React, { Component } from 'react';
import image from '../../images/iimg_background.jpg';
import './home.css'

const Home = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active"> 
                    <div style={{height: '400px'}}>
                        <img class="d-block w-100 images-back ms-0" src={image} alt="Primeiro Slide" />
                    </div>
                    <div class="carousel-caption ms-auto d-flex flex-column align-items-end">
                        <h1 class="text-light text-end">Produtos Direto da Fábrica</h1>
                        <p class="text-light text-end">Somos especialisas em gôndolas, porta pallets, racks,<br />
                            roupeiros, estantes, e mais diversos outros itens.<br />
                        </p>
                        <br />
                        <strong>
                            <p class="text-light text-end">Solicite seu orçamento agora e monte sua loja com <br /> quem entender de aço!</p>
                        </strong>
                        <button type="button" class="btn btn-warning btn-md"><strong>Quero fazer um orçamento</strong></button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={image} style={{height: '400px'}} alt="Segundo Slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={image} style={{height: '400px'}} alt="Terceiro Slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next text-dark" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Próximo</span>
            </a>
        </div>
    );
}


export default Home;