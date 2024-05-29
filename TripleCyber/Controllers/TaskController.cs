
using Microsoft.AspNetCore.Mvc;
using TC.Service;
using TC.Service.Resources;
using TripleCyber.Resorces;

namespace TripleCyber.Controllers
{
    [Route("api/[controller]")]
    public class TaskController : Controller
    {
        private readonly ITaskService service;

        public TaskController(ITaskService service)
        {
            this.service = service;
        }


        [HttpGet()]
        public async virtual Task<IActionResult> Get(int page, int perPage)
        {
            // return await this.GetHttpResponseAsync(async () =>
            var pagingResult = await this.service.GetTasksAsync(page, perPage);

            return Ok(pagingResult);
        }

        [HttpGet("{id}")]
        public async virtual Task<IActionResult> Get(int id)
        {
            var pagingResult = await this.service.GetTaskByIdAsync(id);

            return Ok(pagingResult);
        }

        [HttpPost]
        public virtual async Task<IActionResult> PostAsync([FromBody] TaskRequest request)
        {
            if (request == null)
            {
                return BadRequest(Constante.ErrorParameter);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            if (!await this.service.CreateTaskAsync(request))
                return BadRequest(Constante.ErrorDataBase);

            return Ok(request);
        }

        [HttpPut]
        public virtual async Task<IActionResult> PutAsync([FromBody] TaskRequest request)
        {
            if (request == null)
            {
                return BadRequest(Constante.ErrorParameter);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            if (!await this.service.UpdateTaskAsync(request))
                return BadRequest(Constante.ErrorDataBase);

            return Ok(request);

        }

    }
}
