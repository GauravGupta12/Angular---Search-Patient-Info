import { Component,Input, OnInit, HostBinding} from '@angular/core';
import {Patient} from './patient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostBinding('attr.class') cssClass = 'row';
  title = 'app works!';
  searchText: string;
  showSearchingFor: string;
  searchResult: Patient[];
  patientsInfo : Patient[] = [
                       new Patient('julian', 'assange',  'jassange@gmail.com',  'astle' ),
					   new Patient('mike', 'waugh',  'mwaugh@gmail.com', 'astle' ),
                       new Patient('jeff', 'hardy',  'jhardy@yahoo.com', 'johnson' ),
                       new Patient('emma', 'watson', 'ewatson@apple.com','parker' ),
                       new Patient('mary', 'lane','mlane@gmail.com', 'johnson' ),
                       new Patient('james', 'bond',  'jbond@apple.com', 'cairns' ),
                       new Patient('sara', 'wood', 'swood@hotmail.com', 'astle' ),
                       new Patient('chris', 'hikes', 'chikes@yahoo.com','parker' ),
                       new Patient('jenny', 'lopez', 'jlopez@hotmail.com','jerry' ),
                       new Patient('kathy', 'hopes', 'khopes@gmail.com', 'cairns' )
					];
					   
  search() {
	  let searchExpression = this.searchText ? this.searchText.split(' ') : [];
	  
	  if(searchExpression.length === 2){
		  if (searchExpression[0].toLocaleLowerCase() === 'name') {
			this.searchResult = this.patientsInfo.filter(pt => pt.firstName[0].toLocaleLowerCase() === searchExpression[1][0].toLocaleLowerCase());
			} 
		  else if(searchExpression[0].toLocaleLowerCase() === 'doctor') {
			this.searchResult = this.patientsInfo.filter(pt => pt.doctorLastName.toLocaleLowerCase() === searchExpression[1].toLocaleLowerCase());
		  }
	      else{
		    this.searchResult = this.patientsInfo;
	      }
	  }
	  else{
		    this.searchResult = this.patientsInfo;
	  }
	}
  SearchTextChanged(){
	   this.showSearchingFor = this.searchText || "";
  }
  ngOnInit(){
	  this.searchResult = this.searchResult || this.patientsInfo;
  }
  
}
