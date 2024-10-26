export default function Card({estrelas, comentario, local, nome}){
    return(
      <div className="card">
      <div className="estrelas"><p>{estrelas}</p></div>
      <div className="comentario"><p>{comentario}</p></div>
      <p className="nome">{nome}</p>
      <div className="local"><p>{local}</p></div>
    </div>
    )
  }