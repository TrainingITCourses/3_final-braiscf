import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../core/store';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.css']
})
export class LaunchDetailComponent implements OnInit {
  public launch;
  constructor(private route: ActivatedRoute,
      private store: Store<State>) { }

  ngOnInit() {
    this.store.select('launch').subscribe(launchesState => {
      const id = this.route.snapshot.params['id'];
      this.launch = launchesState.launches.filter(
        l => l.id.toString() === id
      )[0];
    });
  }

}
