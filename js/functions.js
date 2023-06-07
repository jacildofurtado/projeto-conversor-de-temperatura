$(function(){
    //Adicionando o evento de click ao botão converter
    $('input[type=submit]').click(function(e){
        e.preventDefault();
        //pegando o valor dos elementos de entrada
        var vTemp = $('#tempInput').val();
        var vUni = $('#uniInput').val();
        //console.log(vTemp);
        //console.log(vUni);
    })
})