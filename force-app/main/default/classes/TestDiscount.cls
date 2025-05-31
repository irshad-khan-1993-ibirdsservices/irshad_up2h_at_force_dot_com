public class TestDiscount {
    public void testDis(){
        String SalesQuoteId = '0Q0Ws0000019jLVKAY';
        testDis1(SalesQuoteId);    
    }
    
    private void testDis1(Id SalesQuoteId){
        String qdSoql = vlocity_cmt.DBHelper.getBaseQuery('vlocity_cmt__QuoteDiscount__c');
        qdSoql += ' where vlocity_cmt__QuoteId__c =: SalesQuoteId';
        Database.query(qdSoql);
        /*
        for(QuoteDiscount__c qd : Database.query(qdSoql)) 
            {
                System.debug('inside loop');
            }
*/
        System.debug('completed');
    }
}