using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ProyectoBohemia.Data;
using ProyectoBohemia.Models;

namespace ProyectoBohemia.Controllers;

public class Clientescontroller : Controller
{
    private ApplicationDbContext _context;

    public Clientescontroller(ApplicationDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {

        return View();
    }
}