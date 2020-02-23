import { Component, OnInit } from '@angular/core';

import {DataStorageService} from './data-storage.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

subhead: string;
message:string;
isOpen: boolean;

    constructor(private dataStorage: DataStorageService){};

ngOnInit(){
    this.subhead = "About App";
    this.message = "Contact application written by Cezary Wrzesiński. " + 
    "On MIT License. Feel free to reproduct this code."; 
}

onClose(){
    this.dataStorage.aboutOpen = !this.dataStorage.aboutOpen;
}




}