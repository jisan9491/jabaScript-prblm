var year = 1420;

if(year % 400 == 0){
        console.log("Leap Year");
    }else if(year % 100 == 0){
        console.log("not leap year");
    }else if(year % 4 == 0) {
        console.log("leap year");
    }
    else{console.log("not leap year")}
