using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Licenca
    {
        public int Id { get; set; }

        public string NomeEmpresa { get; set; }

        public string TipoPagamento { get; set; }

        public string Situacao { get; set; }

        public DateTime DataExpiracao { get; set; }
        public string Token { get; set; }
    }
}