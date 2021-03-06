import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { ProductsComponent } from './admin/products/products.component';
import { AddproductComponent } from './admin/products/addproduct/addproduct.component';
import { ViewProductComponent } from './admin/products/view-product/view-product.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthInterceptorService } from './service/basic-auth-interceptor.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { MakeorderComponent } from './makeorder/makeorder.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { UpdatestatusComponent } from './admin/orders/updatestatus/updatestatus.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { EditorderComponent } from './vieworder/editorder/editorder.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    ProductsComponent,
    AddproductComponent,
    ViewProductComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    HomeComponent,
    ViewProductsComponent,
    MakeorderComponent,
    OrdersComponent,
    UpdatestatusComponent,
    VieworderComponent,
    EditorderComponent,
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [ {  
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthInterceptorService, multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
