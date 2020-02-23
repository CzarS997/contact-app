import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../shared/about/data-storage.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  openAbout: boolean;
 

  constructor(private dataStorage: DataStorageService, private router: Router) { }

  ngOnInit() {
    this.openAbout = false;
  }

  seeAbout(){
    this.dataStorage.aboutOpen = !this.dataStorage.aboutOpen;
    this.openAbout = this.dataStorage.aboutOpen;
  }

  onAccounts(){
    this.router.navigate(['/']);
  }

}
