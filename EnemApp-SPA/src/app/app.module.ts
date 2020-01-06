import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRouteModule } from './app-route/app-route.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CandidatoListComponent } from './candidato-list/candidato-list.component';
import { CandidatoService } from './_services/candidato.service';
import { CandidatoGetComponent } from './candidato-get/candidato-get.component';
import { CandidatoCreateComponent } from './candidato-create/candidato-create.component';
import { CandidatoUpdateComponent } from './candidato-update/candidato-update.component';
import { CandidatoAprovadosComponent } from './candidato-aprovados/candidato-aprovados.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      CandidatoListComponent,
      CandidatoGetComponent,
      CandidatoCreateComponent,
      CandidatoUpdateComponent,
      CandidatoAprovadosComponent,
      TopBarComponent,
      HomeComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      AppRouteModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      CandidatoService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
