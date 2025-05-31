import { LightningElement, api, track } from 'lwc';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin';

export default class ShowRentelBooksLWC extends OmniscriptBaseMixin(LightningElement) {
    @track products;
    @track currentSelectedBook;
    @api priviousState;
    connectedCallback(){
        console.log('connectedCallback called');
        this.products = JSON.parse(this.omniJsonDataStr).products;
        console.log('priviousState : ', JSON.stringify(this.priviousState,null,2));
        console.log('1')
        if(this.priviousState != null){
            setTimeout(() => {
                // if(this.priviousState != null){
                    let previousCheckbox = this.template.querySelector(`lightning-input[data-checkboxid="${this.priviousState}"]`);
                    previousCheckbox.checked = true;
                    // this.setCheckbox();
                    console.log('2 : ', previousCheckbox)
                // }
            }, 100);
        }
        
    }
    // setCheckbox(){
    //     if(this.priviousState != null){
    //         let previousCheckbox = this.template.querySelector(`lightning-input[data-checkboxid="b76ab756-6e49-42df-97bc-18cc0847d199"]`);
    //         //previousCheckbox.checked = true;
    //         console.log('2 : ', previousCheckbox)
    //     }
    // }
    handleCheckbox(e) {
        console.log('handleCheckbox called');
        let isChecked = e.target.checked;
        let currentCheckboxid = e.target.dataset.checkboxid;
        if(isChecked){
            let allCheckbox = this.template.querySelectorAll('lightning-input[data-checkboxid]');
            allCheckbox.forEach(ele => {
                ele.checked = false;
            });
            allCheckbox.forEach(ele => {
                if(ele.getAttribute('data-checkboxid') == currentCheckboxid){
                    ele.checked = true;
                }
            });            
        }
        this.currentSelectedBook = this.products.find(product =>(product.id == currentCheckboxid));
        this.sendDataToOmniScript();
    }
    // sendDataToOmniScript() {
    //     // Create a custom event to update the OmniScript's JSON data
    //     const response = {
    //         // Use the same parameter name as defined in your OmniScript's Data JSON
    //         selectedBook: this.currentSelectedBook
    //     };
        
    //     // Dispatch the omniaggregate event
    //     this.omniApplyCallResp(response);
        
    //     // Alternative: You can also use omniSaveState if you want to persist the data
    //     // this.omniSaveState({ selectedBook: this.currentSelectedBook });
    // }


    sendDataToOmniScript() {
        const currentBook = {
            SelectABook: {
                CustomLWC3: {
                    SelectedBook: this.currentSelectedBook
                }
            }
        };
        this.omniApplyCallResp(currentBook);
    }
}