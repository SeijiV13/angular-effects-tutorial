import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameChangerComponent } from './name-changer/name-changer.component';
import { ParentComponent } from './parent/parent.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ComponentClickComponent } from './component-click/component-click.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component'

@NgModule({
  declarations: [
    AppComponent,
    NameChangerComponent,
    ParentComponent,
    ComponentClickComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
