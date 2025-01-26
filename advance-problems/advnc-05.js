var number = 51;

if(number >= 1){
    if(number <= 100){
        if(number % 3 == 0){
            if( number % 5 == 0){
                console.log("FizzBuzz")
            }
            else{console.log("Fizz")}
        }
        else if(number % 5 == 0){
            console.log("Buzz")

    }
    else{console.log(number)}
  
    }
    else{console.log("Number must be between 1 to 100")}
}


/*if(number % 3 == 0){
    console.log("Fizz")
}else if(number % 5 == 0){
    console.log("Buzz")
}*/