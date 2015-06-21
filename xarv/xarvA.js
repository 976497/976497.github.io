window.addEventListener('load',JFarvA,false);
window.addEventListener('load',JFarvB,false);

function JFarvA(){
 JtuAa=document.getElementById('DIarvA');
 JAstrA='2D Animations (2014):1;\
3D Graphics (2013):2;\
3D Animations (2012):1;\
Ajax (2012):1;\
Algorithmic Programming (2015):2;\
API (2012):2;\
ARM (2014):1;\
Automation (2015):2;\
Blender (2013):2;\
Business Cards (2012):1;\
Data Entry (2014):3;\
Data Mining (2012):2;\
Data Processing (2015):3;\
Copywriting (2012):1;\
CSS (2015):2;\
GIMP (2015):2;\
Graphic Design (2015):2;\
Hardware (2012):1;\
HTML5 (2015):3;\
JavaScript (2015):2;\
JQuery (2012):1;\
Linux (2015):2;\
Logo Design (2015):2;\
MySQL (2013):1;\
Optimisation (2012):1;\
PayPal (2012):1;\
Photo Editing (2012):1;\
PHP (2015):3;\
Procedural Programming (2015):2;\
Python (2013):1;\
Regular Expressions (2014):2;\
Research (2012):2;\
RPi2 (2014):1;\
ShoutBox (2015):2;\
SQL (2013):1;\
SVG (2015):2;\
Translations EN-PL (2015):3;\
User Interface/IA (2015):2;\
Vector Graphics (2015):1;\
Web Design (2015):2;\
Web Search (2015):3;\
Web Scraping (2015):2';
 JApliA=JAstrA.split(';');
 JVoutA='';
 JVdluA=700;
 i=0;
 while(i<JApliA.length){
  JVexA=JApliA[i].split(':');
  JVproA=Math.round(100*JVexA[1]/3);
  JVpixA=Math.round(JVdluA*JVproA/100);
  if(JVexA[1]==1){JVinfA='SATISFACTORY';}
  else if(JVexA[1]==2){JVinfA='SKILLED';}
  else{JVinfA='FLUENT';}
  JVstyA='<div class="DCprgBa" style="width:'+JVdluA+'px">&nbsp;</div>';
  JVstyB='<div class="DCprgBb" style="width:'+JVpixA+'px">&nbsp;</div>';
  JVstyC='<div class="DCprgBc">'+JVinfA+'</div>&nbsp;';
  JVoutA+='<tr><td>'+JVexA[0]+'</td><td>'+JVstyA+JVstyB+JVstyC+'</td></tr>';
  i++;
 }
 JtuAa.innerHTML='<table>'+JVoutA+'</table>';
}

function JFarvB(){
 JtuAb=document.getElementById('DIarvB');
 JAstrB='AI;\
Automation;\
Linux;\
Minimalism;\
Open Source;\
Research;\
Robotics;\
Simulations;\
UI/IA;\
Web Scraping';
 JApliB=JAstrB.split(';');
 JVoutB='<b class="BCxpdA">'+JApliB[0]+'</b>';
 i=1;
 while(i<JApliB.length){
  JVoutB+=', <b class="BCxpdA">'+JApliB[i]+'</b>';
  i++;
 }
 JtuAb.innerHTML=JVoutB;
}
