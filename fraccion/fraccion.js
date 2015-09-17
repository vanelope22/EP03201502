 var opera=prompt("Digite  la  operacion a realizar +,*,-,/ ")
 var num1=prompt("Digite numerador 1");
 var den1=prompt("Digite denominador 1");
 var num2=prompt("Digite numerador 2");
 var den2=prompt("Digite denominador 2");
 var resden=0;
 var resnum=0;
 var temn=0;
 var temd=0;
 var num=0;
 var den=0;
 if(opera=='+'){
    if(den1==den2)
        {
            resnum =num1+num2;
            resden = den1;
        }
        else 
        {
            resden = den1*den2;
            resnum = (num1*den2)+(num2*den1);
        }
    alert("fracciones: "+num1+"/"+den1+"+"+num2+"/"+den2+" = "+resnum+"/"+resden);
}
if(opera=='-'){
    if(den1==den2)
        {
            resnum =num1-num2;
            resden = den1;
        }
        else 
        {
            resden = den1*den2;
            resnum = (num1*den2)-(num2*den1);
        }
    alert("fracciones: "+num1+"/"+den1+"-"+num2+"/"+den2+" = "+resnum+"/"+resden);
}
if(opera=='*'){
            resden = den1*den2;
            resnum = (num1*num2);
    alert("fracciones: "+num1+"/"+den1+"*"+num2+"/"+den2+" = "+resnum+"/"+resden);
}
if(opera=='/'){
            var temp1=0;
            var temp2=0;
            resden = den1*num2;
            resnum = num1*den2;
    alert("fracciones: "+num1+"/"+den1+"/"+num2+"/"+den2+" = "+resnum+"/"+resden);
}




