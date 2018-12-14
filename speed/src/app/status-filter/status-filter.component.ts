import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {
  public filteredLaunches$: Observable<any>;
  public id;
  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.filteredLaunches$ = this.getLaunchFilteredByState(this.id);
  }

  getLaunchFilteredByState = (statusId): Observable<any[]> =>
  this.store.select('launch')
    .pipe(
      map(
        launchesState =>
        launchesState.launches.filter(
        l => l.status === statusId)))

  orderByDateAsc() {
    this.filteredLaunches$ = this.store.select('launch')
    .pipe(
      map(
        launchesState =>
        launchesState.launches.filter(l => l.status === this.id)
        .sort((a, b) => (a.isostart > b.isostart ? 1 : -1))));
  }

  orderByDateDesc() {
    this.filteredLaunches$ = this.store.select('launch')
    .pipe(
      map(
        launchesState =>
        launchesState.launches
        .filter(l => l.status === this.id)
        .sort((a, b) => (a.isostart < b.isostart ? 1 : -1))));

  }

}
