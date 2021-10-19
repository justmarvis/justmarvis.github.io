import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ShopItemComponent } from './shop-item/shop-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
