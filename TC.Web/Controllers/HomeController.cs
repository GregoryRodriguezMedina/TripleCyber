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
        public async Task<IActionResult> DeleteTask(int id)
        {
            var tasks = await this.taskService.DeleteTaskAsync(id);
            return RedirectToAction("Tasks");
        }
        public async Task<IActionResult> Tasks()
        {
            var tasks = await this.taskService.GetTasksAsync(1, 100);
            return View(tasks);
        }

        public async Task<IActionResult> CreateEditTask(int? id)
        {
            if (id != null)
            {
                var model = await this.taskService.GetTaskByIdAsync(id.Value);
                return View(model);
            }
            return View();
        }
        public async Task<IActionResult> CreateEditTaskFrom(TaskRequest model)
        {
            if (model.Id == 0)
                await this.taskService.CreateTaskAsync(model);
            else await this.taskService.UpdateTaskAsync(model.Id, model);


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