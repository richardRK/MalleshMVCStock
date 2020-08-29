import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions, IGetRowsParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-stock-stats',
  templateUrl: './stock-stats.component.html',
  styleUrls: ['./stock-stats.component.scss'],
})
export class StockStatsComponent implements OnInit {

  @ViewChild('myGrid') myGrid: AgGridAngular;

  public gridOptions: Partial<GridOptions>;
  public gridApi;
  public gridColumnApi;
  public columnDefs;
  public cacheOverflowSize;
  public maxConcurrentDatasourceRequests;
  public infiniteInitialRowCount;
  userSubscriber: Subscription;

  rowData: any;


  
  constructor(public nav: NavbarService,private test: TestService) {
    nav.show();

    this.columnDefs = [
      { headerName: 'User Id', field: 'id', sortable: true },
      { headerName: 'First Name', field: 'first_name', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Last Name', field: 'last_name', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Email', field: 'email', sortable: true },
      { headerName: 'Gender', field: 'gender', sortable: true },
      { headerName: 'Company', field: 'company', sortable: true }
    ];

    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 2;

    this.gridOptions = {
      headerHeight: 45,
      rowHeight: 30,
      cacheBlockSize: 90,
      paginationPageSize: 90,
      rowModelType: 'infinite',
    }



  }

  onGridReady(params) {
    console.log('On Grid Ready');

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    var datasource = {
      getRows: (params: IGetRowsParams) => {
        //  TODO: Call a service that fetches list of users
        console.log("Fetching startRow " + params.startRow + " of " + params.endRow);
        console.log(params);
        this.test.getUsers(params)
          .subscribe(data => { 
            console.log(data);
            params.successCallback(data) 
          });
      }
    }

    this.gridApi.setDatasource(datasource);
  }


  
  

  ngOnInit(): void {}


 


  
}
