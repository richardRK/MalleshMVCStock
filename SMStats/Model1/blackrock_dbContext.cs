using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SMStats.Dto;

namespace SMStats.Model1
{
    public partial class blackrock_dbContext : DbContext
    {
        public blackrock_dbContext()
        {
        }

        public blackrock_dbContext(DbContextOptions<blackrock_dbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<BlackrockDbStock> BlackrockDbStock { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=LAPTOP-PH5TDNNL\\ROHISQL;Database=blackrock_db;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BlackrockDbStock>(entity =>
            {
                entity.ToTable("blackrock_db.stock");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CompanyName)
                    .HasColumnName("company_name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.StockAdjClose).HasColumnName("stock_adj_close");

                entity.Property(e => e.StockClose).HasColumnName("stock_close");

                entity.Property(e => e.StockDate)
                    .HasColumnName("stock_date")
                    .HasColumnType("date");

                entity.Property(e => e.StockHigh).HasColumnName("stock_high");

                entity.Property(e => e.StockLow).HasColumnName("stock_low");

                entity.Property(e => e.StockNet).HasColumnName("stock_net");

                entity.Property(e => e.StockOpen).HasColumnName("stock_open");

                entity.Property(e => e.StockVolume).HasColumnName("stock_volume");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
