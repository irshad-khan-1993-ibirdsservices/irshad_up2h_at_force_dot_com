
import { LightningElement, api } from 'lwc';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin';
export default class CustomNextButtonWithSelectablePersonAccount extends OmniscriptBaseMixin(LightningElement) {
    @api isPrAccWithPhone;
    connectedCallback(){
        console.log('CustomNextButtonWithSelectablePersonAccount: connectedCallback called');
        this.isPrAccWithPhone = true;
    }
    handlePreviousStep(){
        console.log('$CustomNextButtonWithSelectablePersonAccount: handlePreviousStep called');
    }
    handleNextStep(){
        console.log('$CustomNextButtonWithSelectablePersonAccount: handleNextStep called'); 
        this.omniNextStep();       
    }
}