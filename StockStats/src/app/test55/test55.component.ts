import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { TestService } from '../services/test.service';
import { Grid } from 'ag-grid-community';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Stock } from '../common/stock';

@Component({
  selector: 'app-test55',
  templateUrl: './test55.component.html',
  styleUrls: ['./test55.component.scss'],
})
export class Test55Component implements OnInit {
  protected pagingConf: any = {};
  pageSize = 25;
  // source: LocalDataSource;
  source: any = new LocalDataSource();

  settings = {
    pager: { perPage: 5 }, //pagination – rows per page
    hideSubHeader: false, //hide header searchboxes for search (filters)
    display: true,
    attr: {
      class: 'table table-bordered',
    },
    columns: {
      company_name: {
        title: 'name',
      },
      id: {
        title: 'id',
      },

      stock_adj_close: {
        title: 'adj close',
      },
      stock_close: {
        title: 'close',
      },

      stock_low: {
        title: 'low',
      },
      stock_high: {
        title: 'high',
      },

      stock_open: {
        title: 'open',
      },

      stock_date: {
        title: 'date',
      },

      stock_net: {
        title: 'net',
      },

      stock_volume: {
        title: 'volume',
      },
    },
  };

  data: any = [];

  constructor(
    private service: TestService,
    private navSrvc: NavbarService // private viewContainer: ViewContainerRef
  ) {
    this.navSrvc.show();
  }

  ngOnInit() {
    // this.source = new LocalDataSource();
    // this.source.onChanged().subscribe((change) => {
    //   if (change.action === 'page') {
    //     this.pageChange(change.paging.page);
    //   }
    // });

    this.service.getAllStocks().subscribe((data) => {
      this.data = data['rows'];
      //  this.source.load(data);
    });
  }

  // pageChange(pageIndex) {
  //   const loadedRecordCount = this.source.count();
  //   const lastRequestedRecordIndex = pageIndex * this.pageSize;
  //   if (loadedRecordCount <= lastRequestedRecordIndex) {
  //     let myFilter; //This is your filter.
  //     myFilter.startIndex = loadedRecordCount + 1;
  //     myFilter.recordCount = this.pageSize + 100; //extra 100 records improves UX.
  //     this.myService.getData(myFilter) //.toPromise()
  //       .then(data => {
  //         if (this.source.count() > 0){
  //           data.forEach(d => this.source.add(d));
  //           this.source.getAll()
  //           .then(d => this.source.load(d))
  //       }
  //         else
  //           this.source.load(data);
  //       })
  //   }
  // }
}
