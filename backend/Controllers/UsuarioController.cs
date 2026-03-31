using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/usuarios")]
    public class UsuarioController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsuarioController(AppDbContext context)
        {
            _context = context;
        }

        // 🔐 LOGIN
        [HttpPost("login")]
        public IActionResult Login([FromBody] Usuario login)
        {
            var usuario = _context.Usuarios
                .FirstOrDefault(u =>
                    u.Email.Trim().ToLower() == login.Email.Trim().ToLower() &&
                    u.Senha == login.Senha
                );

            if (usuario == null)
                return Unauthorized("Email ou senha inválidos");

            return Ok(new
            {
                token = usuario.Token,
                email = usuario.Email
            });
        }

        // Criar usuário
        [HttpPost]
        public IActionResult CriarUsuario([FromBody] Usuario usuario)
        {
            usuario.Token = Guid.NewGuid().ToString();
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();

            return CreatedAtAction(nameof(Buscar), new { id = usuario.Id }, usuario);
        }

        // Listar todos
        [HttpGet]
        public IActionResult Listar()
        {
            var usuarios = _context.Usuarios.ToList();
            return Ok(usuarios);
        }

        // Buscar por ID
        [HttpGet("{id}")]
        public IActionResult Buscar(int id)
        {
            var usuario = _context.Usuarios.Find(id);

            if (usuario == null)
                return NotFound("Usuário não encontrado");

            return Ok(usuario);
        }

        // Atualizar usuário
        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, [FromBody] Usuario usuarioAtualizado)
        {
            var usuario = _context.Usuarios.Find(id);

            if (usuario == null)
                return NotFound("Usuário não encontrado");

            usuario.Email = usuarioAtualizado.Email;
            usuario.Senha = usuarioAtualizado.Senha;

            _context.SaveChanges();

            return Ok(usuario);
        }

        // Deletar usuário
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            var usuario = _context.Usuarios.Find(id);

            if (usuario == null)
                return NotFound("Usuário não encontrado");

            _context.Usuarios.Remove(usuario);
            _context.SaveChanges();

            return Ok(new { mensagem = "Usuário deletado com sucesso" });
        }
    }
}