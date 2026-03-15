export default function Menu() {

  return (

    <div className="bg-dark text-white vh-100 p-3" style={{width:"250px"}}>

      <h4 className="text-center mb-4">
        Sistema
      </h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="#">
            📊 Dashboard
          </a>
        </li>

        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="#">
            👤 Usuários
          </a>
        </li>

        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="#">
            📦 Produtos
          </a>
        </li>

        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="#">
            ⚙ Configurações
          </a>
        </li>

        <li className="nav-item mt-4">
          <a className="nav-link text-danger" href="#">
            🚪 Sair
          </a>
        </li>

      </ul>

    </div>

  )
}