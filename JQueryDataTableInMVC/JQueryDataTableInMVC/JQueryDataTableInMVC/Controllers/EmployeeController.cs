using System;
using System.Collections.Generic;
using System.Data.Entity.Core.EntityClient;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using JQueryDataTableInMVC.DTO;
using JQueryDataTableInMVC.Models;

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
	}
}