
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { LoadStatuses } from '../store/status/status.actions';
import { LoadLaunches } from '../store/launch/launch.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public isHandset$: Observable<boolean>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {

    this.loadData();

  }

  private loadData() {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadStatuses());
  }

}

