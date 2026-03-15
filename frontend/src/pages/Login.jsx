import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, senha });
  };

  return (

    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center bg-light">

      <div className="card shadow-lg border-0" style={{width:"380px"}}>

        <div className="card-body p-4">

          <div className="text-center mb-4">
            <h3 className="fw-bold">Login</h3>
            <p className="text-muted mb-0">Acesse sua conta</p>
          </div>

          <form onSubmit={handleLogin}>

            <div className="mb-3">
              <label className="form-label">Email</label>

              <div className="input-group">
                <span className="input-group-text">📧</span>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Senha</label>

              <div className="input-group">
                <span className="input-group-text">🔒</span>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e)=>setSenha(e.target.value)}
                />
              </div>
            </div>

            <button className="btn btn-dark w-100">
              Entrar
            </button>

            <div className="text-center mt-3">
              <small>
                Não tem conta? <a href="#">Cadastrar</a>
              </small>
            </div>

          </form>

        </div>

      </div>

    </div>

  );
}