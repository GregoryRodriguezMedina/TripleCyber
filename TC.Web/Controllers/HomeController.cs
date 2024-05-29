using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using TC.Service;
using TC.Service.Resources;
using TC.Web.Models;

namespace TC.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ITaskService taskService;

        public HomeController(ILogger<HomeController> logger, ITaskService taskService)
        {
            _logger = logger;
            this.taskService = taskService;
        }

        public IActionResult Index()
        {
            return View();
        }
 public IActionResult Tasks()
        {
            return View();
        }
       
 public IActionResult CreateEditTask()
        {
            return View();
        }
        public async Task<IActionResult> CreateEditTaskFrom(TaskRequest model)
        {
            var result = await this.taskService.CreateTaskAsync(model);

            return RedirectToAction("Tasks");
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
