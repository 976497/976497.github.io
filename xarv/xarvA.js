window.addEventListener('load',JFarvA,false);
window.addEventListener('load',JFarvB,false);

function JFarvA(){
 JtuAa=document.getElementById('DIarvA');
 $.post("./arv/arvA.txt",function(response){
   JApliA=response.split(/\r\n|\r|\n/g);
   JVoutA='';
   JVdluA=700;
   i=0;
   while(i<JApliA.length-1){
    JVexA=JApliA[i].split(':');
    JVexB=JVexA[1].split('/');
    JVproA=Math.round(100*JVexB[0]/JVexB[1]);
    JVpixA=Math.round(JVdluA*JVproA/100);
    if(JVexB[0]==1){JVinfA='SATISFACTORY';}
    else if(JVexB[0]==2){JVinfA='SKILLED';}
    else{JVinfA='FLUENT';}
    JVstyA='<div class="DCprgBa" style="width:'+JVdluA+'px">&nbsp;</div>';
    JVstyB='<div class="DCprgBb" style="width:'+JVpixA+'px">&nbsp;</div>';
    JVstyC='<div class="DCprgBc">'+JVinfA+'</div>&nbsp;';
    JVoutA+='<tr><td>'+JVexA[0]+'</td><td>'+JVstyA+JVstyB+JVstyC+'</td></tr>';
    i++;
   }
   JtuAa.innerHTML='<table>'+JVoutA+'</table>';
 });return false;
}

function JFarvB(){
 JtuAb=document.getElementById('DIarvB');
 $.post("./arv/arvB.txt",function(response){
   JApliB=response.split(/\r\n|\r|\n/g);
   JVoutB='<b class="BCxpdA">'+JApliB[0]+'</b>';
   i=1;
   while(i<JApliB.length-1){
    JVoutB+=', <b class="BCxpdA">'+JApliB[i]+'</b>';
    i++;
   }
   JtuAb.innerHTML=JVoutB;
 });return false;
}
