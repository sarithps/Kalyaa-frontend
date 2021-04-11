import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth.guard';
import { BuyComponent } from './buy/buy.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductsComponent } from './products/products.component';
import { SampleProductsComponent } from './sample-products/sample-products.component';
import { SignupComponent } from './signup/signup.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'sampleProducts', component:SampleProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'contact', component:ContactComponent},
  {path:'product/:id', component:SingleProductComponent},
  {path:'addproduct', canActivate:[AuthGuard], component: AddProductComponent},
  {path:'update/:id', component: ProductUpdateComponent},
  {path:'buy/:id/:qty', component: BuyComponent},
  {path:'confirmation/:id', component: ConfirmationComponent},
  {path:'orders', canActivate:[AuthGuard],component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
