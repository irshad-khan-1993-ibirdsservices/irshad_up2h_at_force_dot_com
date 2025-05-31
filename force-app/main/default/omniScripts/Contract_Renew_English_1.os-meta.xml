<?xml version="1.0" encoding="UTF-8"?>
<OmniScript xmlns="http://soap.sforce.com/2006/04/metadata">
    <elementTypeComponentMapping>{&quot;ElementTypeToHTMLTemplateList&quot;:[]}</elementTypeComponentMapping>
    <isActive>true</isActive>
    <isIntegrationProcedure>false</isIntegrationProcedure>
    <isMetadataCacheDisabled>false</isMetadataCacheDisabled>
    <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
    <isTestProcedure>false</isTestProcedure>
    <isWebCompEnabled>false</isWebCompEnabled>
    <language>English</language>
    <name>Contract Renew</name>
    <omniProcessElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>CreateNewContractAndLines</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Create new contract and line items&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;bundle&quot; : &quot;UpdateContractAndLine&quot;,
  &quot;remoteTimeout&quot; : 30000,
  &quot;postTransformBundle&quot; : &quot;&quot;,
  &quot;sendJSONPath&quot; : &quot;&quot;,
  &quot;sendJSONNode&quot; : &quot;&quot;,
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;Submit&quot;,
  &quot;redirectPageName&quot; : &quot;&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ]
}</propertySetConfig>
            <sequenceNumber>3.0</sequenceNumber>
            <type>DataRaptor Post Action</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>RenewByMonths</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Renew by another &lt;months&gt;&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;required&quot; : false,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;readOnly&quot; : false,
  &quot;help&quot; : false,
  &quot;helpText&quot; : &quot;&quot;,
  &quot;pattern&quot; : &quot;&quot;,
  &quot;ptrnErrText&quot; : &quot;&quot;,
  &quot;minLength&quot; : 0,
  &quot;maxLength&quot; : 255,
  &quot;mask&quot; : null,
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;accessibleInFutureSteps&quot; : false,
  &quot;debounceValue&quot; : 0
}</propertySetConfig>
            <sequenceNumber>0.0</sequenceNumber>
            <type>Number</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>RenewStateDate</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;RenewStateDate&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;expression&quot; : &quot;new Date(YEAR(%Contract:EndDate%),MONTH(%Contract:EndDate%) - 1,DAYOFMONTH(%Contract:EndDate%) + 3)&quot;,
  &quot;hide&quot; : true,
  &quot;mask&quot; : null,
  &quot;dataType&quot; : &quot;Date&quot;,
  &quot;hideGroupSep&quot; : false,
  &quot;currencySymbol&quot; : &quot;$&quot;,
  &quot;dateFormat&quot; : &quot;MM-dd-yyyy&quot;
}</propertySetConfig>
            <sequenceNumber>2.0</sequenceNumber>
            <type>Formula</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>RenewTerm</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;RenewTerm&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;expression&quot; : &quot;%RenewByMonths%&quot;,
  &quot;hide&quot; : true,
  &quot;mask&quot; : null,
  &quot;dataType&quot; : &quot;Number&quot;,
  &quot;hideGroupSep&quot; : false,
  &quot;currencySymbol&quot; : &quot;$&quot;,
  &quot;dateFormat&quot; : &quot;MM-dd-yyyy&quot;
}</propertySetConfig>
            <sequenceNumber>1.0</sequenceNumber>
            <type>Formula</type>
        </childElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>CreateNew</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;SelectOption&quot;,
        &quot;data&quot; : &quot;CreateNew&quot;
      } ]
    }
  },
  &quot;label&quot; : &quot;Create New Contract&quot;,
  &quot;validationRequired&quot; : true,
  &quot;previousLabel&quot; : &quot;Previous&quot;,
  &quot;previousWidth&quot; : 3,
  &quot;nextLabel&quot; : &quot;Done&quot;,
  &quot;nextWidth&quot; : 3,
  &quot;cancelLabel&quot; : &quot;Cancel&quot;,
  &quot;cancelMessage&quot; : &quot;Are you sure?&quot;,
  &quot;saveLabel&quot; : &quot;Save for later&quot;,
  &quot;saveMessage&quot; : &quot;Are you sure you want to save it for later?&quot;,
  &quot;completeLabel&quot; : &quot;Complete&quot;,
  &quot;completeMessage&quot; : &quot;Are you sure you want to complete the script?&quot;,
  &quot;instruction&quot; : &quot;&quot;,
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;remoteClass&quot; : &quot;&quot;,
  &quot;remoteMethod&quot; : &quot;&quot;,
  &quot;remoteTimeout&quot; : 30000,
  &quot;remoteOptions&quot; : { },
  &quot;knowledgeOptions&quot; : {
    &quot;language&quot; : &quot;English&quot;,
    &quot;publishStatus&quot; : &quot;Online&quot;,
    &quot;keyword&quot; : &quot;&quot;,
    &quot;dataCategoryCriteria&quot; : &quot;&quot;,
    &quot;remoteTimeout&quot; : 30000
  },
  &quot;conditionType&quot; : &quot;Hide if False&quot;
}</propertySetConfig>
        <sequenceNumber>3.0</sequenceNumber>
        <type>Step</type>
    </omniProcessElements>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>Done</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;&lt;&gt;&quot;,
        &quot;field&quot; : &quot;SelectOption&quot;,
        &quot;data&quot; : null
      } ]
    }
  },
  &quot;label&quot; : &quot;Done&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;type&quot; : &quot;SObject&quot;,
  &quot;source&quot; : &quot;%ContextId%&quot;,
  &quot;validationRequired&quot; : &quot;Submit&quot;,
  &quot;redirectPageName&quot; : &quot;mobileDone&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcMobileConfirmation.html&quot;
}</propertySetConfig>
        <sequenceNumber>4.0</sequenceNumber>
        <type>Done Action</type>
    </omniProcessElements>
    <omniProcessElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>ExtendByMonths</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Extend for another &lt;Months&gt;&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;required&quot; : false,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;readOnly&quot; : false,
  &quot;help&quot; : false,
  &quot;helpText&quot; : &quot;&quot;,
  &quot;pattern&quot; : &quot;&quot;,
  &quot;ptrnErrText&quot; : &quot;&quot;,
  &quot;minLength&quot; : 0,
  &quot;maxLength&quot; : 255,
  &quot;mask&quot; : null,
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;accessibleInFutureSteps&quot; : false,
  &quot;debounceValue&quot; : 0
}</propertySetConfig>
            <sequenceNumber>0.0</sequenceNumber>
            <type>Number</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>ExtendedTerm</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;ExtendedTerm&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;expression&quot; : &quot;%Contract:ContractTerm%+%ExtendByMonths%&quot;,
  &quot;hide&quot; : true,
  &quot;mask&quot; : null,
  &quot;dataType&quot; : &quot;Number&quot;,
  &quot;hideGroupSep&quot; : false,
  &quot;currencySymbol&quot; : &quot;$&quot;,
  &quot;dateFormat&quot; : &quot;MM-dd-yyyy&quot;
}</propertySetConfig>
            <sequenceNumber>1.0</sequenceNumber>
            <type>Formula</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>UpdateContract</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Update Contract&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;bundle&quot; : &quot;UpdateContract&quot;,
  &quot;remoteTimeout&quot; : 30000,
  &quot;postTransformBundle&quot; : &quot;&quot;,
  &quot;sendJSONPath&quot; : &quot;&quot;,
  &quot;sendJSONNode&quot; : &quot;&quot;,
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;Submit&quot;,
  &quot;redirectPageName&quot; : &quot;&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ]
}</propertySetConfig>
            <sequenceNumber>2.0</sequenceNumber>
            <type>DataRaptor Post Action</type>
        </childElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>Extend</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;SelectOption&quot;,
        &quot;data&quot; : &quot;Extend&quot;
      } ]
    }
  },
  &quot;label&quot; : &quot;Extend the same contract&quot;,
  &quot;validationRequired&quot; : true,
  &quot;previousLabel&quot; : &quot;Previous&quot;,
  &quot;previousWidth&quot; : 3,
  &quot;nextLabel&quot; : &quot;Done&quot;,
  &quot;nextWidth&quot; : 3,
  &quot;cancelLabel&quot; : &quot;Cancel&quot;,
  &quot;cancelMessage&quot; : &quot;Are you sure?&quot;,
  &quot;saveLabel&quot; : &quot;Save for later&quot;,
  &quot;saveMessage&quot; : &quot;Are you sure you want to save it for later?&quot;,
  &quot;completeLabel&quot; : &quot;Complete&quot;,
  &quot;completeMessage&quot; : &quot;Are you sure you want to complete the script?&quot;,
  &quot;instruction&quot; : &quot;&quot;,
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;remoteClass&quot; : &quot;&quot;,
  &quot;remoteMethod&quot; : &quot;&quot;,
  &quot;remoteTimeout&quot; : 30000,
  &quot;remoteOptions&quot; : { },
  &quot;knowledgeOptions&quot; : {
    &quot;language&quot; : &quot;English&quot;,
    &quot;publishStatus&quot; : &quot;Online&quot;,
    &quot;keyword&quot; : &quot;&quot;,
    &quot;dataCategoryCriteria&quot; : &quot;&quot;,
    &quot;remoteTimeout&quot; : 30000
  },
  &quot;conditionType&quot; : &quot;Hide if False&quot;
}</propertySetConfig>
        <sequenceNumber>2.0</sequenceNumber>
        <type>Step</type>
    </omniProcessElements>
    <omniProcessElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>SelectOption</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Renew Or Extend&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;required&quot; : true,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;readOnly&quot; : false,
  &quot;help&quot; : false,
  &quot;helpText&quot; : &quot;&quot;,
  &quot;options&quot; : [ {
    &quot;name&quot; : &quot;Extend&quot;,
    &quot;value&quot; : &quot;Extend the same contract&quot;
  }, {
    &quot;name&quot; : &quot;CreateNew&quot;,
    &quot;value&quot; : &quot;Create new&quot;
  } ],
  &quot;optionSource&quot; : {
    &quot;type&quot; : &quot;&quot;,
    &quot;source&quot; : &quot;&quot;
  },
  &quot;controllingField&quot; : {
    &quot;element&quot; : &quot;&quot;,
    &quot;type&quot; : &quot;&quot;,
    &quot;source&quot; : &quot;&quot;
  },
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;accessibleInFutureSteps&quot; : false
}</propertySetConfig>
            <sequenceNumber>0.0</sequenceNumber>
            <type>Select</type>
        </childElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>ExtendOrRenew</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Extend Or Renew&quot;,
  &quot;validationRequired&quot; : true,
  &quot;previousLabel&quot; : &quot;Previous&quot;,
  &quot;previousWidth&quot; : 3,
  &quot;nextLabel&quot; : &quot;Next&quot;,
  &quot;nextWidth&quot; : 3,
  &quot;cancelLabel&quot; : &quot;Cancel&quot;,
  &quot;cancelMessage&quot; : &quot;Are you sure?&quot;,
  &quot;saveLabel&quot; : &quot;Save for later&quot;,
  &quot;saveMessage&quot; : &quot;Are you sure you want to save it for later?&quot;,
  &quot;completeLabel&quot; : &quot;Complete&quot;,
  &quot;completeMessage&quot; : &quot;Are you sure you want to complete the script?&quot;,
  &quot;instruction&quot; : &quot;&quot;,
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;remoteClass&quot; : &quot;&quot;,
  &quot;remoteMethod&quot; : &quot;&quot;,
  &quot;remoteTimeout&quot; : 30000,
  &quot;remoteOptions&quot; : { },
  &quot;knowledgeOptions&quot; : {
    &quot;language&quot; : &quot;English&quot;,
    &quot;publishStatus&quot; : &quot;Online&quot;,
    &quot;keyword&quot; : &quot;&quot;,
    &quot;dataCategoryCriteria&quot; : &quot;&quot;,
    &quot;remoteTimeout&quot; : 30000
  },
  &quot;conditionType&quot; : &quot;Hide if False&quot;
}</propertySetConfig>
        <sequenceNumber>0.0</sequenceNumber>
        <type>Step</type>
    </omniProcessElements>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>GetContractAndLineItems</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;&lt;&gt;&quot;,
        &quot;field&quot; : &quot;SelectOption&quot;,
        &quot;data&quot; : null
      } ]
    }
  },
  &quot;label&quot; : null,
  &quot;controlWidth&quot; : 12,
  &quot;bundle&quot; : &quot;GetContractAndLineItem&quot;,
  &quot;dataRaptor Input Parameters&quot; : [ {
    &quot;inputParam&quot; : &quot;Id&quot;,
    &quot;element&quot; : &quot;ContextId&quot;
  } ],
  &quot;remoteTimeout&quot; : 30000,
  &quot;responseJSONPath&quot; : &quot;&quot;,
  &quot;responseJSONNode&quot; : &quot;&quot;,
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;None&quot;,
  &quot;redirectPageName&quot; : &quot;&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ]
}</propertySetConfig>
        <sequenceNumber>1.0</sequenceNumber>
        <type>DataRaptor Extract Action</type>
    </omniProcessElements>
    <omniProcessType>OmniScript</omniProcessType>
    <propertySetConfig>{&quot;includeCustomization&quot;:true,&quot;persistentComponent&quot;:[{&quot;render&quot;:false,&quot;label&quot;:&quot;&quot;,&quot;remoteClass&quot;:&quot;&quot;,&quot;remoteMethod&quot;:&quot;&quot;,&quot;remoteTimeout&quot;:30000,&quot;remoteOptions&quot;:{&quot;preTransformBundle&quot;:&quot;&quot;,&quot;postTransformBundle&quot;:&quot;&quot;},&quot;preTransformBundle&quot;:&quot;&quot;,&quot;postTransformBundle&quot;:&quot;&quot;,&quot;sendJSONPath&quot;:&quot;&quot;,&quot;sendJSONNode&quot;:&quot;&quot;,&quot;responseJSONPath&quot;:&quot;&quot;,&quot;responseJSONNode&quot;:&quot;&quot;,&quot;id&quot;:&quot;vlcCart&quot;,&quot;itemsKey&quot;:&quot;cartItems&quot;,&quot;modalConfigurationSetting&quot;:{&quot;modalHTMLTemplateId&quot;:&quot;vlcProductConfig.html&quot;,&quot;modalController&quot;:&quot;ModalProductCtrl&quot;,&quot;modalSize&quot;:&quot;lg&quot;}},{&quot;render&quot;:false,&quot;label&quot;:&quot;&quot;,&quot;remoteClass&quot;:&quot;&quot;,&quot;remoteMethod&quot;:&quot;&quot;,&quot;remoteTimeout&quot;:30000,&quot;remoteOptions&quot;:{&quot;preTransformBundle&quot;:&quot;&quot;,&quot;postTransformBundle&quot;:&quot;&quot;},&quot;preTransformBundle&quot;:&quot;&quot;,&quot;postTransformBundle&quot;:&quot;&quot;,&quot;id&quot;:&quot;vlcKnowledge&quot;,&quot;itemsKey&quot;:&quot;knowledgeItems&quot;,&quot;modalConfigurationSetting&quot;:{&quot;modalHTMLTemplateId&quot;:&quot;&quot;,&quot;modalController&quot;:&quot;&quot;,&quot;modalSize&quot;:&quot;lg&quot;}}],&quot;allowSaveForLater&quot;:true,&quot;saveNameTemplate&quot;:null,&quot;saveExpireInDays&quot;:null,&quot;saveForLaterRedirectPageName&quot;:&quot;sflRedirect&quot;,&quot;saveForLaterRedirectTemplateUrl&quot;:&quot;vlcSaveForLaterAcknowledge.html&quot;,&quot;saveContentEncoded&quot;:false,&quot;autoSaveOnStepNext&quot;:false,&quot;elementTypeToHTMLTemplateMapping&quot;:{},&quot;seedDataJSON&quot;:{},&quot;enableKnowledge&quot;:false,&quot;knowledgeArticleTypeQueryFieldsMap&quot;:{},&quot;timeTracking&quot;:true,&quot;visualforcePagesAvailableInPreview&quot;:{}}</propertySetConfig>
    <subType>Renew</subType>
    <type>Contract</type>
    <uniqueName>Contract_Renew_English_1</uniqueName>
    <versionNumber>1.0</versionNumber>
    <webComponentKey>a9faab9d-fd14-900d-fa11-f44723bbf3b4</webComponentKey>
</OmniScript>
