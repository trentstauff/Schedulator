using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Service;
using Models;

namespace Web.Controllers
{
    [ApiController]
    [Route("api")]
    public class SchedulatorController : Controller
    {
        private readonly IService _service;

        public SchedulatorController(IService service)
        {
            _service = service;
        }

        [HttpGet("events")]
        public async Task<ActionResult<List<Event>>> GetEvents()
        {
            return await _service.GetEvents("3");
        }
    }
}
