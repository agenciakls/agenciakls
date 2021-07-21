export default function HomeBanner() {
    return (
        <div className="home-section home-topo container-fluid ">
            <div className="row">
                <div className="home-banner col-md-12" none="background-image: url('/img/background-banner-desktop.png');">
                    <div className="area-feature container">
                        <div className="row row-feature">
                            <div className="box-feature col-md-6">
                                <h3>Focados em gerar crescimento ao seu negócio.
                                </h3>
                                <div className="text-padded">
                                    <h4>
                                        <span>A agência que pensa fora da caixa! A YXE ajuda você a concretizar sua ideia, desde o planejamento até a veiculação e a análise de resultados.
                                        </span>
                                    </h4>
                                </div>
                                <a href="">
                                    <button className="btn-default btn-inverted">SAIBA MAIS
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
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
    )
}