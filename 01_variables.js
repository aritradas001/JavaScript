const account_id = 1006
let account_email = "laxmichitfund@email.com"
var account_password = "0123"
account_city = "Kolkata"
let account_state = "West Bengal"

//account_id = 100 // not allowed
console.log(account_id);

console.table([account_email, account_password,
 account_city, account_state]);
/* not to 
use var because of issue in block scope and functional scope. 
*/