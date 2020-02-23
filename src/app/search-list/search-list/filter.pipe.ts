import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from 'src/app/shared/contact.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(contacts: Contact[], searchName: string): any {
    //If search field is empty
    if(!contacts || !searchName){
      return contacts;
    }

    //if searchName cannot be found in contacts === -1
    //otherwise, we have got some results
    return contacts.filter(con => con.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1);

  }

}
