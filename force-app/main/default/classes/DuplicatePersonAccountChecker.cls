public class DuplicatePersonAccountChecker{
    @AuraEnabled(cacheable=false)
   	public static Boolean hasDuplicatePersonAccount(Account acc){
        System.debug('DuplicatePersonAccountChecker: hasDuplicatePersonAccount called');
        Id personAccRecTypeId = [SELECT Name , Id FROM RecordType WHERE SobjectType = 'Account' AND Name = 'Person Account' LIMIT 1].Id;
        Account acc2 = new Account(
          	FirstName = acc.FirstName,
            LastName = acc.LastName,
            Phone = acc.Phone,
            RecordTypeId = personAccRecTypeId
        );
        try {
            Datacloud.FindDuplicatesResult[] results = Datacloud.FindDuplicates.findDuplicates(new List<Account>{acc2});
            for (Datacloud.FindDuplicatesResult findDupeResult : results) {
                for (Datacloud.DuplicateResult dupeResult : findDupeResult.getDuplicateResults()) {
                    List<Datacloud.MatchResult> matchResults = dupeResult.getMatchResults();
                    for (Datacloud.MatchResult matchResult : matchResults) {
                        Integer matchSize = matchResult.getSize();
                        System.debug('MatchResult Size: ' + matchSize);
                        if (matchSize > 0) {
                            System.debug('Duplicate found with MatchResult: ' + matchResult);
                            return true;
                        }
                    }
                }
            }
            return false;
        }catch (Exception e){
            System.debug('Error checking duplicates: ' + e.getMessage());
            return false;
        }
    }
}

/*global virtual without sharing class DuplicatePersonAccountChecker implements  Callable {
    global Object call(String action, Map<String, Object> args) {
        Map<String, Object> input = (Map<String, Object>)args.get('input');
        Map<String, Object> output = (Map<String, Object>)args.get('output');
        Map<String, Object> options = (Map<String, Object>)args.get('options');//Ip ke remote actions se (Remote Options me key value me) data bhejo to wo options me jata aur os ke remote action se(extra payload me) data bhejo to wo input me jata hai
        
        if(action == 'hasDuplicatePersonAccount'){
            
			//String firstName = (String)input.get('firstName') != NULL ? (String)input.get('firstName') : '';  
            //String lastName = (String)input.get('lastName') != NULL ? (String)input.get('lastName') : ''; 
            //String phone = (String)input.get('phone') != NULL ? (String)input.get('phone') : ''; 
			
            String firstName = (String)options.get('firstName') != NULL ? (String)options.get('firstName') : '';  
            String lastName = (String)options.get('lastName') != NULL ? (String)options.get('lastName') : ''; 
            String phone = (String)options.get('phone') != NULL ? (String)options.get('phone') : ''; 
            Id personAccRecTypeId = [SELECT Name , Id FROM RecordType WHERE SobjectType = 'Account' AND Name = 'Person Account' LIMIT 1].Id;
            Account acc = new Account(
              	FirstName = firstName,
                LastName = lastName,
                Phone = phone,
                RecordTypeId = personAccRecTypeId
            );
            System.debug('acc : ' + acc);
            output.put('isDuplicateAccount', hasDuplicatePersonAccount(acc));
            return true;
        }
        return null;
    }
   public static Boolean hasDuplicatePersonAccount(Account acc){
        try {
            Datacloud.FindDuplicatesResult[] results = Datacloud.FindDuplicates.findDuplicates(new List<Account>{acc});
            for (Datacloud.FindDuplicatesResult findDupeResult : results) {
                for (Datacloud.DuplicateResult dupeResult : findDupeResult.getDuplicateResults()) {
                    List<Datacloud.MatchResult> matchResults = dupeResult.getMatchResults();
                    for (Datacloud.MatchResult matchResult : matchResults) {
                        Integer matchSize = matchResult.getSize();
                        System.debug('MatchResult Size: ' + matchSize);
                        if (matchSize > 0) {
                            System.debug('Duplicate found with MatchResult: ' + matchResult);
                            return true;
                        }
                    }
                }
            }
            return false;
        }catch (Exception e){
            System.debug('Error checking duplicates: ' + e.getMessage());
            return false;
        }
    }
}
*/





/*global virtual without sharing class DuplicatePersonAccountChecker implements  Callable {
    global Object call(String action, Map<String, Object> args) {
        Map<String, Object> input = (Map<String, Object>)args.get('input');
        Map<String, Object> output = (Map<String, Object>)args.get('output');
        Map<String, Object> options = (Map<String, Object>)args.get('options');
        
        if(action == 'hasDuplicatePersonAccount'){
            String firstName = (String)input.get('firstName') != NULL ? (String)input.get('firstName') : '';  
            String lastName = (String)input.get('lastName') != NULL ? (String)input.get('lastName') : ''; 
            String phone = (String)input.get('phone') != NULL ? (String)input.get('phone') : ''; 
            Id personAccRecTypeId = [SELECT Name , Id FROM RecordType WHERE SobjectType = 'Account' AND Name = 'Person Account' LIMIT 1].Id;
            Account acc = new Account(
              	FirstName = firstName,
                LastName = lastName,
                Phone = phone,
                RecordTypeId = personAccRecTypeId
            );
            System.debug('acc : ' + acc);
            output.put('isDuplicateAccount', hasDuplicatePersonAccount(acc));
            return true;
        }
        return null;
    }
   public static Boolean hasDuplicatePersonAccount(Account acc){
        try {
            Datacloud.FindDuplicatesResult[] results = Datacloud.FindDuplicates.findDuplicates(new List<Account>{acc});
            for (Datacloud.FindDuplicatesResult findDupeResult : results) {
                for (Datacloud.DuplicateResult dupeResult : findDupeResult.getDuplicateResults()) {
                    List<Datacloud.MatchResult> matchResults = dupeResult.getMatchResults();
                    for (Datacloud.MatchResult matchResult : matchResults) {
                        Integer matchSize = matchResult.getSize();
                        System.debug('MatchResult Size: ' + matchSize);
                        if (matchSize > 0) {
                            System.debug('Duplicate found with MatchResult: ' + matchResult);
                            return true;
                        }
                    }
                }
            }
            return false;
        }catch (Exception e){
            System.debug('Error checking duplicates: ' + e.getMessage());
            return false;
        }
    }
}*/


































/*
global class DuplicatePersonAccountChecker implements OmniStudio.VlocityOpenInterface {
    global Boolean invokeMethod(String methodName, Map<String,Object> inputMap, Map<String,Object> outMap, Map<String,Object> options) {
      	Boolean result = false;	
      	try{
            if(methodName.equals('hasDuplicatePersonAccount')){  
             	String firstName = (String)inputMap.get('firstName') != NULL ? (String)inputMap.get('firstName') : '';  
             	String lastName = (String)inputMap.get('lastName') != NULL ? (String)inputMap.get('lastName') : ''; 
             	String phone = (String)inputMap.get('phone') != NULL ? (String)inputMap.get('phone') : ''; 
                Id personAccRecTypeId = [SELECT Name , Id FROM RecordType WHERE SobjectType = 'Account' AND Name = 'Person Account' LIMIT 1].Id;
                Account acc = new Account(
                	FirstName = firstName,
                    LastName = lastName,
                    Phone = phone,
                    RecordTypeId = personAccRecTypeId
                );
            	System.debug('acc : ' + acc);
                outMap.put('isDuplicateAccount', hasDuplicatePersonAccount(acc));
                return true;
            }                        
			
      	}catch(Exception e){
        	return result;
      	}
       	return result;
   }
   public static Boolean hasDuplicatePersonAccount(Account acc){
        try {
            Datacloud.FindDuplicatesResult[] results = Datacloud.FindDuplicates.findDuplicates(new List<Account>{acc});
            for (Datacloud.FindDuplicatesResult findDupeResult : results) {
                for (Datacloud.DuplicateResult dupeResult : findDupeResult.getDuplicateResults()) {
                    List<Datacloud.MatchResult> matchResults = dupeResult.getMatchResults();
                    for (Datacloud.MatchResult matchResult : matchResults) {
                        Integer matchSize = matchResult.getSize();
                        System.debug('MatchResult Size: ' + matchSize);
                        if (matchSize > 0) {
                            System.debug('Duplicate found with MatchResult: ' + matchResult);
                            return true;
                        }
                    }
                }
            }
            return false;
        }catch (Exception e){
            System.debug('Error checking duplicates: ' + e.getMessage());
            return false;
        }
    }
}*/