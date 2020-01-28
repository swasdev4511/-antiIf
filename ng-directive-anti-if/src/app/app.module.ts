import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CustomStructuralDirective } from '../shared/custom-structural-directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CustomStructuralDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
