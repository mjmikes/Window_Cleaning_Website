using Microsoft.AspNetCore.Mvc;

namespace Window_Cleaning_Website.Controllers
{
    public class CalculatorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}