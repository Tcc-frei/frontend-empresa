import "./index.scss";
import "./responsividade.scss"
import "./responsividadeapplewatch.scss"
import "./iphone5.scss"
import Card from "../components/cards/cards.jsx";

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

export default function Empresa() {


  const renCard = [
  {
    estrelas: "⭐",
    comentario:  "Infelizmente, a experiência foi decepcionante. O suporte técnico demorou dias para responder e não conseguiu resolver meu problema. Não recomendo.",
    local: "São Paulo, SP " ,
    nome: "Junior",
  },
  {
    estrelas: "⭐⭐",
    comentario:  "O produto tem potencial, mas a interface é confusa e o desempenho deixa a desejar. Além disso, o atendimento ao cliente poderia ser mais ágil.",
    local: "Ribeirão Preto, SP" ,
    nome: "Roberto",
  },
  {
    estrelas: "⭐⭐⭐",
    comentario:  "A plataforma funciona bem na maior parte do tempo, mas há alguns bugs recorrentes que ainda precisam ser corrigidos. O atendimento foi satisfatório.",
    local: "Pindamonhangaba, SP" ,
    nome: "Rodrigo",
  },
  {
    estrelas: "⭐⭐⭐⭐",
    comentario:  "Gostei da solução oferecida pela empresa, é prática e resolve boa parte das minhas necessidades. Tive um pequeno problema, mas o suporte foi rápido e eficiente.",
    local: "Guarulhos, SP" ,
    nome: "Arthur Cavalcante",
  },
  {
    estrelas: "⭐⭐⭐⭐⭐",
    comentario:  "Excelente serviço! A tecnologia é inovadora, o suporte é sempre prestativo e as funcionalidades superaram minhas expectativas. Recomendo fortemente!",
    local: "Belo Horizonte, MG" ,
    nome: "Arthur Cavalcante",
  },
  {
    estrelas: "⭐⭐⭐⭐⭐",
    comentario:  "Empresa fantástica! A plataforma é fácil de usar, super estável, e o atendimento ao cliente é impecável. Totalmente satisfeita com o serviço!",
    local: "Curitiba, PR" ,
    nome: "Daniel",
  },

]






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
                  {
                    renCard.map((e) => {
                      return (
                        <Card
                          estrelas={e.estrelas}
                          comentario={e.comentario}
                          nome={e.nome}
                          local={e.local}
                        />
                      )
                    })
                  }
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


