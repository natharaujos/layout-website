import React, { Component } from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-danger">
            <div class="container">
                <h1 class="navbar-brand text-light" href="#">LOGOTIPO</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars " style={{color: 'white'}}></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item me-3">
                            <a class="nav-link active text-light" aria-current="page" href="#">Quem somos</a>
                        </li>
                        <li class="nav-item dropdown me-3">
                            <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Gôndolas
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Gôndolas 1</a></li>
                                <li><a class="dropdown-item" href="#">Gôndola 2</a></li>
                                <li><a class="dropdown-item" href="#">Gôndola 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown me-3">
                            <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Móveis de Aço
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Móvel 1</a></li>
                                <li><a class="dropdown-item" href="#">Móvel 2</a></li>
                                <li><a class="dropdown-item" href="#">Móvel 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown me-3">
                            <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Armazenagem
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item me-3">
                            <a class="nav-link active text-light" aria-current="page" href="#">Contato</a>
                        </li>
                        <li class="nav-item d-flex align-items-center me-3">
                            <i class="fas fa-search text-light"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;