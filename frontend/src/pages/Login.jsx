import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5245/api/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          senha: senha
        })
      });

      if (!response.ok) {
        throw new Error("Email ou senha inválidos");
      }

      const data = await response.json();

      // salva token
      localStorage.setItem("token", data.token);

      // redireciona
      navigate("/usuarios");

    } catch (error) {
      alert(error.message);
    }
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
                  required
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
                  required
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