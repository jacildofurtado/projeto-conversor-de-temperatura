$(function(){
    //Adicionando o evento de click ao botão converter
    $('input[type=submit]').click(function(e){
        e.preventDefault();
        //pegando o valor dos elementos de entrada
        var vTemp = $('#tempInput').val();
        var vUni = $('#uniInput').val();
        var temp = parseFloat(vTemp);
        //console.log(vTemp);
        //console.log(vUni);
        if(vTemp != ""){
            //Verificação para saber qual a escala de temperatura que está sendo usada e em seguida aplicar a formula correspondente as outras escalas para converter a temperatura
            if(vUni == 'Celsius'){
                //formula para converter de celsius para fahrenheit
                var celFar = (temp*1.8) + 32;
                //formula para converter celsius em kelvin
                var celKel = temp + 273;
                $('#res').html(temp + '°C equivalem a ' + celFar.toFixed(2) + '°F <br>' + temp + '°C equivalem a ' + celKel.toFixed(2) + 'K');
            }else if(vUni == 'Fahrenheit'){
                //formula para converter fahrenheit em celsius
                var farCel = (temp - 32)/1.8;
                //formula para converter fahrenheit em kelvin
                var farkel = (temp - 32)*5/9 + 273;
                $('#res').html(temp + '°F equivalem a ' + farCel.toFixed(2) + '°C <br>' + temp + '°F equivalem a ' + farkel.toFixed(2) + 'K');
            }else if(vUni == 'Kelvin'){
                //formula pora converter kelvin em celsius
                var kelCel = temp - 273;
                //formula para converter kelvin em fahrenheit
                var kelFar = (temp - 273) * 1.8 + 32;
                $('#res').html(temp + 'K equivalem a ' + kelCel.toFixed(2) + '°C <br>' + temp + 'K equivalem a ' + kelFar.toFixed(2) + '°F');
            }
        }else{
            alert('Preencha todos os campos');
            $('#tempInput').css('border', '1px solid red');
        }    
    });
})