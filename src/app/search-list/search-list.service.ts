import {Contact} from '../shared/contact.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import {NotifyTypes} from '../shared/notifyTypes';

@Injectable({providedIn: 'root'})
export class SearchListService{


contactChanged = new Subject<Contact[]>();
startedEditing = new BehaviorSubject<any>(null);

displayNotify = new BehaviorSubject<NotifyTypes>(null);

private contacts: Contact[] = [
    new Contact('Simon', 295423512),
    new Contact('Simona', 664631240),
    new Contact('Dejw', 798235612),
    new Contact('Daniel', 506213643),
    new Contact('Czarko', 666343194)
];


getContacts(){

    return this.contacts.sort().reverse().slice();
}

reverseArr(){
    this.contacts = this.contacts.reverse();
}

getContact(index: number){
    return this.contacts[index];
}

//comparison function
sortArr(arr: Contact[]): Contact[]{

    arr.sort((a,b) => {
        if(a.name > b.name){
            return -1;
        }
        if(a.name < b.name){
            return 1;
        }
        return 0;
    });
    return arr;
}

addContact(contact: Contact){
    
    let numb = parseInt(contact.digits.toString());
    let x1 = new Contact(contact.name, numb);
    let temp1: Contact[] = [];
    temp1 = this.contacts;
    x1.logsInfo = undefined;
    temp1.push(x1);

    temp1 = this.sortArr(temp1);
    this.contacts = temp1;

    this.contactChanged.next(this.contacts.slice());
}

updateContact(index: number, newContact: Contact){
    

    this.contacts.reverse()[index] = newContact;
    this.contacts = this.sortArr(this.contacts);
    this.contactChanged.next(this.contacts.slice());
}

deleteContact(index: number){
    this.contacts.splice(index, 1);
    this.contactChanged.next(this.contacts.slice());
}

sendInfo(index: number){
    this.startedEditing.next(index);
}


}