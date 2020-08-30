import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { TestService } from '../services/test.service';
import { Grid } from 'ag-grid-community';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-test55',
  templateUrl: './test55.component.html',
  styleUrls: ['./test55.component.scss'],
})
export class Test55Component implements OnInit {
  protected pagingConf: any = {};

  pageSize = 25;

  source: LocalDataSource;

  ngOnInit() {
    // this.source = new LocalDataSource();

    // this.source.onChanged().subscribe((change) => {
    //   if (change.action === 'page') {
    //     this.pageChange(change.paging.page);
    //   }
    // });
  }

  pageChange(pageIndex) {
    // const loadedRecordCount = this.source.count();
    // const lastRequestedRecordIndex = pageIndex * this.pageSize;
    // if (loadedRecordCount <= lastRequestedRecordIndex) {
    //   let myFilter; //This is your filter.
    //   myFilter.startIndex = loadedRecordCount + 1;
    //   myFilter.recordCount = this.pageSize + 100; //extra 100 records improves UX.
    //   this.myService.getData(myFilter) //.toPromise()
    //     .then(data => {
    //       if (this.source.count() > 0){
    //         data.forEach(d => this.source.add(d));
    //         this.source.getAll()
    //         .then(d => this.source.load(d))
    //     }
    //       else
    //         this.source.load(data);
    //     })
    // }
  }

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    // ... other rows here
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
    {
      id: 12,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },

    {
      id: 13,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },

    {
      id: 14,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
  ];

  settings = {
    pager: { perPage: 2 }, //pagination – rows per page
    hideSubHeader: false, //hide header searchboxes for search (filters)
    display: true,
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
    },
  };

  constructor(
    private service: TestService,
    private navSrvc: NavbarService // private viewContainer: ViewContainerRef
  ) {
    this.navSrvc.show();
  }
}
