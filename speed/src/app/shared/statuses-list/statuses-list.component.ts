import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-statuses-list',
  templateUrl: './statuses-list.component.html',
  styleUrls: ['./statuses-list.component.css']
})
export class StatusesListComponent implements OnInit {
  @Input() public statuses: any[];
  constructor() { }

  ngOnInit() {
  }

}
