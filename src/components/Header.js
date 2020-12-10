import React, { useState } from 'react'
import './Header.css';

const Header = () => {

    const [expandedInput, setExpandSearchInput] = useState(false);

    function onClickHandler(){
        (window.innerWidth < 1100) ? setExpandSearchInput(true) : setExpandSearchInput(false);
    }

    return (
        <header>
            <a href="/" className="logo-header"><p>Logo</p></a>   
            <div className="components-header">
                <ul>
                    <li><a href="/" className="active">Início</a></li>
                    <li><a href="/">Séries</a></li>
                    <li><a href="/">Filmes</a></li>
                    <li><a href="/">Infantil</a></li>
                    <li><a href="/">Canais</a></li>
                </ul>
                <div className={expandedInput ? 'header-search expandedInput' : 'header-search'}>
                    <input onClick={onClickHandler} type="search" name="search" placeholder="Busca" />
                    <span className="close-search" onClick={e => setExpandSearchInput(false)}></span>
                </div>
                <div className="header-profile">
                    <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" alt="Profile" />
                    <span className="profile-name">User</span>
                </div>
                <div className="menu-header">
                    <ul>
                        <li><a href="/">crianças</a></li>
                        <li><a href="/">Adicionar novo perfil</a></li>
                        <li><a href="/">Editar perfis</a></li>
                        <li><a href="/">Saiba mais</a></li>
                    </ul>
                    <ul>
                        <li><a href="/">Sua Lista</a></li>
                        <li><a href="/">Conta e configurações</a></li>
                        <li><a href="/">Assista onde quiser</a></li>
                        <li><a href="/">Ajuda</a></li>
                        <li><a href="/">Não é Rodrigo? Sair</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;