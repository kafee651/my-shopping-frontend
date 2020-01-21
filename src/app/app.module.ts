import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KoolAppHeaderComponent } from './kool-app-header/kool-app-header.component';
import { KoolAppFooterComponent } from './kool-app-footer/kool-app-footer.component';
import { KoolAppBodyComponent } from './kool-app-body/kool-app-body.component';
import { KoolAppBodyProductlistComponent } from './kool-app-body-productlist/kool-app-body-productlist.component';
import { KoolAppBodyProductComponent } from './kool-app-body-product/kool-app-body-product.component';
import { KoolAppBodyVoiceSearchComponent } from './kool-app-body-voice-search/kool-app-body-voice-search.component';
import { KoolAppBodyTextSearchComponent } from './kool-app-body-text-search/kool-app-body-text-search.component';
import { KoolAppBodyImageSearchComponent } from './kool-app-body-image-search/kool-app-body-image-search.component';
import { KoolAppBodyProductGroupComponent } from './kool-app-body-product-group/kool-app-body-product-group.component';

@NgModule({
  declarations: [
    AppComponent,
    KoolAppHeaderComponent,
    KoolAppFooterComponent,
    KoolAppBodyComponent,
    KoolAppBodyProductlistComponent,
    KoolAppBodyProductComponent,
    KoolAppBodyVoiceSearchComponent,
    KoolAppBodyTextSearchComponent,
    KoolAppBodyImageSearchComponent,
    KoolAppBodyProductGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
