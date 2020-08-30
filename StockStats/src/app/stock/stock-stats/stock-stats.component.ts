import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions, IGetRowsParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { TestService } from 'src/app/services/test.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-stock-stats',
  templateUrl: './stock-stats.component.html',
  styleUrls: ['./stock-stats.component.scss'],
})
export class StockStatsComponent implements OnInit {
  constructor(
    private service: TestService,
    private navSrvc: NavbarService,
    private viewContainer: ViewContainerRef
  ) {
    navSrvc.show();
  }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'fullName',
    'email',
    'mobile',
    'city',
    'departmentName',
    'actions',
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

 

  ngOnInit() {
    this.service.getEmployees().subscribe((list) => {
      // let array = list.map((item) => {
      //   let departmentName = this.departmentService.getDepartmentName(
      //     item.payload.val()['department']
      //   );
      //   return {
      //     $key: item.key,
      //     departmentName,
      //     ...item.payload.val(),
      //   };
      // });
      this.listData = new MatTableDataSource(list);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      this.listData.filterPredicate = (data, filter) => {
        return this.displayedColumns.some((ele) => {
          return (
            ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1
          );
        });
      };
    });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }


  clearView = (event: any) => {
    this.viewContainer.clear();
    //this.ngIf = false;
  };

  
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}
