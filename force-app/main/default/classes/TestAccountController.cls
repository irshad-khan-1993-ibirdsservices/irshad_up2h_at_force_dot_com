public class TestAccountController {

	public static void getAccountWithContact(){
		List<Contact> consWithAcc = [SELECT Id, Name, Account.Id, Account.Name FROM Contact WHERE AccountId != NULL];
		Map<String, Decimal> accConCountMap = new Map<String, Decimal>();
		List<Account> accs = [SELECT Id, Name FROM Account];
		for(Contact con : consWithAcc){
			if(!accConCountMap.containsKey(con.AccountId)){
				accConCountMap.put(con.AccountId, 0);
			}
			accConCountMap.put(con.AccountId, accConCountMap.get(con.AccountId) + 1);
		}
		for(Account acc : accs){
			if(accConCountMap.containsKey(acc.Id)){
				System.debug(acc.Name + '  ' + accConCountMap.get(acc.Id));
			}
		}	
	}

}