window.onload = function()
{
    var trianguloCapicua = function(niveles)
    {
        var capicua = "111111111"; 
        var triangulo = [];
        var operaNivel = [];
        for(var i = 1; i <= niveles; i++)
        {
            operaNivel = [];
            var num = capicua.substring(1, i+1); 
            var m = (num*num)+"";
            for(var c = 0; c < m.length; c++)
            {
                operaNivel.push(m.charAt(c));
                if(niveles == 9 && i == 9 && m.charAt(c) == 8){
                    operaNivel.push(9);
                    operaNivel.push(8);
                }
            }
            triangulo.push(operaNivel);
        }
        return triangulo;
    };


    var imprimeTriangulo = (function imprimeTriangulo(nivel)
    {
        var txt = "";
        var triangulo = trianguloCapicua(nivel);
        var colorCelda = "";
        nom_div("capi").innerHTML = "";
        for(var i = 0; i < triangulo.length; i++)
        {
            txt += "<div align = 'center' class = 'nivel' style = 'padding-bottom: 10px;'>";
            for(var c = 0; c < triangulo[i].length; c++)
            {
                colorCelda =  "background-color:black";
                txt += "<div style = 'display: inline-block; "+(colorCelda)+"' class = 'celda'"+"'>" + 
                            (triangulo[i][c]) + 
                        "</div>";
            }
            txt += "</div>";
        }
        nom_div("capi").innerHTML = txt;
        return imprimeTriangulo;
    })(2);

    nom_div("rango").addEventListener('change', function(event)
    {
        nom_div("txtrango").innerHTML = this.value;
        imprimeTriangulo(Number(this.value));
    });

    function nom_div(div)
    {
        return document.getElementById(div);
    }
};