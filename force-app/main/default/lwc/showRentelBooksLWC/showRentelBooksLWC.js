import { LightningElement, api, track } from 'lwc';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin';

export default class ShowRentelBooksLWC extends OmniscriptBaseMixin(LightningElement) {
    @track products;
    @track currentSelectedBook;
    @api priviousState;
    connectedCallback(){
        console.log('ShowRentelBooksLWC: connectedCallback called');
        this.products = JSON.parse(this.omniJsonDataStr).products;
        // if(this.priviousState != null){// isko uncomment karke renderedCallback ko hata do
        //     setTimeout(() => {
        //         let previousCheckbox = this.template.querySelector(`lightning-input[data-checkboxid="${this.priviousState}"]`);
        //         previousCheckbox.checked = true;
        //     }, 100);
        // }
        
    }
    renderedCallback(){        
        console.log('ShowRentelBooksLWC: renderedCallback called');
        if(this.priviousState != null){
            let previousCheckbox = this.template.querySelector(`lightning-input[data-checkboxid="${this.priviousState}"]`);
            previousCheckbox.checked = true;
        }
    }
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