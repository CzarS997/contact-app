import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../shared/contact.model';
import { Subscription } from 'rxjs';
import { SearchListService } from '../search-list/search-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifyTypes } from '../shared/notifyTypes';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit, OnDestroy {

  editedContact: Contact;
  editedContactIndex: number;
  subcription: Subscription;
  editMode: boolean = false;
  contactForm: FormGroup;


  constructor(private searchServ: SearchListService, 
    private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.subcription = this.searchServ.startedEditing
    .subscribe(
  
      (index: number) => {
        console.log('Subscribed');
        this.editedContactIndex = index;
        if(index !== -1) {
          this.editMode = true;
          let temp = this.searchServ.getContacts().length;
          this.editedContact = this.searchServ.getContact(temp-index-1);
        }
        
       
      }
    );

    this.initForm();
  }

  private initForm(){
    let name='';
    let numbers='';

    if(this.editedContactIndex !== -1){
    name = this.editedContact.name;
    numbers = this.editedContact.digits.toString();
    }
    
    this.contactForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'digits': new FormControl(numbers, [Validators.required, 
      Validators.pattern(/^[0-9]{9}$/)])
    })

  }

  onSubmit(){
    console.log(`The current index is: ${this.editedContactIndex}`);

    let temp = this.searchServ.getContacts();
    if(this.editMode){

    this.searchServ.updateContact(temp.length-this.editedContactIndex-1, this.contactForm.value);
    console.log(temp.length-this.editedContactIndex-1);
    this.router.navigate(['../../'], {relativeTo: this.route});
    this.searchServ.displayNotify.next(NotifyTypes.Edited);

    }else{

      this.searchServ.addContact(this.contactForm.value);
      this.searchServ.displayNotify.next(NotifyTypes.Added);
      this.router.navigate(['../'], {relativeTo: this.route});
    }

  }

  onEditApproved(){
    console.log(`Status:`);
    
    this.searchServ.updateContact(this.searchServ.getContacts().length-this.editedContactIndex, this.contactForm.value);
    this.searchServ.displayNotify.next(NotifyTypes.Edited);

  }

  onDiscard(){
   // let temp = this.editMode? '../../' : '../';
   console.log("On discard activated");
   this.searchServ.displayNotify.next(NotifyTypes.Discard);
   
   this.searchServ.reverseArr();
   if(this.editMode){
    this.router.navigate(['../../'], {relativeTo: this.route});
    
   }else {
     this.router.navigate(['../'], {relativeTo: this.route});
   }
    console.log('Nothing changed');
   
   
  

  }

  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

}
