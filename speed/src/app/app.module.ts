import { Launch } from './store/models/launch';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { CounterComponent } from './counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StatusEffects } from './reducers/status/status.effects';
import { AgencyEffects } from './reducers/agency/agency.effects';
import { TypeEffects } from './reducers/type/type.effects';
import { LaunchEffects } from './reducers/launch/launch.effects';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusesListComponent } from './statuses-list/statuses-list.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { LaunchCardComponent } from './launch-card/launch-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchFilterComponent,
    LaunchesListComponent,
    CounterComponent,
    DashboardComponent,
    StatusesListComponent,
    StatusFilterComponent,
    LaunchDetailComponent,
    LaunchCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([StatusEffects, AgencyEffects, TypeEffects, LaunchEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
