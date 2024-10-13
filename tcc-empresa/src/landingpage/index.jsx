import "./index.scss";
import "./responsividade.scss"
import "./responsividadeapplewatch.scss"
import "./iphone5.scss"

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
import face from "../assets/face.png"
import tw from "../assets/twitter.png"
import insta from "../assets/insta.png"
import google from "../assets/google.png"

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

        <div className="feedback">
          <div className="titulo"><h2>FEEDBACK DO AUTÔNOMO</h2></div>
          
          <div className="container-feed">
                      <div className="card">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere</div>
            <div className="local">
              <p className="nome">ADM</p>
              <p>São Paulo, SP</p>
            </div>
          </div>

          <div className="card">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere</div>
            <div className="local">
              <p className="nome">ADM</p>
              <p>São Paulo, SP</p>
            </div>
          </div>

          <div className="card">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere</div>
            <div className="local">
              <p className="nome">ADM</p>
              <p>São Paulo, SP</p>
            </div>
          </div>

          <div className="card">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere</div>
            <div className="local">
              <p className="nome">ADM</p>
              <p>São Paulo, SP</p>
            </div>
          </div>

          <div className="card">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere</div>
            <div className="local">
              <p className="nome">ADM</p>
              <p>São Paulo, SP</p>
            </div>
          </div>

          <div className="card">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere</div>
            <div className="local">
              <p className="nome">ADM</p>
              <p>São Paulo, SP</p>
            </div>
          </div>
          </div>

        </div>

        <footer className="rodapé">
          <div className="info-contato">
              <div>
                <p>Gostou de nosso atendimento? Alguma reclamação?</p>
                <p>Nos contate via: e-mail, telefone ou whatsapp.</p>
              </div>
              <div className="email">
                <p>infosolutions@gmail.com</p>
                <p>+5512996269992</p>
              </div>
          </div>

          <div className="plataformas">
            <div><p>Redes sociais</p></div>
            <div className="imagens">
              <a href=""><img src={face} alt="" /></a>
              <a href=""><img src={tw} alt="" /></a>
              <a href=""><img src={insta} alt="" /></a>
              <a href=""><img src={google} alt="" /></a>
            </div>
          </div>
        </footer>

        <a target="_blank" href="https://wa.me/5512996269992"><img className="wpp" src={wpp} alt="" /> </a>
        
    </div>
  );
}
