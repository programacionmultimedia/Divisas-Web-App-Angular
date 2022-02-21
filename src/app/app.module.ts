import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ServicioDivisaService } from './services/servicio-divisa.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './components/footer/footer.component';
import { TablaComponent } from './components/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,useFactory:(http:HttpClient)=>{
          return new TranslateHttpLoader(http);
        },
        deps:[HttpClient]
      }
    })

  ],
  providers: [ServicioDivisaService],
  bootstrap: [AppComponent]
})
export class AppModule { }


