import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList : SalesPerson[] = [
    new SalesPerson("Nikhil", "Chittem", "chittem.nikhil@yahoo.com", 10000),
    new SalesPerson("Thej", "Challa", "challa.thej@yahoo.com", 20000),
    new SalesPerson("Gayu", "Chittem", "chittem.gayu@yahoo.com", 50000),
    new SalesPerson("vaish", "Chittem", "chittem.vais@yahoo.com", 70000),

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
