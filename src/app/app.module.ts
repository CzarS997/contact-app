import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './shared/about/about.component';
import { SearchListComponent } from './search-list/search-list/search-list.component';
import { SearchListService } from './search-list/search-list.service';
import { FilterPipe } from './search-list/search-list/filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { SearchItemComponent } from './search-list/search-list/search-item/search-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SearchListComponent,
    FilterPipe,
    ContactEditComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SearchListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
