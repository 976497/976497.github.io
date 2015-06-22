window.addEventListener('load',JFarvA,false);
window.addEventListener('load',JFarvB,false);
window.addEventListener('load',JFarvC,false);

function JFarvA(){
 JAstrA='IT freelancer;\
Company website;\
Bots;\
Data processing;\
Automation;\
Visual reports;\
Control systems;\
Constant environmental measurments;\
Progress tracking solutions;\
Robots;\
Animations;\
Personal website;\
UI/IA designer;\
IT subcontractor;\
Online checklists;\
Business Continuity System;\
Real-time reporting system;\
Cross-matching;\
Graphical effects;\
Workflows monitoring;\
Entertainment;\
Job done;\
Data collector';
 JViA=0;
 JAsplA=JAstrA.split(';');
 JVoutA='';
 function JFnxtA(){
  JVoutA='<b class="BCbafA">'+JAsplA[JViA]+'</b>';
  $(".DIbafA").html(JVoutA).fadeIn(2000).delay(2000).fadeOut(2000,JFnxtA);
  if(JViA<JAsplA.length-1){JViA++;}else{JViA=0;}
 }
 JFnxtA();
}

function JFarvB(){
 JtuAb=document.getElementById('DIexpA');
 JAstrB='2D Animations (2014):1;\
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
Web Scraping (2015):2;\
WebGL (2015):1';
 JAsplB=JAstrB.split(';');
 JVoutB='';
 JVdluB=700;
 JViB=0;
 while(JViB<JAsplB.length){
  JVsplB=JAsplB[JViB].split(':');
  JVproB=Math.round(100*JVsplB[1]/3);
  JVpixB=Math.round(JVdluB*JVproB/100);
  if(JVsplB[1]==1){JVinfB='SATISFACTORY';}
  else if(JVsplB[1]==2){JVinfB='SKILLED';}
  else{JVinfB='FLUENT';}
  JVstyA='<div class="DCexpBa" style="width:'+JVdluB+'px">&nbsp;</div>';
  JVstyB='<div class="DCexpBb" style="width:'+JVpixB+'px">&nbsp;</div>';
  JVstyC='<div class="DCexpBc">'+JVinfB+'</div>';
  JVoutB+='<tr><td>'+JVsplB[0]+'</td><td>'+JVstyA+JVstyB+JVstyC+'</td></tr>';
  JViB++;
 }
 JtuAb.innerHTML='<table>'+JVoutB+'</table>';
}

function JFarvC(){
 JtuAc=document.getElementById('DIfocC');
 JAstrC='AI;\
Automation;\
Linux;\
Minimalism;\
Open Source;\
Research;\
Robotics;\
Simulations;\
UI/IA;\
Web Scraping';
 JAsplC=JAstrC.split(';');
 JVoutC='<b class="BCfocA">'+JAsplC[0]+'</b>';
 JViC=1;
 while(JViC<JAsplC.length){
  JVoutC+=', <b class="BCfocA">'+JAsplC[JViC]+'</b>';
  JViC++;
 }
 JtuAc.innerHTML=JVoutC;
}
