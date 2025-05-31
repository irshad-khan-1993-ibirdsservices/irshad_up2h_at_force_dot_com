import { LightningElement, track, wire } from 'lwc';
import getDocContent from '@salesforce/apex/LandingPageContentClass.getDocContent'
import { CurrentPageReference } from 'lightning/navigation';

export default class LeftContainer extends LightningElement {
    @track appData={};
    @track dataLoaded=false;


    @wire(CurrentPageReference) 
    getStateParameters(currentPageReference) {
        console.log("inside getStateParameters for doc container");
        if (currentPageReference) {
           this.appNameValue = currentPageReference.state?.c__appName;
           if(this.appNameValue===undefined){
           console.log('inside getStateParameters in doc container class === ' + this.appNameValue);
           getDocContent({appName : ''}).then(data => {
            if(data===null|| data===undefined){
                this.dataLoaded = false;
            }
            else if(data){
                this.appData = data;
                this.dataLoaded = true;
            }
        }).catch(error => {
            //console.log(error);
			this.dataLoaded = false;

		})
    }

     else{
        console.log('inside else getStateParameters in doc container class === ' + this.appNameValue);
        getDocContent({appName : this.appNameValue}).then(data => {
            if(data===null|| data===undefined){
                this.dataLoaded = false;
            }
            else if(data){
                this.appData = data;
                this.dataLoaded = true;
            }
        }).catch(error => {
            //console.log(error);
			this.dataLoaded = false;

		})
    }
}
}
}