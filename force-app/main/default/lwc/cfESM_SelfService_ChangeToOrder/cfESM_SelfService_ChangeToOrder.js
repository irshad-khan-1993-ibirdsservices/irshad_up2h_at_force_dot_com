import { LightningElement, api } from "lwc";
export default class cfESM_SelfService_ChangeToOrder extends LightningElement {
    @api recordId;
	@api objectApiName;
	@api theme;
	@api orgNsPrefix;
	@api sessionVars;
	@api searchParam;
	@api obj;
	@api isRecursive;
	@api debug;
	@api isChildCardTrackingEnabled;
	@api trackingObj;
	@api testParams;
	@api size;
	@api records;
	@api cardNode;
	@api parentData;
	@api parentUniquekey;
	@api isInsideParent;
	@api parentRecord;
	@api parentRecords;
	@api parentAttribute;
	@api parentMergefields;
	@api listenOsDataChange;
	@api omniJsonData;
    @api get cfConfigurePageApi() {
    return this.runtimeWrapper?.getExposedAttribute("cfConfigurePageApi");
  }
  set cfConfigurePageApi(val) {
    this.runtimeWrapper?.updateExposedAttributes("cfConfigurePageApi", val);
  };

@api get cfSummaryPageApi() {
    return this.runtimeWrapper?.getExposedAttribute("cfSummaryPageApi");
  }
  set cfSummaryPageApi(val) {
    this.runtimeWrapper?.updateExposedAttributes("cfSummaryPageApi", val);
  };

@api get cfPreviousPageApi() {
    return this.runtimeWrapper?.getExposedAttribute("cfPreviousPageApi");
  }
  set cfPreviousPageApi(val) {
    this.runtimeWrapper?.updateExposedAttributes("cfPreviousPageApi", val);
  };
    
    
    get runtimeWrapper() {
      return this.template.querySelector('vlocity_cmt-flex-card-standard-runtime-wrapper');
    }
}