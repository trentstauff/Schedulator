using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Models;
using Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly IService _service;
        public List<Event> Events { get; set; }

        public IndexModel(ILogger<IndexModel> logger, IService service)
        {
            _logger = logger;
            _service = service;
        }

        public async Task OnGet()
        {
            Events = await _service.GetEvents("1");
        }
    }
}
