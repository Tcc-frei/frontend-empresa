import "./index.scss";

import Cabecalho from "../components/cabecalho";
import logo_html from "../assets/html.png"
import logo_css from "../assets/css.png"
import logo_nuvem from "../assets/nuvem.png"
import logo_js from "../assets/javascript.png"
import logo_bd from "../assets/bd.png"
import t1 from "../assets/t1.png"
import suporte from "../assets/suporte.png"
import nv from "../assets/nv.png"
import wpp from "../assets/wpp.png"

export default function () {
  return (
    <div className="container-empresa">

      <Cabecalho/>

      <div className="container-sobre-nos">
        <div className="simbolos">
          <img className="html" src={logo_html} alt="" />
          <img className="nuvem" src={logo_nuvem} alt="" />
          <img className="bd" src={logo_bd} alt="" />
          <img className="js" src={logo_js} alt="" />
          <img className="css" src={logo_css} alt="" />
        <h1>{`<h1>`}uma empresa renomada de T.I{`<h1/>`}</h1>
        </div>
        

      </div>
      <div className="sobre-nos">
        <div className="informacoes">
        <h2>Sobre nós:</h2>
          <div>
            <p>Somos uma empresa localizada em São Paulo, com o foco no atendimento ao autonomo. Prezamos sempre pela melhor solução e valor ao cliente, com os melhores prazos para que seja acessível ao autonomo e facilite seu trabalho.
            </p>
          </div>
        </div>
     
        </div>

        <div className="componente-3">
          <div className="container-propostas">
            <h2>O QUE FAZEMOS?</h2>

            <div className="cartoes">

            <div className="card">
              <img src={t1} alt="" />
              <h3>tercerização dos serviços</h3>
              <p>Terceirize a TI de sua empresa
 conosco e tenha benefícios como produtividade,
 prevenção de problemas e redução de custos</p>
            </div>

            <div className="card">
              <img src={suporte} alt="" />
              <h3>suporte & manutenção 
              do site</h3>
              <p>Oferecemos suporte e
a manutenção de 
seu site, para que você não
se preocupe com isso </p>
            </div>

            <div className="card">
              <img src={nv} alt="" />
              <h3>roost na nuvem</h3>
              <p>hospedamos seu site na nuvem, 
sobre nossa supervisão
e responsabilidade</p>
            </div>
            </div>

          </div>
        </div>

        <a  href="https://wa.me/qr/XBVLQ2FFCVJAO1"><img className="wpp" src={wpp} alt="" /> </a>
        
    </div>
  );
}
