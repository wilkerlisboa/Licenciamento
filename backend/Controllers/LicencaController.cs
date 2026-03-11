using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/licenca")]
    public class LicencaController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LicencaController(AppDbContext context)
        {
            _context = context;
        }

        // Criar licença
        [HttpPost]
        public IActionResult CriarLicenca([FromBody] Licenca licenca)
        {
            licenca.Token = Guid.NewGuid().ToString();
            _context.Licencas.Add(licenca);
            _context.SaveChanges();

            return CreatedAtAction(nameof(Buscar), new { id = licenca.Id }, licenca);
        }

        // Listar todas
        [HttpGet]
        public IActionResult Listar()
        {
            var licencas = _context.Licencas.ToList();
            return Ok(licencas);
        }

        // Buscar por ID
        [HttpGet("{id}")]
        public IActionResult Buscar(int id)
        {
            var licenca = _context.Licencas.Find(id);

            if (licenca == null)
                return NotFound("Licença não encontrada");

            return Ok(licenca);
        }

        // Atualizar licença
        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, [FromBody] Licenca licencaAtualizada)
        {
            var licenca = _context.Licencas.Find(id);

            if (licenca == null)
                return NotFound("Licença não encontrada");

            licenca.NomeEmpresa = licencaAtualizada.NomeEmpresa;
            licenca.TipoPagamento = licencaAtualizada.TipoPagamento;
            licenca.Situacao = licencaAtualizada.Situacao;
            licenca.DataExpiracao = licencaAtualizada.DataExpiracao;

            _context.SaveChanges();

            return Ok(licenca);
        }

        // Deletar licença
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            var licenca = _context.Licencas.Find(id);

            if (licenca == null)
                return NotFound("Licença não encontrada");

            _context.Licencas.Remove(licenca);
            _context.SaveChanges();

            return Ok(new { mensagem = "Licença deletada com sucesso" });
        }
    }
}