import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/shared/contact.model';
import { Router } from '@angular/router';
import { SearchListService } from '../../search-list.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() index: number;
  @Input() contact: Contact;
  dummy: object;

  constructor(private router: Router, private searchServ: SearchListService) { }

  ngOnInit() {
  }

  onEditAccount(){
   
    this.searchServ.sendInfo(this.index);
    this.searchServ.reverseArr();
    
  }

  onDeleteContact(){
  
    this.searchServ.deleteContact(this.index);
  }

}
