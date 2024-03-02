var score=0;
var ask=prompt("How many questions do you want?")

if (ask == 1){
var num = prompt('2+2+3')
if (num == "7") {
score++    
}
}

else if(ask == 2){
   var num = prompt('3+4') 
if (num == "7"){
    score++   
} 
 var num =  prompt('3*5')
 if(num == "15"){
score++
}
}
else if (ask == 3){
  var num = prompt('2*5')
if(num == "10") {  
    score++
}
 var num = prompt('5-2')
 if (num == "3") { 
    score++
 }
  var num =prompt('8+8')
  if(num == "16"){
   score++
  }
}
else if (ask == 4){
   var num = prompt('4+4+2')
   if(num == "10"){
    score++
 }
var num =prompt('1+1+2')
if (num == "4"){
    score++
}
 var num =prompt('4+5')
 if(num == "9"){
    score++
 }
  var num =prompt('10+20')
  if(num == "30"){
    score++
  }
}
else if(ask == 5){
  var num =prompt('30+20')
  if(num == "50"){
    score++
  }
   var num =prompt('40+5')
   if(num == "50"){
    score++
}
 var num =prompt('4*4')
 if(num == "16"){
    score++
}
    var num=prompt('2*2*2')
    if(num == "6"){
        score++
    }
    var num=prompt('50+5')
    if(num == "55"){
    score++
}
}
else if (ask == 6){
    var num=prompt('30-20')
    if(num == "10"){
    score++
    }
   var num=prompt('20-10') 
   if(num == 10)  {
    score++
   }
    var num=prompt('21+1')
if(num == "22"){
    score++
}
    var num=prompt('70+30')
    if(num == "100"){
    score++
    }
    var num=prompt('4*2')
    if (num == "8"){
    score++
    }
    var num=prompt('6*6')
    if(num == "36"){
    score++
    }
}

alert("your score is" + score)

