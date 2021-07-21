import Image from 'next/image'

export default function Header() {
    return(
        <header>
            <div className="header-area" none="background-image: url('/img/background-banner-desktop.png');">
                <div className="container">
                    <div className="header-background">
                    </div>
                    <div className="header-main">
                        <div className="logo">
                            <a href="https://www.yxe.com.br/novo">
                                <Image width={500} height={300} src="/img/logo.png" alt="" />
                            </a>
                            <div className="list-socials">
                                <div className="single-socials">
                                    <a href="https://pt-br.facebook.com/AgenciaYxe/" target="_blank">
                                        <i className="fab fa-facebook-square">
                                        </i>
                                    </a>
                                </div>
                                <div className="single-socials">
                                    <a href="https://www.instagram.com/agenciayxe/" target="_blank">
                                        <i className="fab fa-instagram">
                                        </i>
                                    </a>
                                </div>
                                <div className="single-socials">
                                    <a href="https://www.youtube.com/user/YxePublicidade" target="_blank">
                                        <i className="fab fa-youtube">
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="nav-button">
                            <div className="hamburger hamburger--squeeze">
                                <div className="hamburger-box">
                                    <div className="hamburger-inner">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav>
                            <div id="menu-principal-header" className="menu-principal-header">
                                <ul id="header-nav" className="header-menu">
                                    <li id="nav-menu-item-23" className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-12 current_page_item">
                                        <a href="https://www.yxe.com.br/novo/" className="menu-link main-menu-link">
                                            <i className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-12 current_page_item">
                                            </i> Início
                                        </a>
                                    </li>
                                    <li id="nav-menu-item-22" className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.yxe.com.br/novo/quem-somos/" className="menu-link main-menu-link">
                                            <i className="menu-item menu-item-type-post_type menu-item-object-page">
                                            </i> Quem Somos
                                        </a>
                                    </li>
                                    <li id="nav-menu-item-21" className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.yxe.com.br/novo/contato/" className="menu-link main-menu-link">
                                            <i className="menu-item menu-item-type-post_type menu-item-object-page">
                                            </i> Contato
                                        </a>
                                    </li>
                                    <li id="nav-menu-item-20" className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.yxe.com.br/novo/trabalhe-conosco/" className="menu-link main-menu-link">
                                            <i className="menu-item menu-item-type-post_type menu-item-object-page">
                                            </i> Trabalhe Conosco
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div id="pre-list-container" className="header-buttons">
                        <div className="header-list-buttons">
                            <a href="tel:+552133252407" target="_blank">
                                <button className="button-call" type="button">
                                    <i className="fas fa-phone">
                                    </i> (21) 3325-2407
                                </button>
                            </a>
                            <a href="tel:+552131180419" target="_blank">
                                <button className="button-call" type="button">
                                    <i className="fas fa-phone">
                                    </i> (21) 3118-0419
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}