<br />
<div class="DCxprA">
<p><b class="BCxpgA">EXPERIENCE</b></p>
(home gained)<br /><br />
<?php
$VdluA=700;
#$VproA=25;
#$VpixA=$VdluA*$VproA/100;

$VplA='./Avars/prgA.txt';
$VfpA=file($VplA);###
$VcpA=count($VfpA);
$VczsA=0;$VszsA=0;

echo'<table>';
for($ViA=1;$ViA<$VcpA;$ViA++){
 echo'<tr><td>';
 $VexA=explode(':',$VfpA[$ViA]);
 echo$VexA[0];
 echo'</td><td>';
 $VexB=explode('/',$VexA[1]);
 $VproA=round(100*$VexB[0]/$VexB[1],0);
 $VpixA=round($VdluA*$VproA/100,0);
 if($VexB[0]==1){$VinfA='BEGINNER';}
 elseif($VexB[0]==2){$VinfA='SKILLED';}
 else{$VinfA='FLUENT';}
 echo'<div class="DCprgBa" style="width:'.$VdluA.'px">&nbsp;</div>';
 echo'<div class="DCprgBb" style="width:'.$VpixA.'px">&nbsp;</div>';
 echo'<div class="DCprgBc">'.$VinfA.'</div>&nbsp;';
 echo'</td></tr>';
 $VczsA=$VczsA+$VexB[0];
 $VszsA=$VszsA+$VexB[1];
}
/*echo'<tr><td><b>';
echo$VfpA[0].'</b></td>';
echo'<td><b>';
$VproB=round(100*$VczsA/$VszsA,0);
$VpixB=round($VdluA*$VproB/100,0);
 echo'<div class="DCprgBa" style="width:'.$VdluA.'px">&nbsp;</div>';
 echo'<div class="DCprgBb" style="width:'.$VpixB.'px">&nbsp;</div>';
 echo'<div class="DCprgBc"></div>&nbsp;';
echo'</b></td></tr>';*/
echo'</table>';
?>

 <div class="DCxprB">
<br />SPECIAL FOCUS:<br />
<?php
$VplB='./Avars/prgB.txt';
$VfpB=file($VplB);###
$VcpB=count($VfpB);
echo'<b class="BCxpdA">'.trim($VfpB[0]).'</b>';
for($ViB=1;$ViB<$VcpB;$ViB++){
echo', <b class="BCxpdA">'.trim($VfpB[$ViB]).'</b>';
}
?>
<br /><br />AVOIDING:<br />
<?php
$VplC='./Avars/prgC.txt';
$VfpC=file($VplC);###
$VcpC=count($VfpC);
echo'<del class="DCxpdA">'.trim($VfpC[0]).'</del>';
for($ViC=1;$ViC<$VcpC;$ViC++){
echo', <del class="DCxpdA">'.trim($VfpC[$ViC]).'</del>';
}
?>
 </div>

</div>
