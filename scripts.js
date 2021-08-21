function timeupdate(){ //updates time in upper right upper corner
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var today = new Date();
    var hrs="";
    var part="";

    if((today.getHours())>12){
        hrs= ((today.getHours()) - 12);
        part="PM";
    }
    else if((today.getHours())==0){
        hrs = "12";
        part="AM";
    }
    else if((today.getHours())<12){
        hrs = (today.getHours());
        part="AM";
    }
    else if((today.getHours())==12){
        hrs = 12;
        part="PM"
    }
    var time = "Aug " + today.getDate() + ", " + hrs + ":" + ('0'+today.getMinutes()).slice(-2) + part;

    document.getElementById('dateandtime').innerHTML=time;

    setTimeout("timeupdate()",100);
}

function boot(){ //for showing the loading page and hiding it 
    document.getElementById('loaded').style.display="block";
    document.addEventListener("click",function disp(){
        (document.getElementById('boot')).style.display="none";
        (document.getElementById('os')).style.display="block";
        
        var audio = new Audio('images/bg_music.ogg');
        audio.loop=true;
        audio.playbackRate=0.8;
        audio.volume=0.5;
        audio.play();

        
    });
    document.addEventListener("keypress",function disp(){
        (document.getElementById('boot')).style.display="none";
        (document.getElementById('os')).style.display="block";
        
        var audio = new Audio('images/bg_music.ogg');
        audio.loop=true;
        audio.playbackRate=0.8;
        audio.volume=0.5;
        audio.play();
    });
}
setTimeout('boot()',4000);

function buttonoff(hid){
    document.getElementById(hid).style.visibility="hidden";
}
function buttonon(vis){
    document.getElementById(vis+"mod").style.visibility="visible";
}

function abouton(){
    document.getElementById("about").style.visibility="visible";
}

var ful = document.documentElement;
function openFullscreen() {

  if (ful.requestFullscreen) {
    ful.requestFullscreen();
  }  
  else if (ful.msRequestFullscreen) { 
    ful.msRequestFullscreen();
  }  
  else if (ful.webkitRequestFullscreen) { 
    ful.webkitRequestFullscreen();
  }

}

function restart(){
  location.reload();
}

function f1(){
    document.getElementById('homework').style.display="block";
}

$( function() {
    $( "#about" ).draggable({handle: ".header" });
  } ); 
$( function() {
    $( "#readmemod" ).draggable({handle: ".header" });
  } );
$( function() {
    $( "#youtubemod" ).draggable({handle: ".header" });
  } );
$( function() {
    $( "#gamemod" ).draggable({handle: ".header" });
  } );
  $( function() {
    $( "#achievemod" ).draggable({handle: ".header" });
  } );


function homework(){
  document.getElementById("homeworkmod").style.display="block";
  setTimeout(function(){
    document.getElementById("homeworkmod").style.display="none";
  },2000);
}
