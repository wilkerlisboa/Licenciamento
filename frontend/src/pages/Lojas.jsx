import { useState } from "react"
import Menu from "../components/Menu"

export default function Lojas(){

  const [modalOpen, setModalOpen] = useState(false)
  const [modo, setModo] = useState("") // ver | novo
  const [lojaSelecionada, setLojaSelecionada] = useState(null)

  const [lojas, setLojas] = useState([
    {
      id: 2,
      nomeEmpresa: "Financeiro LTDA",
      tipoPagamento: "Pix",
      situacao: "Ativo",
      dataExpiracao: "14/03/2026",
      valorPago: "R$ 500",
      localizacao: "São Paulo"
    },
    {
      id: 3,
      nomeEmpresa: "Mercado Central",
      tipoPagamento: "Cartão",
      situacao: "Inativo",
      dataExpiracao: "20/02/2026",
      valorPago: "R$ 300",
      localizacao: "Rio de Janeiro"
    }
  ])

  function abrirModal(loja, tipo){

    if(tipo === "novo"){
      setLojaSelecionada({
        id: lojas.length + 1,
        nomeEmpresa: "",
        tipoPagamento: "",
        situacao: "Ativo",
        dataExpiracao: "",
        valorPago: "",
        localizacao: ""
      })
    } else {
      setLojaSelecionada(loja)
    }

    setModo(tipo)
    setModalOpen(true)
  }

  function fecharModal(){
    setModalOpen(false)
  }

  function salvar(){

    if(modo === "novo"){
      setLojas([...lojas, lojaSelecionada])
    }

    setModalOpen(false)
  }

  return(

    <div className="d-flex">

      <Menu />

      <div className="flex-grow-1 bg-light p-4">

        <h3 className="fw-bold mb-4">Lojas</h3>

        <div className="card border-0 shadow-sm">

          <div className="card-body">

            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Lista de Lojas</h5>

              <button 
                className="btn btn-primary btn-sm"
                onClick={() => abrirModal(null, "novo")}
              >
                + Nova Loja
              </button>
            </div>

            <table className="table table-hover align-middle">

              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Empresa</th>
                  <th>Pagamento</th>
                  <th>Situação</th>
                  <th>Expiração</th>
                  <th className="text-end">Ações</th>
                </tr>
              </thead>

              <tbody>
                {lojas.map((l, i) => (
                  <tr key={i}>
                    <td>{l.id}</td>
                    <td>{l.nomeEmpresa}</td>

                    <td>
                      <span className={`badge ${
                        l.tipoPagamento === "Pix" ? "bg-success" : "bg-warning text-dark"
                      }`}>
                        {l.tipoPagamento}
                      </span>
                    </td>

                    <td>
                      <span className={`badge ${
                        l.situacao === "Ativo" ? "bg-primary" : "bg-danger"
                      }`}>
                        {l.situacao}
                      </span>
                    </td>

                    <td>{l.dataExpiracao}</td>

                    <td className="text-end">
                      <button 
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => abrirModal(l, "ver")}
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="modal d-block">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">
                  {modo === "ver" && "Detalhes da Loja"}
                  {modo === "novo" && "Nova Loja"}
                </h5>
                <button className="btn-close" onClick={fecharModal}></button>
              </div>

              <div className="modal-body">

                {/* EMPRESA */}
                <div className="mb-3">
                  <label>Empresa</label>
                  <input
                    className="form-control"
                    value={lojaSelecionada.nomeEmpresa}
                    disabled={modo === "ver"}
                    onChange={(e)=>setLojaSelecionada({
                      ...lojaSelecionada,
                      nomeEmpresa: e.target.value
                    })}
                  />
                </div>

                {/* PAGAMENTO */}
                <div className="mb-3">
                  <label>Pagamento</label>
                  <input
                    className="form-control"
                    value={lojaSelecionada.tipoPagamento}
                    disabled={modo === "ver"}
                    onChange={(e)=>setLojaSelecionada({
                      ...lojaSelecionada,
                      tipoPagamento: e.target.value
                    })}
                  />
                </div>

                {/* SITUAÇÃO */}
                <div className="mb-3">
                  <label>Situação</label>
                  <input
                    className="form-control"
                    value={lojaSelecionada.situacao}
                    disabled={modo === "ver"}
                    onChange={(e)=>setLojaSelecionada({
                      ...lojaSelecionada,
                      situacao: e.target.value
                    })}
                  />
                </div>

                {/* VALOR */}
                <div className="mb-3">
                  <label>Valor Pago</label>
                  <input
                    className="form-control"
                    value={lojaSelecionada.valorPago}
                    disabled={modo === "ver"}
                    onChange={(e)=>setLojaSelecionada({
                      ...lojaSelecionada,
                      valorPago: e.target.value
                    })}
                  />
                </div>

                {/* LOCALIZAÇÃO */}
                <div className="mb-3">
                  <label>Localização</label>
                  <input
                    className="form-control"
                    value={lojaSelecionada.localizacao}
                    disabled={modo === "ver"}
                    onChange={(e)=>setLojaSelecionada({
                      ...lojaSelecionada,
                      localizacao: e.target.value
                    })}
                  />
                </div>

              </div>

              <div className="modal-footer">

                <button className="btn btn-secondary" onClick={fecharModal}>
                  Fechar
                </button>

                {modo === "novo" && (
                  <button className="btn btn-primary" onClick={salvar}>
                    Salvar
                  </button>
                )}

              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  )
}