import Image from 'next/image'

export default function HomeServices() {
    return (
        <section className="section home-services">
            <div className="container">
                <h1>NOSSOS SERVIÇOS</h1>
                <hr />
                <p className="description-services text-center">Somos uma agência de <strong>Publicidade</strong> e <strong>Marketing Digital</strong> focada no resultado dos nossos clientes.
                </p>
                <div className="content-services">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-service">
                                <div className="img-service">
                                    <img src="/img/icons/ico-marketing-digital.png" alt="" />
                                </div>
                                <h3 className="title-service">
                                    MARKETING DIGITAL
                                </h3>
                                <p className="text-service">
                                    Criamos um planejamento para a sua empresa, visando o reconhecimento de sua marca e o retorno do seu negócio no meio digital.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-service">
                                <div className="img-service">
                                    <img src="/img/icons/ico-video-marketing.png" alt="" />
                                </div>
                                <h3 className="title-service">
                                    VÍDEO MARKETING
                                </h3>
                                <p className="text-service">
                                    Um modo interativo de sua marca chegar aos seus clientes. Temos uma equipe de profissionais capacitados e equipamentos de alta qualidade, para o melhor resultado dos projetos.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-service">
                                <div className="img-service">
                                    <img src="/img/icons/ico-publicidade.png" alt="" />
                                </div>
                                <h3 className="title-service">
                                    PUBLICIDADE
                                </h3>
                                <p className="text-service">
                                    Criamos campanhas e peças publicitárias que promovam seu negócio, com o foco no crescimento de bons resultados e uma boa imagem junto ao seu público.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}