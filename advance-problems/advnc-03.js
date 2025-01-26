

var accountBlnc = 10000;

var withdrawAmnt = 9000;

if(withdrawAmnt < 500){
    console.log("Minimum withdrawl is 500tk")
}else if(withdrawAmnt > accountBlnc){
    console.log("Insufficient Balance")
}else if(withdrawAmnt <= accountBlnc ){
    console.log("Transaction Successful")
}
