var totalAmnt = 600;

if(totalAmnt >= 200){
    var discount = (totalAmnt*10)/100
    if(totalAmnt <= 500){
        console.log(`You will get ${discount} taka bonus`)
    }
    else if(totalAmnt > 500){
        var discnt = (totalAmnt*20)/100
        console.log(`You will get ${discnt} taka bonus`)
    }

}
 
else{console.log("Sorry you have no discount offer")}
