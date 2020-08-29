using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.OData.Edm;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using SMStats.Dto;
using SMStats.Model1;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SMStats.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Stock1Controller : ControllerBase
    {
        // GET: api/<Stock1Controller>
        [HttpGet]
        public ContentResult Get()
        {

            var result = this.getAllStock();

            List<BlackStockResultDto> lst = new List<BlackStockResultDto>();

            var format = "MM/dd/yyyy hh:mm:ss tt";

            result.ForEach(x =>
            {
                var resp = new BlackStockResultDto()
                {
                    company_name = x.CompanyName,
                    stock_date = DateTime.ParseExact(x.StockDate.ToString(), format, CultureInfo.InvariantCulture).ToString("dd/MM/yyyy"),
                    stock_open = x.StockOpen,
                    stock_high = x.StockHigh,
                    stock_low = x.StockLow,
                    stock_close = x.StockClose,
                    stock_adj_close = x.StockAdjClose,
                    stock_volume = x.StockVolume,
                    stock_net = x.StockNet
                };
                lst.Add(resp);
            });

            return new ContentResult
            {
                ContentType = "application/json",
                Content = JsonConvert.SerializeObject(new { content = lst, rows = lst }, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }),
            };

        }

        private List<BlackrockDbStock> getAllStock()
        {
            using (blackrock_dbContext context = new blackrock_dbContext())
            {
                var p1 = 4;
                var result = context.BlackrockDbStock
                  .FromSqlRaw("EXECUTE usp_GetMarketStats {0}", p1)
                  .ToList();
                return result;
            }
        }

        public ContentResult GetDateRanges(string stardate, string enddate)
        {
            var result = this.getAllStock();


            List<BlackStockResultDto> lst = new List<BlackStockResultDto>();

            var format = "MM/dd/yyyy hh:mm:ss tt";
            result.ForEach(x =>
            {
                var resp = new BlackStockResultDto()
                {
                    company_name = x.CompanyName,
                    stock_date = DateTime.ParseExact(x.StockDate.ToString(), format, CultureInfo.InvariantCulture).ToString("dd/MM/yyyy"),
                    stock_open = x.StockOpen,
                    stock_high = x.StockHigh,
                    stock_low = x.StockLow,
                    stock_close = x.StockClose,
                    stock_adj_close = x.StockAdjClose,
                    stock_volume = x.StockVolume,
                    stock_net = x.StockNet
                };
                lst.Add(resp);
            });


            if (stardate != null && enddate != null)
            {
                var stardate1 = DateTime.ParseExact(stardate, "dd/MM/yyyy", CultureInfo.InvariantCulture).ToString("dd/MM/yyyy");
                var enddate1 = DateTime.ParseExact(enddate, "dd/MM/yyyy", CultureInfo.InvariantCulture).ToString("dd/MM/yyyy");
                var betweenDates = lst.Where(i => Date.Parse(i.stock_date) >= Date.Parse(stardate1) && Date.Parse(i.stock_date) <= Date.Parse(enddate1)).ToList();

                return new ContentResult
                {
                    ContentType = "application/json",
                    Content = JsonConvert.SerializeObject(new { content = betweenDates, rows = betweenDates }, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }),
                };
            }
            else
            {
                return new ContentResult
                {
                    ContentType = "application/json",
                    Content = JsonConvert.SerializeObject(new { content = result, rows = result }, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }),
                };
            }


        }

        // GET api/<Stock1Controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<Stock1Controller>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<Stock1Controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<Stock1Controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
