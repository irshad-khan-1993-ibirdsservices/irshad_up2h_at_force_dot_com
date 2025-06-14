import { LightningElement } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';

export default class TestLwcComponentOverride extends OmniscriptBaseMixin(LightningElement) {
    connectedCallback(){
        console.log('TestLwcComponentOverride : connectedCallback called');
    }
}