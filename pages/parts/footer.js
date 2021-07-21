export default function Footer() {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 footer-data">
                        <div className="element-footer">
                            <img src="/img/logo.png" className="img-fluid footer-logo" alt="" />
                        </div>
                        <div className="element-footer">
                            <div className="footer-site">
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
                        </div>
                    </div>
                    <div className="col-md-10 footer-about">
                        <div className="element-footer">
                            <h3>Endereço
                            </h3>
                            <div className="text-footer">
                                <p>Avenida das Américas, 17.150 - Bloco 1 Sala 205
                                </p>
                                <p>Recreio dos Bandeirantes, Rio de Janeiro - RJ
                                </p>
                                <p>22790-704
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}