import { ButtonsComponent } from './shared/buttons/buttons.component';
import { RastreioEntregueComponent } from './shared/rastreio-entregue/rastreio-entregue.component';
import { RastreioSeparadoComponent } from './shared/rastreio-separado/rastreio-separado.component';
import { RastreioAprovadoComponent } from './shared/rastreio-aprovado/rastreio-aprovado.component';
import { RastreioTransporteComponent } from './shared/rastreio-transporte/rastreio-transporte.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './shared/pedidos/pedidos.component';
import { RastreioComponent } from './shared/rastreio/rastreio.component';
import { TimeLineComponent } from './shared/time-line/time-line.component';
import { LoginComponent } from './shared/views/login/login.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AnimationComponent } from './shared/animation/animation.component';





@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    RastreioComponent,
    TimeLineComponent,
    LoginComponent,
    RastreioTransporteComponent,
    RastreioAprovadoComponent,
    RastreioSeparadoComponent,
    RastreioEntregueComponent,
    ButtonsComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    TimelineModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
