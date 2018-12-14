
import { LoadAgencies } from './../reducers/agency/agency.actions';
import { Criterio } from './../store/models/criterio';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../store/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { LoadStatuses } from '../reducers/status/status.actions';
import { LoadTypes } from '../reducers/type/type.actions';
import { LoadLaunches } from '../reducers/launch/launch.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiService, private store: Store<State>) {}

  ngOnInit() {

    this.loadData();

  }

  private loadData() {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadStatuses());
  }

}

