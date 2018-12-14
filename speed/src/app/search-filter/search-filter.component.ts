import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  @Output() public orderAsc = new EventEmitter<String>();
  @Output() public orderDesc = new EventEmitter<String>();


  constructor() {}

  ngOnInit() {
  }


}
