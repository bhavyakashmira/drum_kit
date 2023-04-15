var numd = document.querySelectorAll(".drum").length;
for(var i=0;i<numd;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
         var button = this.innerHTML;
         makesound(button);
});
}

document.addEventListener("keypress",function(event){

   makesound(event.key);
});

function makesound(key){

   switch(key){
      case "w":
          var  sou = new Audio("sounds/crash.mp3");
            sou.play();
            break;
       case "a":
          var  sou = new Audio("sounds/kick-bass.mp3");
            sou.play();  
            break;    
      case "s":
         var  sou = new Audio("sounds/snare.mp3");
           sou.play();
           break;
      case "d":
          var  sou = new Audio("sounds/tom-1.mp3");
           sou.play();
           break;
      case "j":
         var  sou = new Audio("sounds/tom-2.mp3");
          sou.play(); 
          break;
       case "k":
           var  sou = new Audio("sounds/tom-3.mp3");
           sou.play();  
           break;      
       case "l":
          var  sou = new Audio("sounds/tom-4.mp3");
           sou.play();  
           break;
      default : console.log()
       }
}



