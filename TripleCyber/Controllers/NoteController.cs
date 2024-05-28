
using Microsoft.AspNetCore.Mvc;
using TC.Service;
using TC.Service.Resources;
using TripleCyber.Resorces;

namespace TripleCyber.Controllers
{
    public class NoteController : Controller
    {
        private readonly INoteService service;

        public NoteController(INoteService service)
        {
            this.service = service;
        }


        [HttpGet()]
        public async virtual Task<IActionResult> Get(int page, int perPage)
        {
            // return await this.GetHttpResponseAsync(async () =>
            var pagingResult = await this.service.GetNotesAsync(page, perPage);

            return Ok(pagingResult);
        }

        [HttpGet("{id}")]
        public async virtual Task<IActionResult> Get(int id)
        {
            var pagingResult = await this.service.GetNoteByIdAsync(id);

            return Ok(pagingResult);
        }

        [HttpPost]
        public virtual async Task<IActionResult> PostAsync([FromBody] NoteRequest request)
        {
            if (request == null)
            {
                return BadRequest(Constante.ErrorParameter);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            if (!await this.service.CreateNoteAsync(request))
                return BadRequest(Constante.ErrorDataBase);

            return Ok(request);
        }

        [HttpPut]
        public virtual async Task<IActionResult> PutAsync([FromBody] NoteRequest request)
        {
            if (request == null)
            {
                return BadRequest(Constante.ErrorParameter);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            if (!await this.service.UpdateNoteAsync(request))
                return BadRequest(Constante.ErrorDataBase);

            return Ok(request);

        }

    }
}
