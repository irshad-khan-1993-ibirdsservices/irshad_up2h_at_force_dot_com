<?xml version="1.0" encoding="UTF-8"?>
<OmniScript xmlns="http://soap.sforce.com/2006/04/metadata">
    <customHtmlTemplates>&lt;script type=&quot;text/ng-template&quot; id=&quot;navButton.html&quot;&gt;
   &lt;fieldset&gt;
         &lt;button style=&quot;margin-top:2em&quot; create-document &gt;Generate Document&lt;/button&gt;
   &lt;/fieldset&gt;
&lt;/script&gt;
&lt;script type=&quot;text/ng-template&quot; id=&quot;products.html&quot;&gt;
            &lt;div class=&quot;panel panel-default&quot;&gt;
                &lt;table class=&quot;table&quot;&gt;
                    &lt;thead&gt;
                        &lt;tr&gt;
                            &lt;th/&gt;
                            &lt;th&gt;Name&lt;/th&gt;
                            &lt;th&gt;Product Family&lt;/th&gt;
                        &lt;/tr&gt;
                    &lt;/thead&gt;
                    &lt;tbody class=&apos;product&apos;&gt;
                        &lt;tr ng-repeat=&apos;p in control.vlcSI[control.itemsKey]&apos; ng-class=&quot;{ &apos;vlc-selectableitem-selected&apos; : p.vlcSelected }&quot; &gt;
                            &lt;td&gt;
                                &lt;input type=&apos;checkbox&apos; ng-model=&apos;p.vlcSelected&apos; ng-change=&apos;baseCtrl.onSelectItemCustomized(control, p, $index, this, false)&apos;/&gt;
                            &lt;/td&gt;
                            &lt;td&gt;{{p.Name}}&lt;/td&gt;
                            &lt;td&gt;{{p.Family}}&lt;/td&gt;
                        &lt;/tr&gt;
                    &lt;/tbody&gt;
                &lt;/table&gt;
            &lt;/div&gt;
	&lt;/script&gt;
&lt;script type=&quot;text/ng-template&quot; id=&quot;templates.html&quot;&gt;
            &lt;div class=&quot;panel panel-default&quot;&gt;
                &lt;table class=&quot;table&quot;&gt;
                    &lt;thead&gt;
                        &lt;tr&gt;
                            &lt;th/&gt;
                            &lt;th&gt;Name&lt;/th&gt;
                            &lt;th&gt;Version Number&lt;/th&gt;
                        &lt;/tr&gt;
                    &lt;/thead&gt;
                    &lt;tbody class=&apos;template&apos;&gt;
                        &lt;tr ng-repeat=&apos;p in control.vlcSI[control.itemsKey]&apos; ng-class=&quot;{ &apos;vlc-selectableitem-selected&apos; : p.vlcSelected }&quot; &gt;
                            &lt;td&gt;
                                &lt;input type=&apos;checkbox&apos; ng-model=&apos;p.vlcSelected&apos; ng-change=&apos;baseCtrl.onSelectItemCustomized(control, p, $index, this, false)&apos;/&gt;
                            &lt;/td&gt;
                            &lt;td&gt;{{p.Name}}&lt;/td&gt;
                            &lt;td&gt;{{p.VersionNumber}}&lt;/td&gt;
                        &lt;/tr&gt;
                    &lt;/tbody&gt;
                &lt;/table&gt;
            &lt;/div&gt;
	&lt;/script&gt;</customHtmlTemplates>
    <customJavaScript>baseCtrl.prototype.onSelectItemCustomized = function(control, option, index, scp, bFlip)
        {
            if(control === undefined || control === null || option === undefined || option === null)
                return;
            // multi-select, single select
            var bSetVal = true;
            var response = [];
            if(bFlip)
            {
                if(option.vlcSelected === undefined || option.vlcSelected === null)
                {
                    option.vlcSelected = bSetVal;
                }
                else
                {
                    bSetVal = !option.vlcSelected;
                    option.vlcSelected = bSetVal;
                }
            }

            // update &apos;Selectable Items&apos; response
            var recSet = control.vlcSI[control.itemsKey];
            // HP bug, use $$hashKey to check
            for(var i=0; i&lt;recSet.length; i++)
            {
                if(option.$$hashKey !== recSet[i].$$hashKey &amp;&amp; bFlip &amp;&amp; bSetVal &amp;&amp; control.propSetMap.selectMode === &apos;Single&apos;)
                     recSet[i].vlcSelected = false;
                if(recSet[i].vlcSelected === true)
                {
                    recSet[i].Status = &apos;Inactive&apos;;
                    response.push(recSet[i]);
                }
            }

            if(response.length &gt; 0)
                control.response = response;
            else
                control.response = null;

            if(control.propSetMap.dataJSON === true)
                scp.aggregate(scp, control.index, control.indexInParent, true, -1);
        };</customJavaScript>
    <elementTypeComponentMapping>{&quot;ElementTypeToHTMLTemplateList&quot;:[]}</elementTypeComponentMapping>
    <isActive>true</isActive>
    <isIntegrationProcedure>false</isIntegrationProcedure>
    <isMetadataCacheDisabled>false</isMetadataCacheDisabled>
    <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
    <isTestProcedure>false</isTestProcedure>
    <isWebCompEnabled>false</isWebCompEnabled>
    <language>English</language>
    <name>Contract Amendment</name>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>CarryProductNames</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : null,
  &quot;controlWidth&quot; : 12,
  &quot;validationRequired&quot; : &quot;None&quot;,
  &quot;elementValueMap&quot; : {
    &quot;SpecifyPrice&quot; : &quot;%Product%&quot;
  },
  &quot;showPersistentComponent&quot; : [ false, false ]
}</propertySetConfig>
        <sequenceNumber>5.0</sequenceNumber>
        <type>Set Values</type>
    </omniProcessElements>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>CreateNewContractAndVersionAndLine</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;NewVersionOrNewContract&quot;,
        &quot;data&quot; : &quot;New Contract&quot;
      } ]
    }
  },
  &quot;label&quot; : &quot;CreateNewContract&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;remoteTimeout&quot; : 30000,
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;Submit&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;bundle&quot; : &quot;CreateContractVersionLines&quot;
}</propertySetConfig>
        <sequenceNumber>10.0</sequenceNumber>
        <type>DataRaptor Post Action</type>
    </omniProcessElements>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>CreateNewContractLines</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;NewVersionOrNewContract&quot;,
        &quot;data&quot; : &quot;New Version&quot;
      } ]
    }
  },
  &quot;label&quot; : &quot;Create New Contract Lines&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;bundle&quot; : &quot;CreateLineItems&quot;,
  &quot;remoteTimeout&quot; : 30000,
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;Submit&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ]
}</propertySetConfig>
        <sequenceNumber>9.0</sequenceNumber>
        <type>DataRaptor Post Action</type>
    </omniProcessElements>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>CreateNewContractVersion</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;NewVersionOrNewContract&quot;,
        &quot;data&quot; : &quot;New Version&quot;
      } ]
    }
  },
  &quot;label&quot; : &quot;Create new Contract Version&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;remoteTimeout&quot; : 30000,
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;Submit&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;bundle&quot; : &quot;CreateContractVersion&quot;
}</propertySetConfig>
        <sequenceNumber>8.0</sequenceNumber>
        <type>DataRaptor Post Action</type>
    </omniProcessElements>
    <omniProcessElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>NewVersionOrNewContract</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : null,
  &quot;controlWidth&quot; : 12,
  &quot;required&quot; : false,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;readOnly&quot; : false,
  &quot;horizontalMode&quot; : false,
  &quot;help&quot; : false,
  &quot;helpText&quot; : &quot;&quot;,
  &quot;options&quot; : [ {
    &quot;name&quot; : &quot;New Version&quot;,
    &quot;value&quot; : &quot;As new version of the existing contract&quot;
  }, {
    &quot;name&quot; : &quot;New Contract&quot;,
    &quot;value&quot; : &quot;As a new contract record linked to the existing contract&quot;
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
            <sequenceNumber>1.0</sequenceNumber>
            <type>Radio</type>
        </childElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>CreateVersion?</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;How would you like to save this amendment?&quot;,
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
        <sequenceNumber>7.0</sequenceNumber>
        <type>Step</type>
    </omniProcessElements>
    <omniProcessElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>AutoCreateDoc</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : null,
  &quot;controlWidth&quot; : 12,
  &quot;required&quot; : false,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;readOnly&quot; : false,
  &quot;horizontalMode&quot; : false,
  &quot;help&quot; : false,
  &quot;helpText&quot; : &quot;&quot;,
  &quot;options&quot; : [ {
    &quot;name&quot; : &quot;DocumentYes&quot;,
    &quot;value&quot; : &quot;Yes&quot;
  }, {
    &quot;name&quot; : &quot;DocumentNo&quot;,
    &quot;value&quot; : &quot;No&quot;
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
            <sequenceNumber>1.0</sequenceNumber>
            <type>Radio</type>
        </childElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>DocumentCreation</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Would you like to generate an amendment document at this time?&quot;,
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
        <sequenceNumber>12.0</sequenceNumber>
        <type>Step</type>
    </omniProcessElements>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>Done Action</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Done&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;type&quot; : &quot;SObject&quot;,
  &quot;source&quot; : &quot;%ContextId%&quot;,
  &quot;validationRequired&quot; : &quot;Submit&quot;,
  &quot;redirectPageName&quot; : &quot;mobileDone&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcMobileConfirmation.html&quot;
}</propertySetConfig>
        <sequenceNumber>15.0</sequenceNumber>
        <type>Done Action</type>
    </omniProcessElements>
    <omniProcessElements>
        <childElements>
            <childElements>
                <isActive>true</isActive>
                <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
                <level>2.0</level>
                <name>MonthlyCharge</name>
                <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
                <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Recurring Charge&quot;,
  &quot;controlWidth&quot; : 2,
  &quot;required&quot; : false,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;readOnly&quot; : false,
  &quot;help&quot; : false,
  &quot;mask&quot; : 2,
  &quot;allowNegative&quot; : false,
  &quot;hideGroupSep&quot; : false,
  &quot;currencySymbol&quot; : &quot;$&quot;,
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;accessibleInFutureSteps&quot; : false,
  &quot;debounceValue&quot; : 0
}</propertySetConfig>
                <sequenceNumber>5.0</sequenceNumber>
                <type>Currency</type>
            </childElements>
            <childElements>
                <isActive>true</isActive>
                <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
                <level>2.0</level>
                <name>Name</name>
                <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
                <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Product Name&quot;,
  &quot;controlWidth&quot; : 3,
  &quot;required&quot; : false,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;readOnly&quot; : false,
  &quot;help&quot; : false,
  &quot;minLength&quot; : 0,
  &quot;maxLength&quot; : 255,
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;accessibleInFutureSteps&quot; : false,
  &quot;debounceValue&quot; : 0
}</propertySetConfig>
                <sequenceNumber>1.0</sequenceNumber>
                <type>Text</type>
            </childElements>
            <childElements>
                <isActive>true</isActive>
                <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
                <level>2.0</level>
                <name>OneTimeCharge</name>
                <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
                <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;One Time Charge&quot;,
  &quot;controlWidth&quot; : 2,
  &quot;required&quot; : false,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;readOnly&quot; : false,
  &quot;help&quot; : false,
  &quot;mask&quot; : 2,
  &quot;allowNegative&quot; : false,
  &quot;hideGroupSep&quot; : false,
  &quot;currencySymbol&quot; : &quot;$&quot;,
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;accessibleInFutureSteps&quot; : false,
  &quot;debounceValue&quot; : 0
}</propertySetConfig>
                <sequenceNumber>4.0</sequenceNumber>
                <type>Currency</type>
            </childElements>
            <childElements>
                <isActive>true</isActive>
                <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
                <level>2.0</level>
                <name>OneTimeTotal</name>
                <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
                <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;One Time Total&quot;,
  &quot;controlWidth&quot; : 2,
  &quot;expression&quot; : &quot;%OneTimeCharge|n% * %Quantity|n%&quot;,
  &quot;hide&quot; : false,
  &quot;mask&quot; : &quot;###,###.##&quot;,
  &quot;dataType&quot; : &quot;Currency&quot;,
  &quot;hideGroupSep&quot; : false,
  &quot;currencySymbol&quot; : &quot;$&quot;,
  &quot;dateFormat&quot; : &quot;MM-dd-yyyy&quot;
}</propertySetConfig>
                <sequenceNumber>6.0</sequenceNumber>
                <type>Formula</type>
            </childElements>
            <childElements>
                <isActive>true</isActive>
                <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
                <level>2.0</level>
                <name>ProductId</name>
                <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
                <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;Name&quot;,
        &quot;data&quot; : &quot;null&quot;
      } ]
    }
  },
  &quot;label&quot; : null,
  &quot;controlWidth&quot; : 12,
  &quot;required&quot; : false,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;readOnly&quot; : false,
  &quot;help&quot; : false,
  &quot;minLength&quot; : 0,
  &quot;maxLength&quot; : 255,
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;accessibleInFutureSteps&quot; : true,
  &quot;debounceValue&quot; : 0
}</propertySetConfig>
                <sequenceNumber>2.0</sequenceNumber>
                <type>Text</type>
            </childElements>
            <childElements>
                <isActive>true</isActive>
                <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
                <level>2.0</level>
                <name>Quantity</name>
                <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
                <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Quantity&quot;,
  &quot;controlWidth&quot; : 1,
  &quot;required&quot; : false,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;readOnly&quot; : false,
  &quot;help&quot; : false,
  &quot;minLength&quot; : 0,
  &quot;maxLength&quot; : 255,
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;accessibleInFutureSteps&quot; : false,
  &quot;debounceValue&quot; : 0
}</propertySetConfig>
                <sequenceNumber>3.0</sequenceNumber>
                <type>Number</type>
            </childElements>
            <childElements>
                <isActive>true</isActive>
                <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
                <level>2.0</level>
                <name>RecurringTotal</name>
                <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
                <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Recurring Total&quot;,
  &quot;controlWidth&quot; : 2,
  &quot;expression&quot; : &quot;%MonthlyCharge|n% * %Quantity|n%&quot;,
  &quot;hide&quot; : false,
  &quot;mask&quot; : &quot;###,###.##&quot;,
  &quot;dataType&quot; : &quot;Currency&quot;,
  &quot;hideGroupSep&quot; : false,
  &quot;currencySymbol&quot; : &quot;$&quot;,
  &quot;dateFormat&quot; : &quot;MM-dd-yyyy&quot;
}</propertySetConfig>
                <sequenceNumber>7.0</sequenceNumber>
                <type>Formula</type>
            </childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>SpecifyPrice</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;&lt;&gt;&quot;,
        &quot;field&quot; : &quot;Product&quot;,
        &quot;data&quot; : null
      } ]
    }
  },
  &quot;label&quot; : &quot;Enter Price for the selected product&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;accessibleInFutureSteps&quot; : true
}</propertySetConfig>
            <sequenceNumber>1.0</sequenceNumber>
            <type>Block</type>
        </childElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>EnterPrice</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Specify prices for each product&quot;,
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
  &quot;showPersistentComponent&quot; : [ false, false ],
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
        <sequenceNumber>6.0</sequenceNumber>
        <type>Step</type>
    </omniProcessElements>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>GetContract</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;GetContract&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;bundle&quot; : &quot;GetContract&quot;,
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
        <sequenceNumber>2.0</sequenceNumber>
        <type>DataRaptor Extract Action</type>
    </omniProcessElements>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>GetDocumentTemplates</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Get Document Templates&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;bundle&quot; : &quot;GetDocumentTemplates&quot;,
  &quot;dataRaptor Input Parameters&quot; : [ {
    &quot;inputParam&quot; : &quot;active&quot;,
    &quot;element&quot; : &quot;TrackingAgreement&quot;
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
        <sequenceNumber>13.0</sequenceNumber>
        <type>DataRaptor Extract Action</type>
    </omniProcessElements>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>GetProducts</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Get Products&quot;,
  &quot;controlWidth&quot; : 12,
  &quot;bundle&quot; : &quot;GetProducts&quot;,
  &quot;dataRaptor Input Parameters&quot; : [ ],
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
        <sequenceNumber>3.0</sequenceNumber>
        <type>DataRaptor Extract Action</type>
    </omniProcessElements>
    <omniProcessElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>CreateNewLine</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : null,
  &quot;controlWidth&quot; : 12,
  &quot;required&quot; : false,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;readOnly&quot; : false,
  &quot;help&quot; : false,
  &quot;helpText&quot; : &quot;&quot;,
  &quot;options&quot; : [ {
    &quot;name&quot; : &quot;CreateNewLine&quot;,
    &quot;value&quot; : &quot;Add products as new contract lines&quot;
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
            <sequenceNumber>1.0</sequenceNumber>
            <type>Select</type>
        </childElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>Lines</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;What type of amendment do you need?&quot;,
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
        <sequenceNumber>1.0</sequenceNumber>
        <type>Step</type>
    </omniProcessElements>
    <omniProcessElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>CreateDoc</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;AutoCreateDoc&quot;,
        &quot;data&quot; : &quot;DocumentYes&quot;
      }, {
        &quot;condition&quot; : &quot;&lt;&gt;&quot;,
        &quot;field&quot; : &quot;DocumentTemplate&quot;,
        &quot;data&quot; : &quot;&quot;
      } ]
    }
  },
  &quot;label&quot; : &quot;Generate Document&quot;,
  &quot;remoteClass&quot; : &quot;CreateAmendmentDocument&quot;,
  &quot;remoteMethod&quot; : &quot;createWordDoc&quot;,
  &quot;remoteOptions&quot; : {
    &quot;preTransformBundle&quot; : &quot;&quot;,
    &quot;postTransformBundle&quot; : &quot;&quot;
  },
  &quot;remoteTimeout&quot; : 30000,
  &quot;preTransformBundle&quot; : &quot;&quot;,
  &quot;postTransformBundle&quot; : &quot;&quot;,
  &quot;sendJSONPath&quot; : &quot;&quot;,
  &quot;sendJSONNode&quot; : &quot;&quot;,
  &quot;responseJSONPath&quot; : &quot;&quot;,
  &quot;responseJSONNode&quot; : &quot;&quot;,
  &quot;HTMLTemplateId&quot; : &quot;navButton.html&quot;,
  &quot;accessibleInFutureSteps&quot; : false
}</propertySetConfig>
            <sequenceNumber>2.0</sequenceNumber>
            <type>Input Block</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>DocumentTemplate</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;AutoCreateDoc&quot;,
        &quot;data&quot; : &quot;DocumentYes&quot;
      } ]
    }
  },
  &quot;label&quot; : &quot;Templates&quot;,
  &quot;remoteClass&quot; : &quot;&quot;,
  &quot;remoteMethod&quot; : &quot;&quot;,
  &quot;remoteOptions&quot; : {
    &quot;preTransformBundle&quot; : &quot;&quot;,
    &quot;postTransformBundle&quot; : &quot;&quot;
  },
  &quot;remoteTimeout&quot; : 30000,
  &quot;preTransformBundle&quot; : &quot;&quot;,
  &quot;postTransformBundle&quot; : &quot;&quot;,
  &quot;sendJSONPath&quot; : &quot;&quot;,
  &quot;sendJSONNode&quot; : &quot;&quot;,
  &quot;responseJSONPath&quot; : &quot;&quot;,
  &quot;responseJSONNode&quot; : &quot;&quot;,
  &quot;HTMLTemplateId&quot; : &quot;templates.html&quot;,
  &quot;itemsKey&quot; : &quot;recSet&quot;,
  &quot;selectMode&quot; : &quot;Single&quot;,
  &quot;dataJSON&quot; : true,
  &quot;modalHTMLTemplateId&quot; : &quot;vlcModalContent.html&quot;,
  &quot;modalController&quot; : &quot;ModalInstanceCtrl&quot;,
  &quot;modalSize&quot; : &quot;&quot;,
  &quot;maxCompareSize&quot; : 4,
  &quot;modalConfigurationSetting&quot; : {
    &quot;modalHTMLTemplateId&quot; : &quot;vlcProductConfig.html&quot;,
    &quot;modalController&quot; : &quot;ModalProductCtrl&quot;,
    &quot;modalSize&quot; : &quot;lg&quot;
  },
  &quot;accessibleInFutureSteps&quot; : true
}</propertySetConfig>
            <sequenceNumber>1.0</sequenceNumber>
            <type>Selectable Items</type>
        </childElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>PickTemplate</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;AutoCreateDoc&quot;,
        &quot;data&quot; : &quot;DocumentYes&quot;
      } ]
    }
  },
  &quot;label&quot; : &quot;Pick an amendment template and click the Generate Document button&quot;,
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
  &quot;instruction&quot; : &quot;&lt;p&gt;(Allow only one template to be selected)&lt;/p&gt;&quot;,
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
        <sequenceNumber>14.0</sequenceNumber>
        <type>Step</type>
    </omniProcessElements>
    <omniProcessElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>Product</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Products&quot;,
  &quot;remoteClass&quot; : &quot;&quot;,
  &quot;remoteMethod&quot; : &quot;&quot;,
  &quot;remoteOptions&quot; : {
    &quot;preTransformBundle&quot; : &quot;&quot;,
    &quot;postTransformBundle&quot; : &quot;&quot;
  },
  &quot;remoteTimeout&quot; : 30000,
  &quot;preTransformBundle&quot; : &quot;&quot;,
  &quot;postTransformBundle&quot; : &quot;&quot;,
  &quot;sendJSONPath&quot; : &quot;&quot;,
  &quot;sendJSONNode&quot; : &quot;&quot;,
  &quot;responseJSONPath&quot; : &quot;&quot;,
  &quot;responseJSONNode&quot; : &quot;&quot;,
  &quot;HTMLTemplateId&quot; : &quot;products.html&quot;,
  &quot;itemsKey&quot; : &quot;recSet&quot;,
  &quot;selectMode&quot; : &quot;Multi&quot;,
  &quot;dataJSON&quot; : true,
  &quot;modalHTMLTemplateId&quot; : &quot;vlcModalContent.html&quot;,
  &quot;modalController&quot; : &quot;ModalInstanceCtrl&quot;,
  &quot;modalSize&quot; : &quot;&quot;,
  &quot;maxCompareSize&quot; : 4,
  &quot;modalConfigurationSetting&quot; : {
    &quot;modalHTMLTemplateId&quot; : &quot;vlcProductConfig.html&quot;,
    &quot;modalController&quot; : &quot;ModalProductCtrl&quot;,
    &quot;modalSize&quot; : &quot;lg&quot;
  },
  &quot;accessibleInFutureSteps&quot; : false
}</propertySetConfig>
            <sequenceNumber>1.0</sequenceNumber>
            <type>Selectable Items</type>
        </childElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>SelectProduct</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Select one or more products to add&quot;,
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
        <sequenceNumber>4.0</sequenceNumber>
        <type>Step</type>
    </omniProcessElements>
    <omniProcessElements>
        <isActive>false</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>UpdateContractVersionType</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;NewVersionOrNewContract&quot;,
        &quot;data&quot; : &quot;New Contract&quot;
      } ]
    }
  },
  &quot;label&quot; : null,
  &quot;controlWidth&quot; : 12,
  &quot;remoteTimeout&quot; : 30000,
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;Submit&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;bundle&quot; : &quot;UpdateContractVersion&quot;
}</propertySetConfig>
        <sequenceNumber>11.0</sequenceNumber>
        <type>DataRaptor Post Action</type>
    </omniProcessElements>
    <omniProcessType>OmniScript</omniProcessType>
    <propertySetConfig>{&quot;includeCustomization&quot;:true,&quot;persistentComponent&quot;:[{&quot;render&quot;:false,&quot;label&quot;:&quot;&quot;,&quot;remoteClass&quot;:&quot;&quot;,&quot;remoteMethod&quot;:&quot;&quot;,&quot;remoteTimeout&quot;:30000,&quot;remoteOptions&quot;:{&quot;preTransformBundle&quot;:&quot;&quot;,&quot;postTransformBundle&quot;:&quot;&quot;},&quot;preTransformBundle&quot;:&quot;&quot;,&quot;postTransformBundle&quot;:&quot;&quot;,&quot;sendJSONPath&quot;:&quot;&quot;,&quot;sendJSONNode&quot;:&quot;&quot;,&quot;responseJSONPath&quot;:&quot;&quot;,&quot;responseJSONNode&quot;:&quot;&quot;,&quot;id&quot;:&quot;vlcCart&quot;,&quot;itemsKey&quot;:&quot;cartItems&quot;,&quot;modalConfigurationSetting&quot;:{&quot;modalHTMLTemplateId&quot;:&quot;vlcProductConfig.html&quot;,&quot;modalController&quot;:&quot;ModalProductCtrl&quot;,&quot;modalSize&quot;:&quot;lg&quot;}},{&quot;render&quot;:false,&quot;label&quot;:&quot;&quot;,&quot;remoteClass&quot;:&quot;&quot;,&quot;remoteMethod&quot;:&quot;&quot;,&quot;remoteTimeout&quot;:30000,&quot;remoteOptions&quot;:{&quot;preTransformBundle&quot;:&quot;&quot;,&quot;postTransformBundle&quot;:&quot;&quot;},&quot;preTransformBundle&quot;:&quot;&quot;,&quot;postTransformBundle&quot;:&quot;&quot;,&quot;id&quot;:&quot;vlcKnowledge&quot;,&quot;itemsKey&quot;:&quot;knowledgeItems&quot;,&quot;modalConfigurationSetting&quot;:{&quot;modalHTMLTemplateId&quot;:&quot;&quot;,&quot;modalController&quot;:&quot;&quot;,&quot;modalSize&quot;:&quot;lg&quot;}}],&quot;allowSaveForLater&quot;:true,&quot;saveNameTemplate&quot;:null,&quot;saveExpireInDays&quot;:null,&quot;saveForLaterRedirectPageName&quot;:&quot;sflRedirect&quot;,&quot;saveForLaterRedirectTemplateUrl&quot;:&quot;vlcSaveForLaterAcknowledge.html&quot;,&quot;saveContentEncoded&quot;:false,&quot;autoSaveOnStepNext&quot;:false,&quot;elementTypeToHTMLTemplateMapping&quot;:{},&quot;seedDataJSON&quot;:{&quot;TrackingAgreement&quot;:true,&quot;ContractType&quot;:&quot;Amendment&quot;,&quot;VersionNumber&quot;:1},&quot;enableKnowledge&quot;:false,&quot;knowledgeArticleTypeQueryFieldsMap&quot;:{},&quot;timeTracking&quot;:true,&quot;customPages&quot;:{&quot;ContractPreview&quot;:&quot;vlocity_cmt__ContractAmendmentPreview?verticalMode=true&quot;},&quot;visualforcePagesAvailableInPreview&quot;:{},&quot;cancelType&quot;:&quot;SObject&quot;,&quot;cancelSource&quot;:&quot;%ContextId%&quot;,&quot;cancelRedirectPageName&quot;:&quot;OmniScriptCancelled&quot;,&quot;cancelRedirectTemplateUrl&quot;:&quot;vlcCancelled.html&quot;}</propertySetConfig>
    <subType>Amend</subType>
    <type>Contract</type>
    <uniqueName>Contract_Amend_English_1</uniqueName>
    <versionNumber>1.0</versionNumber>
    <webComponentKey>a0697450-b04a-81c0-48ed-f77a5dcc72a2</webComponentKey>
</OmniScript>
