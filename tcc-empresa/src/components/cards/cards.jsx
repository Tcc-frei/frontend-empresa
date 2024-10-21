export default function Card({estrelas, comentario, local, nome}){
    return(
      <div className="card">
      <div className="estrelas">{estrelas}</div>
      <div className="comentario">{comentario}</div>
      <p className="nome">{nome}</p>
      <div className="local">{local}</div>
    </div>
    )
  }