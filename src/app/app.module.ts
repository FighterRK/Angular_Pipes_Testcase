import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPipePipe } from './new-pipe.pipe';
import { EmpPipe } from './emp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewPipePipe,
    EmpPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
