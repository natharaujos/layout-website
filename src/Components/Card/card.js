import React from "react";
import './card.css';

const Card = () => {
  return (
    <div className="full">
        <div className="cardss card-1">
            <p class="text-center">
              <strong>Quer ser um colaborador ou<br />representante?</strong>
            </p>
            <div className="buttons">
                <button type="button" class="btn btn-outline-light">
                    Preencha seus dados
                </button>
            </div>
        </div>
        <div className="cardss card-2">
            <p class="text-center">
              <strong>Venda exclusiva para <br />lojistas através do Whatsapp:</strong>
            </p>
            <div className="buttons">
                <button type="button" class="btn btn-outline-light">
                    Converse com a gente:
                </button>
            </div>
        </div>
        <div className="cardss card-3">
            <p class="text-center">
              <strong>Gostou de algum dos<br />nossos produtos?</strong>
            </p>
            <div className="buttons">
                <button type="button" class="btn btn-outline-light">
                    Faça se orçamento:
                </button>
            </div>
        </div>
        <div className="cardss card-4">
            <p class="text-center">
              <strong>Quer ser um colaborador ou <br /> representante?</strong>
            </p>
            <div className="buttons">
                <button type="button" class="btn btn-outline-light">
                    Preencha seus dados
                </button>
            </div>
        </div>
    </div>
  );
};

export default Card;
