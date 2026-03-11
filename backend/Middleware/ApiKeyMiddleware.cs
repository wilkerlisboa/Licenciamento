using backend.Data;

public class ApiKeyMiddleware
{
    private readonly RequestDelegate _next;

    public ApiKeyMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context, AppDbContext db)
    {
        var path = context.Request.Path;

        // Rotas públicas
        if (context.Request.Method == "POST" &&
           (path.StartsWithSegments("/api/usuarios") ||
            path.StartsWithSegments("/api/licenca")))
        {
            await _next(context);
            return;
        }

        if (!context.Request.Headers.TryGetValue("x-api-key", out var token))
        {
            context.Response.StatusCode = 401;
            await context.Response.WriteAsync("Token não enviado");
            return;
        }

        string tokenValue = token.ToString();

        var usuario = db.Usuarios.FirstOrDefault(x => x.Token == tokenValue);
        var licenca = db.Licencas.FirstOrDefault(x => x.Token == tokenValue);

        if (usuario == null && licenca == null)
        {
            context.Response.StatusCode = 403;
            await context.Response.WriteAsync("Token inválido");
            return;
        }

        await _next(context);
    }
}