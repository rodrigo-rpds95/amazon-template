import { useState } from 'react'
import './Header.css';

const Header = () => {

    const [expandedInput, setExpandSearchInput] = useState(false);
    const [expandedMenu, setExpandMenu] = useState(false);
    const [expandedNavMenu, setExpandedNavMenu] = useState(false);

    function onClickHandler(){
        (window.innerWidth < 1100) ? setExpandSearchInput(true) : setExpandSearchInput(false);
    }

    return (
        <header>
            <a href="/" className="logo-header"><p>Logo</p></a>   
            <div className="components-header">
                <span className={expandedNavMenu ? 'explore-menu explore-menu-on invertIcon' : 'explore-menu'} onClick={e => setExpandedNavMenu(!expandedNavMenu)}>Explorar <i></i></span>
                <ul className={expandedNavMenu ? 'show' : 'navMenu'}>
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
                <div className={expandedMenu ? 'header-profile header-profile-on' : 'header-profile'} onClick={e => setExpandMenu(!expandedMenu)}>
                    <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" alt="Profile" />
                    <span className={expandedMenu ? 'profile-name invertIcon' : 'profile-name'}>User</span>
                </div>
                <div className={expandedMenu ? 'menu-header show' : 'menu-header'}>
                    <div onClick={e => setExpandMenu(!expandedMenu)} className="close-menu-header"></div>
                    <span>Perfis</span>
                    <ul>
                        <li><a href="/" className="profile-icon">User</a></li>
                        <li><a href="/" className="child-icon">crianças</a></li>
                        <li><a href="/" className="add-profile-icon">Adicionar novo perfil</a></li>
                        <li><a href="/">Editar perfis</a></li>
                        <li><a href="/">Saiba mais</a></li>
                    </ul>
                    <span>Mais</span>
                    <ul>
                        <li><a href="/">Sua Lista</a></li>
                        <li><a href="/">Conta e configurações</a></li>
                        <li><a href="/">Assista onde quiser</a></li>
                        <li><a href="/">Ajuda</a></li>
                        <li><a href="/">Não é Rodrigo? Sair</a></li>
                    </ul>
                </div>
                <div className="back-overlay"></div>
            </div>
        </header>
    )
}

export default Header;