import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFormModule } from './client/client.module';
import { OrderFormModule } from './order/order.module';
import { SharedModule } from './shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClientFormModule,
    SharedModule,
    OrderFormModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
