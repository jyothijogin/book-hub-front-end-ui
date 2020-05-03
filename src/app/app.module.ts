import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BooksService} from './services/books.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AddComponent } from './components/add/add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    DetailComponent,
    AddComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path: 'detail/:id', component: DetailComponent}
    ])
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
