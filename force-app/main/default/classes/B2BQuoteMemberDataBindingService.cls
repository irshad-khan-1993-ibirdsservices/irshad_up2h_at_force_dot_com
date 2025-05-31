global with sharing class B2BQuoteMemberDataBindingService implements vlocity_cmt.VlocityOpenInterface, Callable 
{

    /*
        The method gets invoked by the IntegrationProcedure
    */
    public Object call(String action, Map<String, Object> args) 
    {
        Map<String, Object> output = (Map<String, Object>)args.get('output');
        Map<String, Object> input = (Map<String, Object>)args.get('input');
        Map<String, Object> options = (Map<String, Object>)args.get('options');
        return invokeMethod(action, input, output, options);
    }

    private static void getQuoteMemberBindingData(Map<String, Object> input, Map<String, Object> output, Map<String, Object> options){

        if(input.get('decisionTableId')== NULL || input.get('conditions') == NULL ){
            return;
        }


        Id decisionTableId = (Id)input.get('decisionTableId');

        List<Object> queryList = (List<Object>)input.get('conditions');

        ConnectApi.DecisionTableInput apiInput = new ConnectApi.DecisionTableInput();
        apiInput.conditions = new List<ConnectApi.DecisionTableCondition>();

        for(Object query : queryList){
            Map<String, Object> conditionValues = (Map<String, Object>) query;
            String value = (String) conditionValues.get('value');
            if (value==NULL || value=='') {
                continue;
            }
            ConnectApi.DecisionTableCondition condition = new ConnectApi.DecisionTableCondition();
            condition.fieldName = (String)conditionValues.get('fieldName');
            condition.value = (String)conditionValues.get('value');
            apiInput.conditions.add(condition);
        }
        ConnectApi.DecisionTableOutcome apiOutput = ConnectApi.DecisionTable.execute(decisionTableId, apiInput);

        output.put('errorCode',apiOutput.errorCode);
        output.put('errorMessage',apiOutput.errorMessage);
        List<Object> results = new List<Object>();

        for(ConnectApi.DecisionTableOutcomeItem item : apiOutput.outcomeList){
            results.add(item.values);
        }
        output.put('results',results);
        output.put('outcomeType',apiOutput.outcomeType);
        output.put('successStatus',apiOutput.successStatus);
    }

    /*
        Calls the appropriate method based on the action to be performed
    */
    public Boolean invokeMethod(String methodName, Map<String,Object> input, Map<String,Object> output, Map<String,Object> options) 
    {
        try 
        {
            if(methodName.equalsIgnoreCase('getQuoteMemberBindingData'))
            {
                getQuoteMemberBindingData(input, output, options);
                return true;
            }                
            return false;
        }
        catch (Exception ex)
        {
            System.debug('Exception thrown at invoke ' + ex.getMessage() + '\nException thrown at invoke trace ' + ex.getStackTraceString());
            throw ex;
        }
    }
}