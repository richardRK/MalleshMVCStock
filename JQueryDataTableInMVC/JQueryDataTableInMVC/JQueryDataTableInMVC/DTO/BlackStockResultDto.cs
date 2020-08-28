using Microsoft.OData.Edm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JQueryDataTableInMVC.DTO
{
    public class BlackStockResultDto
    {

        public int id { get; set; }
        public string company_name { get; set; }
        public Date stock_date { get; set; }
        public double? stock_open { get; set; }
        public double? stock_high { get; set; }
        public double? stock_low { get; set; }
        public double? stock_close { get; set; }
        public double? stock_adj_close { get; set; }
        public long? stock_volume { get; set; }
        public double? stock_net { get; set; }
    }
}