import { useState } from "react"
import Menu from "../components/Menu"

export default function Licencas(){

  const [modalOpen, setModalOpen] = useState(false)
  const [modo, setModo] = useState("") // ver | editar | novo
  const [licencaSelecionada, setLicencaSelecionada] = useState(null)

  const [licencas, setLicencas] = useState([
    {
      id: 2,
      nomeEmpresa: "Financeiro LTDA",
      tipoPagamento: "Pix",
      situacao: "Ativo",
      dataExpiracao: "14/03/2026",
      token: "af624cdb-8336-4669-8a0f-5e971b958214"
    },
    {
      id: 3,
      nomeEmpresa: "Mercado Central",
      tipoPagamento: "Cartão",
      situacao: "Cancelado",
      dataExpiracao: "20/02/2026",
      token: "bcd12345-xxxx-yyyy-zzzz"
    }
  ])

  function abrirModal(licenca, tipo){

    if(tipo === "novo"){
      setLicencaSelecionada({
        id: licencas.length + 1,
        nomeEmpresa: "",
        tipoPagamento: "",
        situacao: "Ativo",
        dataExpiracao: "",
        token: Math.random().toString(36).substring(2, 15)
      })
    } else {
      setLicencaSelecionada(licenca)
    }

    setModo(tipo)
    setModalOpen(true)
  }

  function fecharModal(){
    setModalOpen(false)
  }

  function salvar(){

    if(modo === "novo"){
      setLicencas([...licencas, licencaSelecionada])
    }

    if(modo === "editar"){
      const atualizadas = licencas.map(l =>
        l.id === licencaSelecionada.id ? licencaSelecionada : l
      )
      setLicencas(atualizadas)
    }

    setModalOpen(false)
  }

  function excluir(id){
    const confirm = window.confirm("Deseja excluir esta licença?")
    if(!confirm) return

    const filtradas = licencas.filter(l => l.id !== id)
    setLicencas(filtradas)
  }

  return(

    <div className="d-flex">

      <Menu />

      <div className="flex-grow-1 bg-light p-4">

        <h3 className="fw-bold mb-4">Licenças</h3>

        <div className="card border-0 shadow-sm">

          <div className="card-body">

            {/* TOPO */}
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Lista de Licenças</h5>

              <button 
                className="btn btn-primary btn-sm"
                onClick={() => abrirModal(null, "novo")}
              >
                + Nova Licença
              </button>
            </div>

            {/* TABELA */}
            <table className="table table-hover align-middle">

              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Empresa</th>
                  <th>Pagamento</th>
                  <th>Situação</th>
                  <th>Expiração</th>
                  <th>Token</th>
                  <th className="text-end">Ações</th>
                </tr>
              </thead>

              <tbody>
                {licencas.map((l) => (
                  <tr key={l.id}>
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

                    <td>
                      <small className="text-muted">
                        {l.token.slice(0,10)}...
                      </small>
                    </td>

                    <td className="text-end">

                      {/* VER */}
                      <button 
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => abrirModal(l, "ver")}
                      >
                        <i className="bi bi-eye"></i>
                      </button>

                      {/* EDITAR */}
                      <button 
                        className="btn btn-sm btn-outline-warning me-2"
                        onClick={() => abrirModal(l, "editar")}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>

                      {/* EXCLUIR */}
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => excluir(l.id)}
                      >
                        <i className="bi bi-trash"></i>
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
                  {modo === "ver" && "Detalhes da Licença"}
                  {modo === "editar" && "Editar Licença"}
                  {modo === "novo" && "Nova Licença"}
                </h5>
                <button className="btn-close" onClick={fecharModal}></button>
              </div>

              <div className="modal-body">

                <div className="mb-3">
                  <label>Empresa</label>
                  <input
                    className="form-control"
                    value={licencaSelecionada.nomeEmpresa}
                    disabled={modo === "ver"}
                    onChange={(e)=>setLicencaSelecionada({
                      ...licencaSelecionada,
                      nomeEmpresa: e.target.value
                    })}
                  />
                </div>

                <div className="mb-3">
                  <label>Pagamento</label>
                  <input
                    className="form-control"
                    value={licencaSelecionada.tipoPagamento}
                    disabled={modo === "ver"}
                    onChange={(e)=>setLicencaSelecionada({
                      ...licencaSelecionada,
                      tipoPagamento: e.target.value
                    })}
                  />
                </div>

                <div className="mb-3">
                  <label>Situação</label>
                  <input
                    className="form-control"
                    value={licencaSelecionada.situacao}
                    disabled={modo === "ver"}
                    onChange={(e)=>setLicencaSelecionada({
                      ...licencaSelecionada,
                      situacao: e.target.value
                    })}
                  />
                </div>

                <div className="mb-3">
                  <label>Expiração</label>
                  <input
                    className="form-control"
                    value={licencaSelecionada.dataExpiracao}
                    disabled={modo === "ver"}
                    onChange={(e)=>setLicencaSelecionada({
                      ...licencaSelecionada,
                      dataExpiracao: e.target.value
                    })}
                  />
                </div>

                <div className="mb-3">
                  <label>Token</label>
                  <input
                    className="form-control"
                    value={licencaSelecionada.token}
                    disabled
                  />
                </div>

              </div>

              <div className="modal-footer">

                <button className="btn btn-secondary" onClick={fecharModal}>
                  Fechar
                </button>

                {(modo === "editar" || modo === "novo") && (
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