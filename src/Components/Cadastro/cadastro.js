import React from 'react'
import image from '../../images/gondolas-corredor.jpg'
import './cadastro.css'

const Cadastro = () => {
    return (
        <div className="configs">
            <div className="images">
                {/* <img class="d-blockms-0 w-100 images-back ms-0 position-relative" src={image} alt="" /> */}
                <div className="cadastro container d-flex">
                    <div>
                        <h1 class="text-light">SEJA UM REVENDEDOR<br />E</h1><h1><span class="text-danger">OBTENHA</span><br /><span class="text-danger">GRANDES LUCROS</span> <span class="text-light"><br/>EM SUAS VENDAS!</span></h1>
                        <br/>
                        <p class="text-light ms-0">CADASTRE-SE USANDO<br/>O FORMULÁRIO AO LADO</p>
                    </div>
                    <form class="ms-auto">
                        <div class="d-flex">
                            <div class="me-2">
                                <p class="ms-0 text-light">Nome <span class="text-danger">*</span></p>
                                <input class="form-control" type="text" name="" value="" />
                            </div>
                            <div>
                                <p class="ms-0 text-light">Sobrenome <span class="text-danger">*</span></p>
                                <input class="form-control" type="text" name="" value="" />
                            </div>
                        </div>
                        <div>
                            <p class="ms-0 text-light">Email <span class="text-danger">*</span></p>
                            <input class="form-control" type="text" name="" value="" />
                        </div>
                        <div class="d-flex">
                            <div class="me-2">
                                <p class="ms-0 text-light">Telefone <span class="text-danger">*</span></p>
                                <input class="form-control" type="text" name="" value="" />
                            </div>
                            <div>
                                <p class="ms-0 text-light">Link para seu currículo <span class="text-danger">*</span></p>
                                <input class="form-control" type="text" name="" value="" />
                            </div>
                        </div>
                        <button type="button" class="btn btn-outline-light mt-3" style={{marginLeft: '100px'}}>ENVIAR MEU CADASTRO</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;
