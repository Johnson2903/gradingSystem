
var a="Excenllent";
var b="Very Good";
var c="Good";
var d="pass";
var e="fail";
var f="out of range";



function alertMe(){
    if (score.value <= 0) {
        hid.innerHTML=f;
    }
    
   
     else if(score.value >=0 && score.value <=39 ){
        hid.innerHTML=e;
    } 

    else if  (score.value >=39 && score.value <=49){
        hid.innerHTML=d;
    } 

    else if(score.value >=49 && score.value <=59 ){
        hid.innerHTML=c;
    } 

    else if(score.value >=59 && score.value <=69 ){
        hid.innerHTML=b;
    } 
    else if(score.value >=69 && score.value <=100){
        hid.innerHTML=a;
        
    } 

  

}



 
