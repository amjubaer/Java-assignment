function feetToMile(feet) {
              
     var mile = feet/5280;
     return mile;
}
var finalResult = feetToMile(5280);
console.log(finalResult);



function woodCalculator(chir, table, bed){
     var chirCount = chir * 1;
     var tableCount = table * 3;
     var bedCount = bed * 5;
     var total = chirCount + tableCount + bedCount;
     return total;
}
var woodResult = woodCalculator(2, 2, 2);
console.log(woodResult);





function bricksCalculator (floorNumber){
     if(floorNumber <=10){
          var floorheight1 = floorNumber * 15;
          var bricks1 =floorheight1 * 1000;
          return bricks1;
     }
     else if(floorNumber > 10 && floorNumber <= 20){
          var floorheight2 = floorNumber * 12;
          var bricks2 =floorheight2 * 1000;
          return bricks2;
     }
     else if(floorNumber > 20){
          var floorheight3 = floorNumber * 10;
          var bricks3 = floorheight3 * 1000;
          return bricks3;
     }
}
var finalResult = bricksCalculator();
console.log(finalResult);






function tinyfriend(name){
     var smaller = name[0];
     for(var i = 0; i < name.length; i++){
          var currerntName = name[i];
          if(currerntName.length < smaller.length){
               smaller = currerntName;
          }
     }
    return smaller;       
}
var smallerName = tinyfriend(['samal', 'java', 'jubaer', 'koli', 'kalam', 'joy']);
console.log(smallerName);