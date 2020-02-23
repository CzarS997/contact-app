import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchListComponent } from './search-list/search-list/search-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';


const routes: Routes = [
  {path: '', component: SearchListComponent},
  //{path: ':id', component: ContactDetailComponent, ...},
  {path: 'edit/:index', component: ContactEditComponent},
  {path: 'new', component: ContactEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{


 }
