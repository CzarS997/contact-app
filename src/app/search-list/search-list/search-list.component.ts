import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SearchListService } from '../search-list.service';
import { Contact } from 'src/app/shared/contact.model';
import { Router } from '@angular/router';
import { Subscription, SubscriptionLike } from 'rxjs';
import { NotifyTypes } from 'src/app/shared/notifyTypes';



@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit, OnDestroy {

  filtStatus = ''; 
  //@Input() index: number;

  constructor(private searchServ: SearchListService, private router: Router) { }
  contacts: Contact[];
  showNotify: NotifyTypes;
  notifySub: Subscription;
  deletedSub: Subscription;


  ngOnInit() {
   
    this.contacts = this.searchServ.getContacts();

    this.notifySub = this.searchServ.displayNotify
    .subscribe(
      (value: NotifyTypes) => {
          this.showNotify = value;
      }
    )

    this.deletedSub = this.searchServ.contactChanged
    .subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    )

    // this.contacts.sort();
    // this.contacts.reverse();
  }

  onAddNew(){
    console.log('Not implemented yet');
    this.searchServ.startedEditing.next(-1);
    this.router.navigate(['/new']);
  }

  onCloseNotify(){
    this.showNotify = null;
    this.searchServ.displayNotify.next(null);
  }

  ngOnDestroy(){
    this.showNotify = null;
    this.searchServ.displayNotify.next(null);
    this.notifySub.unsubscribe();
    this.deletedSub.unsubscribe();
  }

}
