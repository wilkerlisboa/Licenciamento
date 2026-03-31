# 🚀 Sistema de Licenciamento de Software (SaaS)

Este projeto é um sistema completo de **licenciamento de software**, desenvolvido para controlar o acesso de aplicações externas com base em status de licença.

Ele permite que sistemas terceiros validem se estão **ativos, pendentes ou cancelados**, garantindo controle e segurança no uso.

---

## 🧠 Funcionalidades

### 🔐 Autenticação

* Cadastro de usuários
* Login com geração de token de sessão
* Logout invalidando sessão
* Proteção de rotas via middleware

### 📦 Produtos

* Cadastro de produtos
* Listagem geral
* Filtro por categoria
* Atualização e exclusão

### 🧾 Licenciamento

* Criação de licenças
* Consulta por ID
* Validação via API externa
* Controle de status:

  * ✅ Ativo
  * ⚠️ Pendente
  * ❌ Cancelado

### 🛡️ Middlewares

* **AuthMiddleware** → valida token do usuário
* **LicencaMiddleware** → bloqueia acesso baseado na licença

---

## 🏗️ Tecnologias Utilizadas

### Backend

* .NET (ASP.NET Core)
* Entity Framework Core
* SQLite
* Swagger (documentação da API)

### Frontend

* React (Vite)
* Bootstrap
* React Router

---

## 📁 Estrutura do Projeto

```
backend/
 ├── Controllers/
 ├── Data/
 ├── Middleware/
 ├── Models/
 ├── Migrations/
 ├── Program.cs

frontend/
 ├── src/
 ├── components/
 ├── pages/
```

---

## ⚙️ Como Rodar o Projeto

### 🔹 Backend (.NET)

```bash
cd backend
dotnet restore
dotnet ef database update
dotnet run
```

API disponível em:

```
http://localhost:5280
```

Swagger:

```
http://localhost:5280/swagger
```

---

### 🔹 Frontend (React + Vite)

```bash
cd frontend
yarn install
yarn dev
```

Frontend disponível em:

```
http://localhost:3000
```

---

## 🔑 Autenticação

Após login:

```json
{
  "token": "SEU_TOKEN_AQUI"
}
```

Use nas requisições protegidas:

```
x-session-token: SEU_TOKEN
```

---

## 🔎 Exemplo de Login

```bash
http POST :5280/api/usuarios/login email="user@email.com" senha="123"
```

---

## 🔒 Controle de Licença

O sistema consulta automaticamente uma API de licença e bloqueia o acesso conforme o status:

| Status    | Comportamento     |
| --------- | ----------------- |
| Ativo     | Acesso liberado   |
| Pendente  | Aviso ao usuário  |
| Cancelado | Sistema bloqueado |

---

## 🔄 Atualização de Licença

O backend verifica a licença automaticamente em segundo plano (loop assíncrono).

---

## 💡 Diferenciais

* Arquitetura modular
* Middleware de segurança
* Integração com sistema externo de licença
* Estrutura pronta para SaaS
* Fácil expansão para múltiplos clientes

---

## 🚀 Próximos Passos

* Implementar JWT (autenticação mais segura)
* Criar painel administrativo
* Deploy em produção (VPS ou cloud)
* Multi-tenant (várias empresas)

---

## 👨‍💻 Autor

Desenvolvido por **Wilker Lisboa**
🚀 Projeto focado em sistemas SaaS e controle de licenciamento

---

## 📄 Licença

Este projeto é de uso privado para fins de estudo e desenvolvimento.
