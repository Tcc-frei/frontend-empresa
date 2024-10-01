import "./index.scss";

import Cabecalho from "../components/cabecalho";
import logo_html from "../assets/html.png"
import logo_css from "../assets/css.png"
import logo_nuvem from "../assets/nuvem.png"
import logo_js from "../assets/javascript.png"
import logo_bd from "../assets/bd.png"

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
    </div>
  );
}
