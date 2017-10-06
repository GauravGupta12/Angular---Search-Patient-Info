export class Patient{
	firstName:string;
	lastName:string;
	emailAddress:string;
	doctorLastName:string;
	
	
	constructor(firstName: string,lastName: string,emailAddress: string,doctorLastName: string){
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailAddress = emailAddress;
		this.doctorLastName = doctorLastName;
	}
}