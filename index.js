
/* NAVBAR OVERLAY */

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
    
       }


console.log("5200");

/*NAVBAR OVERLAY fin*/


/* MODAL */

var modal=document.getElementById('myModal');
var btn=document.getElementById('myBtn');
var span=document.getElementsByClassName('close')[0];
btn.onclick=function(){
    
    modal.style.display= "block";
    
}

span.onclick=function(){
    
    modal.style.display= "none";
}

window.onclick=function(){
    
    if(event.target= "modal"){
        modal.style.display= "none";
    }
}    

/* MODAL FIN  */

/*  POPOVER */

   $(function(){
      $(".myPopover").popover();
   });

/*TOOLTIP */

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



