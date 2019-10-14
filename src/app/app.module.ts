import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeiComponentsModule } from 'projects/fei-components/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './pages/todo/todo.component';
import { PresentationModule } from './components/presentation/presentation.module';
import { ContainerModule } from './components/container/container.module';
import { BehaviorModule } from './components/behavior/behavior.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FeiComponentsModule,
    AppRoutingModule,
    PresentationModule,
    ContainerModule,
    BehaviorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
