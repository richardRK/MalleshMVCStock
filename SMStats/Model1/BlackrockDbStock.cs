using System;
using System.Collections.Generic;

namespace SMStats.Model1
{
    public partial class BlackrockDbStock
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public DateTime? StockDate { get; set; }
        public double? StockOpen { get; set; }
        public double? StockHigh { get; set; }
        public double? StockLow { get; set; }
        public double? StockClose { get; set; }
        public double? StockAdjClose { get; set; }
        public long? StockVolume { get; set; }
        public double? StockNet { get; set; }
    }
}
