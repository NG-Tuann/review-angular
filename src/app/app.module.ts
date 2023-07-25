import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BookComponent } from './components/book/book.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookItemComponent } from './components/book/book-list/book-item/book-item.component';
import { BookStartComponent } from './components/book-start/book-start.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookEditComponent } from './components/book/book-edit/book-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 

const appRoutes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: BookComponent, children: [
    {path: '', component: BookStartComponent},
    {path: 'new', component: BookEditComponent}, 
    {path: ':id', component: BookDetailComponent}, 
    {path: ':id/edit', component: BookEditComponent}
  ]},
  { path: 'publishers', component: PublisherComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    BookEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
