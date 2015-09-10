vFrase = prompt("DIgite la frase a evaluar: ");
var i=0;
for(var j=0; j<vFrase.length;j++)
{
if(vFrase[j]=='a' || vFrase[j]=='e' || vFrase[j]=='i' || vFrase[j]=='o' || vFrase[j]=='u' || vFrase[j]=='A' || vFrase[j]=='E' || vFrase[j]=='I' || vFrase[j]=='O' || vFrase[j]=='U'){
i++;
} 
}
alert("La frase que se evaluo es: "+vFrase+" el numero de vocales sin acento en la frase es: "+i);