import { useState } from "react"
import Menu from "../components/Menu"

export default function Usuarios(){

  const [modalOpen, setModalOpen] = useState(false)
  const [modo, setModo] = useState("") // ver | editar | novo
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null)

  const [usuarios, setUsuarios] = useState([
    {
      nome: "João Silva",
      email: "joao@email.com",
      senha: "123456",
      status: "Ativo"
    },
    {
      nome: "Maria Souza",
      email: "maria@email.com",
      senha: "654321",
      status: "Inativo"
    }
  ])

  function abrirModal(usuario, tipo){

    if(tipo === "novo"){
      setUsuarioSelecionado({
        nome: "",
        email: "",
        senha: "",
        status: "Ativo"
      })
    } else {
      setUsuarioSelecionado(usuario)
    }

    setModo(tipo)
    setModalOpen(true)
  }

  function fecharModal(){
    setModalOpen(false)
  }

  function salvar(){

    if(modo === "novo"){
      setUsuarios([...usuarios, usuarioSelecionado])
    }

    if(modo === "editar"){
      const atualizados = usuarios.map(u =>
        u.email === usuarioSelecionado.email ? usuarioSelecionado : u
      )
      setUsuarios(atualizados)
    }

    setModalOpen(false)
  }

  return(

    <div className="d-flex">

      <Menu />

      <div className="flex-grow-1 bg-light p-4">

        <h3 className="fw-bold mb-4">Dashboard</h3>

        {/* CARDS */}
        <div className="row g-4 mb-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body d-flex justify-content-between">
                <div>
                  <small className="text-secondary">Licenças</small>
                  <h3 className="fw-bold">{usuarios.length}</h3>
                </div>
                <i className="bi bi-file-earmark-text fs-1 text-primary"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body d-flex justify-content-between">
                <div>
                  <small className="text-secondary">Total Pago</small>
                  <h3 className="fw-bold">R$ 8.500</h3>
                </div>
                <i className="bi bi-cash-stack fs-1 text-success"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body d-flex justify-content-between">
                <div>
                  <small className="text-secondary">Canceladas</small>
                  <h3 className="fw-bold text-danger">12</h3>
                </div>
                <i className="bi bi-x-circle fs-1 text-danger"></i>
              </div>
            </div>
          </div>

        </div>

        {/* TABELA */}
        <div className="card border-0 shadow-sm">

          <div className="card-body">

            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Usuários</h5>

              <button 
                className="btn btn-primary btn-sm"
                onClick={() => abrirModal(null, "novo")}
              >
                + Novo Usuário
              </button>
            </div>

            <table className="table table-hover align-middle">

              <thead className="table-light">
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th className="text-end">Ações</th>
                </tr>
              </thead>

              <tbody>
                {usuarios.map((u, i) => (
                  <tr key={i}>
                    <td>{u.nome}</td>
                    <td>{u.email}</td>
                    <td>
                      <span className={`badge ${u.status === "Ativo" ? "bg-success" : "bg-danger"}`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="text-end">

                      <button 
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => abrirModal(u, "ver")}
                      >
                        <i className="bi bi-eye"></i>
                      </button>

                      <button 
                        className="btn btn-sm btn-outline-warning"
                        onClick={() => abrirModal(u, "editar")}
                      >
                        <i className="bi bi-pencil"></i>
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
                  {modo === "ver" && "Detalhes do Usuário"}
                  {modo === "editar" && "Editar Usuário"}
                  {modo === "novo" && "Novo Usuário"}
                </h5>
                <button className="btn-close" onClick={fecharModal}></button>
              </div>

              <div className="modal-body">

                {/* NOME */}
                <div className="mb-3">
                  <label>Nome</label>
                  <input
                    className="form-control"
                    value={usuarioSelecionado.nome}
                    disabled={modo === "ver"}
                    onChange={(e)=>setUsuarioSelecionado({
                      ...usuarioSelecionado,
                      nome: e.target.value
                    })}
                  />
                </div>

                {/* EMAIL */}
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    className="form-control"
                    value={usuarioSelecionado.email}
                    disabled={modo === "ver"}
                    onChange={(e)=>setUsuarioSelecionado({
                      ...usuarioSelecionado,
                      email: e.target.value
                    })}
                  />
                </div>

                {/* SENHA */}
                <div className="mb-3">
                  <label>Senha</label>
                  <input
                    className="form-control"
                    value={usuarioSelecionado.senha}
                    disabled={modo === "ver"}
                    onChange={(e)=>setUsuarioSelecionado({
                      ...usuarioSelecionado,
                      senha: e.target.value
                    })}
                  />
                </div>

              </div>

              <div className="modal-footer">

                <button className="btn btn-secondary" onClick={fecharModal}>
                  Voltar
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