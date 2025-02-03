using Microsoft.AspNetCore.Mvc;

namespace Window_Cleaning_Website.Controllers
{
    public class ServicesController : Controller
    {
        public IActionResult WindowCleaning()
        {
            return View();
        }

        public IActionResult TrashBinCleaning()
        {
            return View();
        }
    }
}