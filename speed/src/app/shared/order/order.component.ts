import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Output() public orderAsc = new EventEmitter<any>();
  @Output() public orderDesc = new EventEmitter<any>();


  constructor() {}

  ngOnInit() {
  }

}
