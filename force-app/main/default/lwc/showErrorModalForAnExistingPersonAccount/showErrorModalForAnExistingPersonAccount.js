import { LightningElement, api, track } from 'lwc';
// import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin';
import hasDuplicatePersonAccount from '@salesforce/apex/DuplicatePersonAccountChecker.hasDuplicatePersonAccount';
export default class ShowErrorModalForAnExistingPersonAccount extends OmniscriptBaseMixin(LightningElement) {
    @api newRecordBlock;
    @api existingRecordBlock;
    @api isPersonAccountFoundByPhone;
    @api selectAnOption;
    @api step1;
    @track shouldModalOpened;
    @track isDuplicateAccount = true;

    connectedCallback(){
        // console.log('omniJsonData-1: ', JSON.stringify(this.omniJsonData, null, 2));
        console.log('ShowErrorModalForAnExistingPersonAccount: connectedCallback called');
        this.shouldModalOpened = null;
    }
    
    closeModal() {
        this.shouldModalOpened = null;
        this.dispatchEvent(new CustomEvent('close'));
    }
    handlePreviousStep(){
        console.log('$handlePreviousStep called'); 
        let dataJsonOfOmni = this.omniJsonData;
        // console.log('dataJsonOfOmni : ', JSON.stringify(dataJsonOfOmni, null, 2));
        let data = {};
        // if(dataJsonOfOmni.SelectAnOption.AddRecord == 'New' || (dataJsonOfOmni.isPersonAccountFoundByPhone != true && dataJsonOfOmni.SelectAnOption.AddRecord == 'Existing') )  {
        //     //(SelectAnOption:AddRecord = New OR (isPersonAccountFoundByPhone <> true AND SelectAnOption:AddRecord = Existing))
        //     data = {
        //         "Step1": {
        //             "NewRecordBlock": {
        //                 "FirstName": null,
        //                 "LastName": null,
        //                 "Phone": null
        //             },
        //             "ExistingRecordBlock": null
        //         }
        //     }; 
        // }   
        // else if (dataJsonOfOmni.SelectAnOption.AddRecord == 'Existing' && dataJsonOfOmni.isPersonAccountFoundByPhone != false){
        //     //(SelectAnOption:AddRecord = Existing AND isPersonAccountFoundByPhone <> false)
        //     data = {
        //         "Step1": {
        //             "NewRecordBlock": null,
        //             "ExistingRecordBlock": {
        //                 "ExistingPhone": null,
        //                 "ExistingFirstName": null,
        //                 "ExistingLastName": null
        //             }
        //         }
        //     };
        // }
        this.omniApplyCallResp(data);
        this.omniPrevStep();
    }
    async handleNextStep(){
        console.log('$handleNextStep called');
        
        if(this.selectAnOption.AddRecord == 'New' || (this.selectAnOption.AddRecord =='Existing' && this.isPersonAccountFoundByPhone == false)){
            console.log('IF');
            let accToCheck = this.newRecordBlock;
            if(accToCheck.FirstName && accToCheck.LastName && accToCheck.Phone){
                try{
                    this.isDuplicateAccount = await hasDuplicatePersonAccount({'acc' : accToCheck});
                    console.log('isDuplicateAccount : ', this.isDuplicateAccount);
                    if(this.isDuplicateAccount){
                        this.shouldModalOpened = true;
                        console.log('IF isDuplicateAccount');
                    }else if(!this.isDuplicateAccount) {   
                        this.shouldModalOpened = false;                 
                        this.omniNextStep();
                        console.log('IF not isDuplicateAccount');
                    }
                }catch(error){
                    console.error('error when check duplicate : ', error);
                }
            }else {console.log('FirstName or LastName or Phone is Empty Please fill');}
        } else if(this.isPersonAccountFoundByPhone == true) {
            console.log('ELSE'); 
            this.omniNextStep();            
        } 
        let dataToSend = {
            "isDuplicateAccount": this.isDuplicateAccount
        };
        this.omniApplyCallResp(dataToSend); 
    }
}