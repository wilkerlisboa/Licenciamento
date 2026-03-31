import { NavLink, useNavigate } from "react-router-dom"

export default function Menu() {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <div className="d-flex flex-column vh-100 bg-dark text-white p-4" style={{width:"260px"}}>

      {/* LOGO */}
      <div className="mb-5">
        <h5 className="fw-bold mb-0">Licenciamentos</h5>
        <small className="text-secondary">Serviços</small>
      </div>

      {/* MENU */}
      <ul className="nav flex-column gap-2">

        <li>
          <NavLink 
            to="/usuarios"
            className={({ isActive }) =>
              `nav-link text-white rounded-3 px-3 py-2 d-flex align-items-center gap-2 
              ${isActive ? "bg-primary" : ""}`
            }
          >
            <i className="bi bi-people"></i>
            Usuários
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/lojas"
            className={({ isActive }) =>
              `nav-link text-white rounded-3 px-3 py-2 d-flex align-items-center gap-2 
              ${isActive ? "bg-primary" : ""}`
            }
          >
            <i className="bi bi-shop"></i>
            Lojas
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/licencas"
            className={({ isActive }) =>
              `nav-link text-white rounded-3 px-3 py-2 d-flex align-items-center gap-2 
              ${isActive ? "bg-primary" : ""}`
            }
          >
            <i className="bi bi-file-earmark-text"></i>
            Licenças
          </NavLink>
        </li>

      </ul>

      {/* FOOTER */}
      <div className="mt-auto">

        <div className="d-flex align-items-center gap-3 p-2 rounded bg-secondary bg-opacity-25 mb-3">
          <div className="bg-primary rounded-circle d-flex justify-content-center align-items-center fw-bold"
               style={{width:"40px", height:"40px"}}>
            W
          </div>

          <div className="flex-grow-1">
            <small className="d-block fw-semibold">Wilker</small>
            <small className="text-secondary">Administrador</small>
          </div>
        </div>

        <button 
          onClick={handleLogout}
          className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2"
        >
          <i className="bi bi-box-arrow-right"></i>
          Sair
        </button>

      </div>

    </div>
  )
}