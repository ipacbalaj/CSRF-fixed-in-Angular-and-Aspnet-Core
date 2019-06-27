using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace aspnetcoreapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AntiForgeryTestController : ControllerBase
    {
        [HttpGet]
        [ValidateAntiForgeryToken]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "This", "is", "an", "antiforgery", "test" };
        }
    }
}
