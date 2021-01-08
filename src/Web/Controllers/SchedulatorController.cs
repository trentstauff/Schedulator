using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Service;
using Models;
using Microsoft.AspNetCore.Identity;
using Web.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace Web.Controllers
{
    [Authorize]
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
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return await _service.GetEvents(userId);
        }
    }
}
