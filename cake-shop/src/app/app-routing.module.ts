import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { MakeorderComponent } from './makeorder/makeorder.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { HomeComponent } from './home/home.component';
import { EditorderComponent } from './vieworder/editorder/editorder.component';


const routes: Routes = [
  { path: 'admin/users', component: UsersComponent,canActivate:[AuthGuardService] },
  { path: 'admin/products', component: ProductsComponent,canActivate:[AuthGuardService]  },
  { path: 'admin/orders', component: OrdersComponent,canActivate:[AuthGuardService]  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGuardService]  },
  { path: 'makeorder', component: MakeorderComponent,canActivate:[AuthGuardService]},
  { path: 'register', component: RegisterComponent },
  { path: 'viewproduct', component: ViewProductsComponent },
  { path: 'vieworder', component: VieworderComponent,canActivate:[AuthGuardService] },
  { path: 'editorder', component: EditorderComponent,canActivate:[AuthGuardService] },
  { path: 'home', component: HomeComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
