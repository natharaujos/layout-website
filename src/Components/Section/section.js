import React from 'react';
import image from "../../images/whatsapp.png";
import './section.css'

const Section = () => {
    return (
        <div class="container d-flex mt-5 section">
            <div className="forma mt-5t">
                <img src={image} alt="" />
            </div>
            <div>
                <h1 className="formating-text" class="ms-5 mt-5"><strong>Solicite seu orçamento</strong><br /><strong>pelo whatsapp</strong></h1>
                <p class="ms-5 text-dark mb-5 ">Venda exclusiva para lojistas</p>
                <button type="button" class="btn btn-success ms-5">Converse com a gente</button>
            </div>
        </div>
    )
}

export default Section;
