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
        [HttpGet("GetAll")]
        public ContentResult GetFullStock()
        {

            var result = this.GetAllStock();

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
                Content = JsonConvert.SerializeObject(new { rows = lst }, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }),
            };

        }

        private List<BlackrockDbStock> GetAllStock()
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


        [HttpGet("TopGainer")]
        public ContentResult GetTopGainer()
        {
            var list = this.GetAllStock();
            var maxResult = list.OrderByDescending(x => x.StockNet).First();

            return new ContentResult
            {
                ContentType = "application/json",
                Content = JsonConvert.SerializeObject(new { rows = maxResult }, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }),
            };

        }

        [HttpGet("GetDateRanges")]
        public ContentResult GetDateRanges(string stardate, string enddate)
        {
            var result = this.GetAllStock();


            if (stardate != null && enddate != null)
            {
                var stardate1 = DateTime.ParseExact(stardate, "dd/MM/yyyy", CultureInfo.InvariantCulture).ToString("dd/MM/yyyy");
                var enddate1 = DateTime.ParseExact(enddate, "dd/MM/yyyy", CultureInfo.InvariantCulture).ToString("dd/MM/yyyy");

                var betweenDates = result.Where(i => i.StockDate >= DateTime.ParseExact(stardate1, "dd/MM/yyyy", CultureInfo.InvariantCulture) && i.StockDate <= DateTime.ParseExact(enddate1, "dd/MM/yyyy", CultureInfo.InvariantCulture)).ToList();

                return new ContentResult
                {
                    ContentType = "application/json",
                    Content = JsonConvert.SerializeObject(new {rows = betweenDates }, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }),
                };
            }
            else
            {
                return new ContentResult
                {
                    ContentType = "application/json",
                    Content = JsonConvert.SerializeObject(new { rows = result }, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }),
                };
            }


        }

     
    }
}
