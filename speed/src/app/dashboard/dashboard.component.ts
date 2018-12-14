import { Observable } from 'rxjs';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { LoadStatuses } from '../reducers/status/status.actions';
import { map } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public statuses$: Observable<any>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.statuses$ = this.store
    .select('status').pipe(
      map(
        statusesState =>
        statusesState.statuses));
  }

}
