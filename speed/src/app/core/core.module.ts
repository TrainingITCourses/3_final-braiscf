
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { CoreRoutingModule } from './core-routing.module';
import { ContainerComponent } from './container/container.component';
import { metaReducers, reducers } from './store';
import { LaunchEffects } from './store/launch/launch.effects';
import { StatusEffects } from './store/status/status.effects';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot([LaunchEffects, StatusEffects])
  ],
  declarations: [ContainerComponent],
  exports: [ContainerComponent]
})
export class CoreModule {}
