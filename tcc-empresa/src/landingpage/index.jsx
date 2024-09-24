import "./index.scss";

import titulologo from "../assets/img-logo.png";

export default function () {
  return (
    <div className="container-empresa">
      <header className="faixa-cima">
        <div className="img-tituolo">
          <img src={titulologo} alt="" />
        </div>
        <div className="titulo">
            <h1>Info Solutions</h1>
        </div>
      </header>

      <div className="container-sobre-nos">
        <h1></h1>
      </div>
    </div>
  );
}
