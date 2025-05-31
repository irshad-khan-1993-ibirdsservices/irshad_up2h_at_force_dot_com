<?xml version="1.0" encoding="UTF-8"?>
<OmniScript xmlns="http://soap.sforce.com/2006/04/metadata">
    <customHtmlTemplates>&lt;script type=&quot;text/ng-template&quot; id=&quot;navButton.html&quot;&gt;
   &lt;fieldset&gt;
         &lt;button style=&quot;margin-top:2em&quot; create-document &gt;Generate Document&lt;/button&gt;
   &lt;/fieldset&gt;
&lt;/script&gt;
&lt;script type=&quot;text/ng-template&quot; id=&quot;templates.html&quot;&gt;
            &lt;div class=&apos;slds-col--padded slds-size--1-of-1&apos;&gt;
              &lt;table class=&quot;slds-table slds-table--bordered slds-table--cell-buffer vlc-slds-table&quot;&gt;
              &lt;thead&gt;
                &lt;tr class=&quot;slds-text-heading--label&quot;&gt;
                  &lt;th width=&quot;20px&quot;/&gt;
                  &lt;th scope=&quot;col&quot;&gt;
                    &lt;div class=&quot;slds-truncate&quot;&gt;Template Name&lt;/div&gt;
                  &lt;/th&gt;
                 &lt;th scope=&quot;col&quot;&gt;
                    &lt;div class=&quot;slds-truncate&quot;&gt;Version Number&lt;/div&gt;
                 &lt;/th&gt;               
               &lt;/tr&gt;
             &lt;/thead&gt;
             &lt;tbody&gt;
               &lt;tr ng-repeat=&apos;p in control.vlcSI[control.itemsKey]&apos; ng-class=&quot;{ &apos;vlc-selectableitem-selected&apos; : p.vlcSelected }&quot; &gt;
                 &lt;th class=&quot;slds-cell-shrink&quot;&gt;
                    &lt;label class=&quot;slds-checkbox&quot;&gt;
                        &lt;input type=&quot;checkbox&quot; ng-model=&apos;p.vlcSelected&apos; ng-change=&apos;onSelectItem(control, p, $index, this)&apos;/&gt;
                        &lt;span class=&quot;slds-checkbox--faux&quot;&gt;&lt;/span&gt;
                        &lt;span class=&quot;slds-assistive-text&quot;&gt;Select&lt;/span&gt;
                    &lt;/label&gt;
                &lt;/th&gt;
                &lt;td&gt;
                    &lt;div class=&quot;slds-truncate&quot;&gt;{{p[&apos;Name&apos;]}}&lt;/div&gt;
                &lt;/td&gt;
                &lt;td&gt;
                    &lt;div class=&quot;slds-truncate&quot;&gt;{{p[&apos;VersionNumber&apos;]}}&lt;/div&gt;
                &lt;/td&gt;
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
    <name>Generic Document Generation</name>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>CreateObjDocument</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;controlWidth&quot; : 12,
  &quot;remoteClass&quot; : &quot;ObjectDocumentService&quot;,
  &quot;remoteMethod&quot; : &quot;createObjectDocument&quot;,
  &quot;remoteOptions&quot; : {
    &quot;preTransformBundle&quot; : &quot;&quot;,
    &quot;postTransformBundle&quot; : &quot;&quot;,
    &quot;contextId&quot; : &quot;%qId%&quot;,
    &quot;templateId&quot; : &quot;%templateId%&quot;,
    &quot;useTemplateDRExtract&quot; : &quot;Yes&quot;
  },
  &quot;remoteTimeout&quot; : 30000,
  &quot;preTransformBundle&quot; : &quot;&quot;,
  &quot;postTransformBundle&quot; : &quot;&quot;,
  &quot;sendJSONPath&quot; : &quot;&quot;,
  &quot;sendJSONNode&quot; : &quot;&quot;,
  &quot;responseJSONPath&quot; : &quot;&quot;,
  &quot;responseJSONNode&quot; : &quot;&quot;,
  &quot;extraPayload&quot; : { },
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureGoBackLabel&quot; : &quot;Go Back&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;None&quot;,
  &quot;redirectPageName&quot; : &quot;&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;TemplateType&quot;,
        &quot;data&quot; : &quot;Vlocity Web Template&quot;
      } ]
    }
  },
  &quot;HTMLTemplateId&quot; : &quot;&quot;,
  &quot;wpm&quot; : false,
  &quot;ssm&quot; : false,
  &quot;message&quot; : { },
  &quot;label&quot; : null,
  &quot;errorMessage&quot; : {
    &quot;custom&quot; : [ ],
    &quot;default&quot; : null
  },
  &quot;enableDefaultAbort&quot; : false
}</propertySetConfig>
        <sequenceNumber>7.0</sequenceNumber>
        <type>Remote Action</type>
    </omniProcessElements>
    <omniProcessElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>ObjectId</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;controlWidth&quot; : 12,
  &quot;showInputWidth&quot; : false,
  &quot;inputWidth&quot; : 12,
  &quot;required&quot; : false,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;readOnly&quot; : false,
  &quot;defaultValue&quot; : null,
  &quot;help&quot; : false,
  &quot;helpText&quot; : &quot;&quot;,
  &quot;mask&quot; : &quot;&quot;,
  &quot;pattern&quot; : &quot;&quot;,
  &quot;ptrnErrText&quot; : &quot;&quot;,
  &quot;minLength&quot; : 0,
  &quot;maxLength&quot; : 255,
  &quot;show&quot; : null,
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;accessibleInFutureSteps&quot; : false,
  &quot;debounceValue&quot; : 0,
  &quot;HTMLTemplateId&quot; : &quot;&quot;,
  &quot;hide&quot; : false,
  &quot;disOnTplt&quot; : false,
  &quot;label&quot; : &quot;Object Id&quot;
}</propertySetConfig>
            <sequenceNumber>1.0</sequenceNumber>
            <type>Text</type>
        </childElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>EnterObject</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : null,
  &quot;label&quot; : &quot;Enter Object Id&quot;,
  &quot;disOnTplt&quot; : false,
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
            <name>EmailPDFPPT</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;controlWidth&quot; : 5,
  &quot;useTemplate&quot; : false,
  &quot;emailTemplateInformation&quot; : {
    &quot;emailTemplateName&quot; : &quot;&quot;,
    &quot;emailTargetObjectId&quot; : &quot;&quot;,
    &quot;saveAsActivity&quot; : false,
    &quot;whatId&quot; : &quot;&quot;
  },
  &quot;emailInformation&quot; : {
    &quot;toAddressList&quot; : [ ],
    &quot;ccAddressList&quot; : [ ],
    &quot;bccAddressList&quot; : [ ],
    &quot;emailSubject&quot; : &quot;This is a test email&quot;,
    &quot;emailBody&quot; : &quot;This is a test email&quot;,
    &quot;setHtmlBody&quot; : false
  },
  &quot;OrgWideEmailAddress&quot; : &quot;&quot;,
  &quot;fileAttachments&quot; : &quot;&quot;,
  &quot;attachmentList&quot; : &quot;&quot;,
  &quot;contentVersionList&quot; : &quot;%pdfGenContentVersionId%&quot;,
  &quot;staticDocList&quot; : [ ],
  &quot;docList&quot; : &quot;&quot;,
  &quot;remoteTimeout&quot; : 30000,
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureGoBackLabel&quot; : &quot;Go Back&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;Step&quot;,
  &quot;redirectPageName&quot; : &quot;&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;group&quot; : {
          &quot;operator&quot; : &quot;OR&quot;,
          &quot;rules&quot; : [ {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;TemplateType&quot;,
            &quot;data&quot; : &quot;Microsoft Powerpoint .PPTX Template&quot;
          }, {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;TemplateType&quot;,
            &quot;data&quot; : &quot;Microsoft Word .DOCX Template&quot;
          } ]
        }
      }, {
        &quot;group&quot; : {
          &quot;operator&quot; : &quot;OR&quot;,
          &quot;rules&quot; : [ {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;inTest&quot;,
            &quot;data&quot; : &quot;false&quot;
          }, {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;inTest&quot;,
            &quot;data&quot; : null
          } ]
        }
      }, {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;isPDFAttachDone&quot;,
        &quot;data&quot; : &quot;true&quot;
      }, {
        &quot;group&quot; : {
          &quot;operator&quot; : &quot;AND&quot;,
          &quot;rules&quot; : [ {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;multiDocumentGenerationValue&quot;,
            &quot;data&quot; : &quot;false&quot;
          } ]
        }
      } ]
    }
  },
  &quot;HTMLTemplateId&quot; : &quot;&quot;,
  &quot;wpm&quot; : false,
  &quot;ssm&quot; : false,
  &quot;message&quot; : { },
  &quot;label&quot; : &quot;Email PDF&quot;,
  &quot;errorMessage&quot; : {
    &quot;custom&quot; : [ ],
    &quot;default&quot; : null
  },
  &quot;enableDefaultAbort&quot; : false
}</propertySetConfig>
            <sequenceNumber>7.0</sequenceNumber>
            <type>Email Action</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>EmailWebTemplate-PDF</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;controlWidth&quot; : 12,
  &quot;useTemplate&quot; : false,
  &quot;emailTemplateInformation&quot; : {
    &quot;emailTemplateName&quot; : &quot;&quot;,
    &quot;emailTargetObjectId&quot; : &quot;&quot;,
    &quot;saveAsActivity&quot; : false,
    &quot;whatId&quot; : &quot;&quot;
  },
  &quot;emailInformation&quot; : {
    &quot;toAddressList&quot; : [ ],
    &quot;ccAddressList&quot; : [ ],
    &quot;bccAddressList&quot; : [ ],
    &quot;emailSubject&quot; : &quot;This is a test email&quot;,
    &quot;emailBody&quot; : &quot;This is a test email&quot;,
    &quot;setHtmlBody&quot; : false
  },
  &quot;OrgWideEmailAddress&quot; : &quot;&quot;,
  &quot;fileAttachments&quot; : &quot;&quot;,
  &quot;attachmentList&quot; : &quot;%pdfGenAttachmentId%&quot;,
  &quot;contentVersionList&quot; : &quot;&quot;,
  &quot;staticDocList&quot; : [ ],
  &quot;docList&quot; : &quot;&quot;,
  &quot;remoteTimeout&quot; : 30000,
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureGoBackLabel&quot; : &quot;Go Back&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;Step&quot;,
  &quot;redirectPageName&quot; : &quot;&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;TemplateType&quot;,
        &quot;data&quot; : &quot;Vlocity Web Template&quot;
      }, {
        &quot;group&quot; : {
          &quot;operator&quot; : &quot;OR&quot;,
          &quot;rules&quot; : [ {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;inTest&quot;,
            &quot;data&quot; : &quot;false&quot;
          }, {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;inTest&quot;,
            &quot;data&quot; : &quot;&quot;
          } ]
        }
      }, {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;isPDFAttachDone&quot;,
        &quot;data&quot; : &quot;true&quot;
      }, {
        &quot;group&quot; : {
          &quot;operator&quot; : &quot;AND&quot;,
          &quot;rules&quot; : [ {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;multiDocumentGenerationValue&quot;,
            &quot;data&quot; : &quot;false&quot;
          } ]
        }
      } ]
    }
  },
  &quot;HTMLTemplateId&quot; : &quot;&quot;,
  &quot;wpm&quot; : false,
  &quot;ssm&quot; : false,
  &quot;message&quot; : { },
  &quot;label&quot; : &quot;Email PDF&quot;,
  &quot;errorMessage&quot; : {
    &quot;custom&quot; : [ ],
    &quot;default&quot; : null
  },
  &quot;enableDefaultAbort&quot; : false
}</propertySetConfig>
            <sequenceNumber>5.0</sequenceNumber>
            <type>Email Action</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>EmailWebTemplate-Word</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;controlWidth&quot; : 12,
  &quot;useTemplate&quot; : false,
  &quot;emailTemplateInformation&quot; : {
    &quot;emailTemplateName&quot; : &quot;&quot;,
    &quot;emailTargetObjectId&quot; : &quot;&quot;,
    &quot;saveAsActivity&quot; : false,
    &quot;whatId&quot; : &quot;&quot;
  },
  &quot;emailInformation&quot; : {
    &quot;toAddressList&quot; : [ ],
    &quot;ccAddressList&quot; : [ ],
    &quot;bccAddressList&quot; : [ ],
    &quot;emailSubject&quot; : &quot;This is a test email&quot;,
    &quot;emailBody&quot; : &quot;This is a test email&quot;,
    &quot;setHtmlBody&quot; : false
  },
  &quot;fileAttachments&quot; : &quot;&quot;,
  &quot;attachmentList&quot; : &quot;%docGenAttachmentId%&quot;,
  &quot;contentVersionList&quot; : &quot;&quot;,
  &quot;staticDocList&quot; : [ ],
  &quot;docList&quot; : &quot;&quot;,
  &quot;remoteTimeout&quot; : 30000,
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureGoBackLabel&quot; : &quot;Go Back&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;Step&quot;,
  &quot;redirectPageName&quot; : &quot;&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;TemplateType&quot;,
        &quot;data&quot; : &quot;Vlocity Web Template&quot;
      }, {
        &quot;group&quot; : {
          &quot;operator&quot; : &quot;OR&quot;,
          &quot;rules&quot; : [ {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;inTest&quot;,
            &quot;data&quot; : &quot;false&quot;
          }, {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;inTest&quot;,
            &quot;data&quot; : &quot;&quot;
          } ]
        }
      }, {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;isWordAttachDone&quot;,
        &quot;data&quot; : &quot;true&quot;
      }, {
        &quot;group&quot; : {
          &quot;operator&quot; : &quot;AND&quot;,
          &quot;rules&quot; : [ {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;multiDocumentGenerationValue&quot;,
            &quot;data&quot; : &quot;false&quot;
          } ]
        }
      } ]
    }
  },
  &quot;HTMLTemplateId&quot; : &quot;&quot;,
  &quot;wpm&quot; : false,
  &quot;ssm&quot; : false,
  &quot;message&quot; : { },
  &quot;label&quot; : &quot;Email Word&quot;,
  &quot;errorMessage&quot; : {
    &quot;custom&quot; : [ ],
    &quot;default&quot; : null
  },
  &quot;enableDefaultAbort&quot; : false
}</propertySetConfig>
            <sequenceNumber>4.0</sequenceNumber>
            <type>Email Action</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>EmailWordPPT</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;controlWidth&quot; : 5,
  &quot;useTemplate&quot; : false,
  &quot;emailTemplateInformation&quot; : {
    &quot;emailTemplateName&quot; : &quot;&quot;,
    &quot;emailTargetObjectId&quot; : &quot;&quot;,
    &quot;saveAsActivity&quot; : false,
    &quot;whatId&quot; : &quot;&quot;
  },
  &quot;emailInformation&quot; : {
    &quot;toAddressList&quot; : [ ],
    &quot;ccAddressList&quot; : [ ],
    &quot;bccAddressList&quot; : [ ],
    &quot;emailSubject&quot; : &quot;This is a test email&quot;,
    &quot;emailBody&quot; : &quot;This is a test email&quot;,
    &quot;setHtmlBody&quot; : false
  },
  &quot;OrgWideEmailAddress&quot; : &quot;&quot;,
  &quot;fileAttachments&quot; : &quot;&quot;,
  &quot;attachmentList&quot; : &quot;&quot;,
  &quot;contentVersionList&quot; : &quot;%docGenContentVersionId%&quot;,
  &quot;staticDocList&quot; : [ ],
  &quot;docList&quot; : &quot;&quot;,
  &quot;remoteTimeout&quot; : 30000,
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureGoBackLabel&quot; : &quot;Go Back&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;Step&quot;,
  &quot;redirectPageName&quot; : &quot;&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;group&quot; : {
          &quot;operator&quot; : &quot;OR&quot;,
          &quot;rules&quot; : [ {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;TemplateType&quot;,
            &quot;data&quot; : &quot;Microsoft Powerpoint .PPTX Template&quot;
          }, {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;TemplateType&quot;,
            &quot;data&quot; : &quot;Microsoft Word .DOCX Template&quot;
          } ]
        }
      }, {
        &quot;group&quot; : {
          &quot;operator&quot; : &quot;OR&quot;,
          &quot;rules&quot; : [ {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;inTest&quot;,
            &quot;data&quot; : &quot;false&quot;
          }, {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;inTest&quot;,
            &quot;data&quot; : null
          } ]
        }
      }, {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;isWordAttachDone&quot;,
        &quot;data&quot; : &quot;1&quot;
      }, {
        &quot;group&quot; : {
          &quot;operator&quot; : &quot;AND&quot;,
          &quot;rules&quot; : [ {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;multiDocumentGenerationValue&quot;,
            &quot;data&quot; : &quot;false&quot;
          } ]
        }
      } ]
    }
  },
  &quot;HTMLTemplateId&quot; : &quot;&quot;,
  &quot;wpm&quot; : false,
  &quot;ssm&quot; : false,
  &quot;message&quot; : { },
  &quot;label&quot; : &quot;Email Word/Powerpoint&quot;,
  &quot;errorMessage&quot; : {
    &quot;custom&quot; : [ ],
    &quot;default&quot; : null
  },
  &quot;enableDefaultAbort&quot; : false
}</propertySetConfig>
            <sequenceNumber>6.0</sequenceNumber>
            <type>Email Action</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>GenerateDocumentWebTemplate</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
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
  &quot;HTMLTemplateId&quot; : &quot;object-document-creation-default&quot;,
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;OR&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;TemplateType&quot;,
        &quot;data&quot; : &quot;Vlocity Web Template&quot;
      } ]
    }
  },
  &quot;accessibleInFutureSteps&quot; : false,
  &quot;label&quot; : &quot;Proposal&quot;,
  &quot;documentType&quot; : &quot;pdf,word&quot;,
  &quot;disOnTplt&quot; : false
}</propertySetConfig>
            <sequenceNumber>3.0</sequenceNumber>
            <type>Input Block</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>GenerateDocumentWordPPT</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
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
  &quot;HTMLTemplateId&quot; : &quot;object-document-creation-docx-template&quot;,
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;group&quot; : {
          &quot;operator&quot; : &quot;OR&quot;,
          &quot;rules&quot; : [ {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;multiDocumentGenerationValue&quot;,
            &quot;data&quot; : &quot;false&quot;
          }, {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;multiDocumentGenerationValue&quot;,
            &quot;data&quot; : &quot;&quot;
          } ]
        }
      }, {
        &quot;group&quot; : {
          &quot;operator&quot; : &quot;OR&quot;,
          &quot;rules&quot; : [ {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;TemplateType&quot;,
            &quot;data&quot; : &quot;Microsoft Powerpoint .PPTX Template&quot;
          }, {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;TemplateType&quot;,
            &quot;data&quot; : &quot;Microsoft Word .DOCX Template&quot;
          } ]
        }
      } ]
    }
  },
  &quot;accessibleInFutureSteps&quot; : false,
  &quot;label&quot; : &quot;Proposal&quot;,
  &quot;documentType&quot; : &quot;word&quot;,
  &quot;disOnTplt&quot; : false
}</propertySetConfig>
            <sequenceNumber>1.0</sequenceNumber>
            <type>Input Block</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>MultiGenerateDocumentWordPPT</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
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
  &quot;HTMLTemplateId&quot; : &quot;object-multi-document-creation-docx-template&quot;,
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;multiDocumentGenerationValue&quot;,
        &quot;data&quot; : &quot;true&quot;
      }, {
        &quot;group&quot; : {
          &quot;operator&quot; : &quot;OR&quot;,
          &quot;rules&quot; : [ {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;TemplateType&quot;,
            &quot;data&quot; : &quot;Microsoft Word .DOCX Template&quot;
          }, {
            &quot;condition&quot; : &quot;=&quot;,
            &quot;field&quot; : &quot;TemplateType&quot;,
            &quot;data&quot; : &quot;Microsoft Powerpoint .PPTX Template&quot;
          } ]
        }
      } ]
    }
  },
  &quot;accessibleInFutureSteps&quot; : false,
  &quot;label&quot; : &quot;Proposal&quot;,
  &quot;documentType&quot; : &quot;word&quot;,
  &quot;disOnTplt&quot; : false
}</propertySetConfig>
            <sequenceNumber>2.0</sequenceNumber>
            <type>Input Block</type>
        </childElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>Generate Document</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
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
  &quot;show&quot; : null,
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;HTMLTemplateId&quot; : &quot;&quot;,
  &quot;label&quot; : &quot;Generate Document&quot;,
  &quot;allowSaveForLater&quot; : true,
  &quot;errorMessage&quot; : {
    &quot;custom&quot; : [ ],
    &quot;default&quot; : null
  }
}</propertySetConfig>
        <sequenceNumber>8.0</sequenceNumber>
        <type>Step</type>
    </omniProcessElements>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>GetDocumentTemplates</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;controlWidth&quot; : 12,
  &quot;bundle&quot; : &quot;GetDocumentTemplatesForType&quot;,
  &quot;dataRaptor Input Parameters&quot; : [ {
    &quot;inputParam&quot; : &quot;templateType&quot;,
    &quot;element&quot; : &quot;TemplateType&quot;
  } ],
  &quot;remoteTimeout&quot; : 30000,
  &quot;responseJSONPath&quot; : &quot;&quot;,
  &quot;responseJSONNode&quot; : &quot;&quot;,
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureGoBackLabel&quot; : &quot;Go Back&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;None&quot;,
  &quot;redirectPageName&quot; : &quot;&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;show&quot; : null,
  &quot;wpm&quot; : false,
  &quot;ssm&quot; : false,
  &quot;message&quot; : { },
  &quot;label&quot; : &quot;Get Document Templates&quot;,
  &quot;errorMessage&quot; : {
    &quot;custom&quot; : [ ],
    &quot;default&quot; : null
  },
  &quot;enableDefaultAbort&quot; : false
}</propertySetConfig>
        <sequenceNumber>3.0</sequenceNumber>
        <type>DataRaptor Extract Action</type>
    </omniProcessElements>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>GetMultiDocumentTemplates</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;controlWidth&quot; : 12,
  &quot;bundle&quot; : &quot;GetMultiDocumentTemplatesForType&quot;,
  &quot;dataRaptor Input Parameters&quot; : [ {
    &quot;inputParam&quot; : &quot;templateType&quot;,
    &quot;element&quot; : &quot;TemplateType&quot;
  } ],
  &quot;remoteTimeout&quot; : 30000,
  &quot;responseJSONPath&quot; : &quot;&quot;,
  &quot;responseJSONNode&quot; : &quot;&quot;,
  &quot;inProgressMessage&quot; : &quot;In Progress&quot;,
  &quot;postMessage&quot; : &quot;Done&quot;,
  &quot;failureNextLabel&quot; : &quot;Continue&quot;,
  &quot;failureAbortLabel&quot; : &quot;Abort&quot;,
  &quot;failureGoBackLabel&quot; : &quot;Go Back&quot;,
  &quot;failureAbortMessage&quot; : &quot;Are you sure?&quot;,
  &quot;validationRequired&quot; : &quot;None&quot;,
  &quot;redirectPageName&quot; : &quot;&quot;,
  &quot;redirectTemplateUrl&quot; : &quot;vlcAcknowledge.html&quot;,
  &quot;redirectNextLabel&quot; : &quot;Next&quot;,
  &quot;redirectNextWidth&quot; : 3,
  &quot;redirectPreviousLabel&quot; : &quot;Previous&quot;,
  &quot;redirectPreviousWidth&quot; : 3,
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;show&quot; : null,
  &quot;HTMLTemplateId&quot; : &quot;&quot;,
  &quot;wpm&quot; : false,
  &quot;ssm&quot; : false,
  &quot;message&quot; : { },
  &quot;label&quot; : &quot;Get Document Templates&quot;,
  &quot;errorMessage&quot; : {
    &quot;custom&quot; : [ ],
    &quot;default&quot; : null
  },
  &quot;enableDefaultAbort&quot; : false
}</propertySetConfig>
        <sequenceNumber>4.0</sequenceNumber>
        <type>DataRaptor Extract Action</type>
    </omniProcessElements>
    <omniProcessElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>DocumentGenerationMode</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;controlWidth&quot; : 12,
  &quot;showInputWidth&quot; : false,
  &quot;inputWidth&quot; : 12,
  &quot;required&quot; : false,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;repeatLimit&quot; : null,
  &quot;readOnly&quot; : false,
  &quot;defaultValue&quot; : &quot;singleDocumentGeneration&quot;,
  &quot;help&quot; : false,
  &quot;helpText&quot; : &quot;&quot;,
  &quot;options&quot; : [ {
    &quot;name&quot; : &quot;singleDocumentGeneration&quot;,
    &quot;value&quot; : &quot;Single Document Generation&quot;
  }, {
    &quot;name&quot; : &quot;multiDocumentGeneration&quot;,
    &quot;value&quot; : &quot;Multi Document Generation&quot;
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
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;OR&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;TemplateType&quot;,
        &quot;data&quot; : &quot;Microsoft Word .DOCX Template&quot;
      }, {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;TemplateType&quot;,
        &quot;data&quot; : &quot;Microsoft Powerpoint .PPTX Template&quot;
      } ]
    }
  },
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;accessibleInFutureSteps&quot; : false,
  &quot;HTMLTemplateId&quot; : &quot;&quot;,
  &quot;hide&quot; : false,
  &quot;disOnTplt&quot; : false,
  &quot;label&quot; : &quot;Select the Document Generation Mode&quot;
}</propertySetConfig>
            <sequenceNumber>2.0</sequenceNumber>
            <type>Select</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>multiDocumentGenerationValue</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;controlWidth&quot; : 12,
  &quot;showInputWidth&quot; : false,
  &quot;inputWidth&quot; : 12,
  &quot;expression&quot; : &quot;IF(%TemplateType%==&apos;Vlocity Web Template&apos;, false, IF(%DocumentGenerationMode%==&apos;multiDocumentGeneration&apos;,true, false))&quot;,
  &quot;hide&quot; : true,
  &quot;show&quot; : null,
  &quot;dataType&quot; : null,
  &quot;hideGroupSep&quot; : false,
  &quot;dateFormat&quot; : &quot;MM-dd-yyyy&quot;,
  &quot;HTMLTemplateId&quot; : &quot;&quot;,
  &quot;disOnTplt&quot; : false,
  &quot;label&quot; : &quot;Multi Document Generation Value&quot;
}</propertySetConfig>
            <sequenceNumber>3.0</sequenceNumber>
            <type>Formula</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>TemplateType</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
  &quot;controlWidth&quot; : 12,
  &quot;showInputWidth&quot; : false,
  &quot;inputWidth&quot; : 12,
  &quot;required&quot; : false,
  &quot;repeat&quot; : false,
  &quot;repeatClone&quot; : false,
  &quot;readOnly&quot; : false,
  &quot;defaultValue&quot; : &quot;Vlocity Web Template&quot;,
  &quot;help&quot; : false,
  &quot;helpText&quot; : &quot;&quot;,
  &quot;options&quot; : [ {
    &quot;name&quot; : &quot;Vlocity Web Template&quot;,
    &quot;value&quot; : &quot;Vlocity Web Template&quot;
  }, {
    &quot;name&quot; : &quot;Microsoft Word .DOCX Template&quot;,
    &quot;value&quot; : &quot;Microsoft Word .DOCX Template&quot;
  }, {
    &quot;name&quot; : &quot;Microsoft Powerpoint .PPTX Template&quot;,
    &quot;value&quot; : &quot;Microsoft Powerpoint .PPTX Template&quot;
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
  &quot;show&quot; : null,
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;accessibleInFutureSteps&quot; : false,
  &quot;HTMLTemplateId&quot; : &quot;&quot;,
  &quot;hide&quot; : false,
  &quot;disOnTplt&quot; : false,
  &quot;label&quot; : &quot;Template Types&quot;
}</propertySetConfig>
            <sequenceNumber>1.0</sequenceNumber>
            <type>Select</type>
        </childElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>Pick a Template Type</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;OR&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;inTest&quot;,
        &quot;data&quot; : &quot;false&quot;
      }, {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;inTest&quot;,
        &quot;data&quot; : null
      } ]
    }
  },
  &quot;label&quot; : &quot;Pick a Template Type&quot;,
  &quot;disOnTplt&quot; : false,
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
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;HTMLTemplateId&quot; : &quot;&quot;
}</propertySetConfig>
        <sequenceNumber>2.0</sequenceNumber>
        <type>Step</type>
    </omniProcessElements>
    <omniProcessElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>DocumentTemplate</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
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
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;multiDocumentGenerationValue&quot;,
        &quot;data&quot; : &quot;false&quot;
      } ]
    }
  },
  &quot;accessibleInFutureSteps&quot; : true,
  &quot;label&quot; : &quot;Templates&quot;
}</propertySetConfig>
            <sequenceNumber>1.0</sequenceNumber>
            <type>Selectable Items</type>
        </childElements>
        <childElements>
            <isActive>true</isActive>
            <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
            <level>1.0</level>
            <name>MultiDocumentTemplate</name>
            <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
            <propertySetConfig>{
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
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;AND&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;multiDocumentGenerationValue&quot;,
        &quot;data&quot; : &quot;true&quot;
      } ]
    }
  },
  &quot;accessibleInFutureSteps&quot; : true,
  &quot;label&quot; : &quot;Templates&quot;
}</propertySetConfig>
            <sequenceNumber>2.0</sequenceNumber>
            <type>Selectable Items</type>
        </childElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>PickTemplate</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
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
  &quot;show&quot; : {
    &quot;group&quot; : {
      &quot;operator&quot; : &quot;OR&quot;,
      &quot;rules&quot; : [ {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;inTest&quot;,
        &quot;data&quot; : &quot;false&quot;
      }, {
        &quot;condition&quot; : &quot;=&quot;,
        &quot;field&quot; : &quot;inTest&quot;,
        &quot;data&quot; : null
      } ]
    }
  },
  &quot;conditionType&quot; : &quot;Hide if False&quot;,
  &quot;label&quot; : &quot;Pick a template&quot;,
  &quot;allowSaveForLater&quot; : true,
  &quot;errorMessage&quot; : {
    &quot;custom&quot; : [ ],
    &quot;default&quot; : null
  }
}</propertySetConfig>
        <sequenceNumber>5.0</sequenceNumber>
        <type>Step</type>
    </omniProcessElements>
    <omniProcessElements>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>Set Values</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;controlWidth&quot; : 12,
  &quot;validationRequired&quot; : &quot;None&quot;,
  &quot;elementValueMap&quot; : {
    &quot;templateId&quot; : &quot;=IF(%templateId% == null, %PickTemplate|1:DocumentTemplate|1:Id%, %templateId%)&quot;,
    &quot;qId&quot; : &quot;=%EnterObject:ObjectId%&quot;,
    &quot;templateType&quot; : &quot;=%TemplateType%&quot;,
    &quot;contextId&quot; : &quot;=%EnterObject:ObjectId%&quot;,
    &quot;attachFileFormat&quot; : &quot;docx&quot;,
    &quot;generateMultipleDocument&quot; : &quot;=%multiDocumentGenerationValue%&quot;,
    &quot;documentType&quot; : &quot;all&quot;,
    &quot;pdfViewer&quot; : &quot;=IF(%multiDocumentGenerationValue% == true, &apos;none&apos;, &apos;VlocityClientSideViewer&apos;)&quot;,
    &quot;displayTitle&quot; : &quot;&quot;,
    &quot;inTest&quot; : &quot;=IF(OR(%inTest% == null, %inTest%==&apos;&apos;), false, %inTest%)&quot;
  },
  &quot;showPersistentComponent&quot; : [ false, false ],
  &quot;show&quot; : null,
  &quot;HTMLTemplateId&quot; : &quot;&quot;,
  &quot;wpm&quot; : false,
  &quot;ssm&quot; : false,
  &quot;message&quot; : { },
  &quot;label&quot; : null
}</propertySetConfig>
        <sequenceNumber>6.0</sequenceNumber>
        <type>Set Values</type>
    </omniProcessElements>
    <omniProcessType>OmniScript</omniProcessType>
    <propertySetConfig>{&quot;persistentComponent&quot;:[{&quot;render&quot;:false,&quot;label&quot;:&quot;&quot;,&quot;remoteClass&quot;:&quot;&quot;,&quot;remoteMethod&quot;:&quot;&quot;,&quot;remoteTimeout&quot;:30000,&quot;remoteOptions&quot;:{&quot;preTransformBundle&quot;:&quot;&quot;,&quot;postTransformBundle&quot;:&quot;&quot;},&quot;preTransformBundle&quot;:&quot;&quot;,&quot;postTransformBundle&quot;:&quot;&quot;,&quot;sendJSONPath&quot;:&quot;&quot;,&quot;sendJSONNode&quot;:&quot;&quot;,&quot;responseJSONPath&quot;:&quot;&quot;,&quot;responseJSONNode&quot;:&quot;&quot;,&quot;id&quot;:&quot;vlcCart&quot;,&quot;itemsKey&quot;:&quot;cartItems&quot;,&quot;modalConfigurationSetting&quot;:{&quot;modalHTMLTemplateId&quot;:&quot;vlcProductConfig.html&quot;,&quot;modalController&quot;:&quot;ModalProductCtrl&quot;,&quot;modalSize&quot;:&quot;lg&quot;}},{&quot;render&quot;:false,&quot;label&quot;:&quot;&quot;,&quot;remoteClass&quot;:&quot;&quot;,&quot;remoteMethod&quot;:&quot;&quot;,&quot;remoteTimeout&quot;:30000,&quot;remoteOptions&quot;:{&quot;preTransformBundle&quot;:&quot;&quot;,&quot;postTransformBundle&quot;:&quot;&quot;},&quot;preTransformBundle&quot;:&quot;&quot;,&quot;postTransformBundle&quot;:&quot;&quot;,&quot;id&quot;:&quot;vlcKnowledge&quot;,&quot;itemsKey&quot;:&quot;knowledgeItems&quot;,&quot;modalConfigurationSetting&quot;:{&quot;modalHTMLTemplateId&quot;:&quot;&quot;,&quot;modalController&quot;:&quot;&quot;,&quot;modalSize&quot;:&quot;lg&quot;}}],&quot;allowSaveForLater&quot;:true,&quot;saveNameTemplate&quot;:null,&quot;saveExpireInDays&quot;:null,&quot;saveForLaterRedirectPageName&quot;:&quot;sflRedirect&quot;,&quot;saveForLaterRedirectTemplateUrl&quot;:&quot;vlcSaveForLaterAcknowledge.html&quot;,&quot;saveContentEncoded&quot;:false,&quot;saveObjectId&quot;:&quot;%ContextId%&quot;,&quot;saveURLPatterns&quot;:{},&quot;autoSaveOnStepNext&quot;:false,&quot;elementTypeToHTMLTemplateMapping&quot;:{},&quot;seedDataJSON&quot;:{},&quot;trackingCustomData&quot;:{},&quot;enableKnowledge&quot;:false,&quot;bLK&quot;:false,&quot;lkObjName&quot;:null,&quot;knowledgeArticleTypeQueryFieldsMap&quot;:{},&quot;timeTracking&quot;:true,&quot;hideStepChart&quot;:false,&quot;visualforcePagesAvailableInPreview&quot;:{},&quot;cancelType&quot;:&quot;SObject&quot;,&quot;allowCancel&quot;:true,&quot;cancelSource&quot;:&quot;%ContextId%&quot;,&quot;cancelRedirectPageName&quot;:&quot;OmniScriptCancelled&quot;,&quot;cancelRedirectTemplateUrl&quot;:&quot;vlcCancelled.html&quot;,&quot;consoleTabLabel&quot;:&quot;New&quot;,&quot;wpm&quot;:false,&quot;ssm&quot;:false,&quot;message&quot;:{},&quot;autoFocus&quot;:false,&quot;currencyCode&quot;:&quot;&quot;,&quot;showInputWidth&quot;:false,&quot;rtpSeed&quot;:false,&quot;consoleTabTitle&quot;:null,&quot;consoleTabIcon&quot;:&quot;custom:custom18&quot;,&quot;errorMessage&quot;:{&quot;custom&quot;:[]},&quot;disableUnloadWarn&quot;:true,&quot;includeCustomization&quot;:true,&quot;customPages&quot;:{&quot;ContractPreview&quot;:&quot;vlocity_cmt__ContractAmendmentPreview?verticalMode=true&quot;}}</propertySetConfig>
    <subType>Generation</subType>
    <type>GenericDocument</type>
    <uniqueName>GenericDocument_Generation_English_1</uniqueName>
    <versionNumber>1.0</versionNumber>
    <webComponentKey>b7b34eec-b5a8-d9cb-e0fe-2bc463d8ed95</webComponentKey>
</OmniScript>
