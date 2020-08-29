using System;
using System.Collections.Generic;
using System.Data.Entity.Core.EntityClient;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.WebPages;
using JQueryDataTableInMVC.DTO;
using JQueryDataTableInMVC.Models;
using Microsoft.OData.Edm;

namespace JQueryDataTableInMVC.Controllers
{
    public class EmployeeController : Controller
    {
        //
        // GET: /Employee/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetList()
        {
            using (blackrock_dbEntities1 context = new blackrock_dbEntities1())
            {
                var clientIdParameter = new SqlParameter("@p1", 4);

                var result = context.Database
                    .SqlQuery<BlackRockStockDto>("usp_GetMarketStats @p1", clientIdParameter)
                    .ToList();

                return Json(new { data = result }, JsonRequestBehavior.AllowGet);
            }

        }



        public ActionResult GetDateRanges(string stardate, string enddate)
        {
            using (blackrock_dbEntities1 context = new blackrock_dbEntities1())
            {

                var clientIdParameter = new SqlParameter("@p1", 4);

                var result = context.Database
                    .SqlQuery<BlackRockStockDto>("usp_GetMarketStats @p1", clientIdParameter)
                    .ToList();


                List<BlackStockResultDto> lst = new List<BlackStockResultDto>();
                result.ForEach(x =>
                  {
                      var resp = new BlackStockResultDto()
                      {
                          company_name = x.company_name,
                          stock_date = DateTime.ParseExact(x.stock_date, "dd/MM/yyyy", CultureInfo.InvariantCulture).Date,
                          stock_open = x.stock_open,
                          stock_high = x.stock_high,
                          stock_low = x.stock_low,
                          stock_close = x.stock_close,
                          stock_adj_close = x.stock_adj_close,
                          stock_volume = x.stock_volume,
                          stock_net = x.stock_net
                      };
                      lst.Add(resp);
                  });


                if (stardate != null && enddate != null)
                {
                    Date stardate1 = DateTime.ParseExact(stardate, "dd/MM/yyyy", CultureInfo.InvariantCulture).Date;
                    Date enddate1 = DateTime.ParseExact(enddate, "dd/MM/yyyy", CultureInfo.InvariantCulture).Date;
                    var betweenDates = lst.Where(i => i.stock_date >= stardate1 && i.stock_date <= enddate1).ToList();

                    return Json(new { data = betweenDates }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { data = result }, JsonRequestBehavior.AllowGet);
                }


            }

        }

    }
}