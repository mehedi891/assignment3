// https://github.com/mehedi891/assignment3


// Call a function
function kilometerToMeter  (kilometer){
    //If the value is negative then its convert it to positive
    kilometer = Math.abs(kilometer);
    var meter = kilometer * 1000;
    return meter;

}




// call a function
function budgetCalculator(watch, smartPhone, laptop ){
    //value of watch,smartphone and laptop can't be negative and float type
        watch = Math.abs(watch);
        smartPhone = Math.abs(smartPhone);
        laptop = Math.abs(laptop);
        watch = parseInt(watch);
        smartPhone = parseInt(smartPhone);
        laptop = parseInt(laptop);
        //per watch price 50
        var totalWatch = 50 * watch;
        //per smartphone price 100
        var totalSmartPhone = 100 * smartPhone;
        //per laptop price 500
        var totalLaptop = 500 * laptop;
        //calculate total cost
        var totalCost = totalWatch + totalSmartPhone + totalLaptop;
        return totalCost;
}


function hotelCost(perDay){
    //value cant be negative or float
    perDay = parseInt(perDay);
    perDay = Math.abs(perDay);
    var totalCost = 0;
    if(perDay<=10){
        totalCost = perDay * 100;
    }
    else if(perDay<=20){
        var first10Days = 10 * 100;
        var remainDays = perDay - 10;
        var remainDaysCost = remainDays * 80;
        totalCost = first10Days + remainDaysCost;
    }
    else{
       var first10Days = 10 * 100;
       var second10Days = 10 * 80;
       var remainDays = perDay - 20;
       var remainDaysCost = remainDays * 50;
       totalCost = first10Days + second10Days + remainDaysCost;
    }
    return totalCost;
   }
  

 //call function megaFriend and parameter 'array'
function megaFriend(array){
    var length=0;
    var longest="";
    for(var i=0;i<array.length;i++){
        //apply condition
      if(array[i].length>length){
      length=array[i].length;
      longest=array[i];
      }
    }
     return longest;
    }