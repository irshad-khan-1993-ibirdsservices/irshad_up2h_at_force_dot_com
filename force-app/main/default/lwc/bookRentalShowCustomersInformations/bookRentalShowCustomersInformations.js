import { LightningElement, api, track } from 'lwc';

export default class BookRentalShowCustomersInformations extends LightningElement {
    
    @api cusMailingStreet;
    @api cusMailingState;
    @api cusMailingCountry;
    @api cusMailingCity;
    @api cusMailingPostalCode;
    @api cusFirstName;
    @api cusLastName;
    @api EnterPhoneNumber;
    @api BookingDate;
    @api SelectABook;
    @api EnterFirstNameAndLastName;
    @api isCustomerAlreadyExists;
    get isCustomerAlreadyExists2() {return this.isCustomerAlreadyExists;}
    // @track MailingStreet;
    // @track MailingPostalCode;
    // @track MailingCity;
    // @track MailingState;
    // @track MailingCountry;
    // @track searchAddressEntries;

    get MailingStreet() {return this.EnterFirstNameAndLastName["SearchAddress-Block"].MailingStreet;}
    get MailingPostalCode() {return this.EnterFirstNameAndLastName["SearchAddress-Block"].MailingPostalCode;}
    get MailingCity() {return this.EnterFirstNameAndLastName["SearchAddress-Block"].MailingCity;}
    get MailingState() {return this.EnterFirstNameAndLastName["SearchAddress-Block"].MailingState;}
    get MailingCountry() {return this.EnterFirstNameAndLastName["SearchAddress-Block"].MailingCountry;}
    connectedCallback(){
        console.log('connectedCallback called---');        
    }
    
}