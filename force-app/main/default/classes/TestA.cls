public class TestA {
    
    public void test(){
        List<String> fields = vlocity_cmt.DBHelper.getFields('QuoteLineItem');
        
        for(String f: fields){
            if(f == 'CustomProductName'){
                System.debug('found');
            }
        }
        
        String queryString = 'SELECT ' + String.join(fields, ',') + ' FROM QuoteLineItem limit 1';
        
        Database.query(queryString);
        
        System.debug('completed');
    }

}