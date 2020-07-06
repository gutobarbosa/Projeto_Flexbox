$(function(){
    //variaveis

    var indiceAtual = 0;
    var indiceMaximo = $('.slider img').length; // aqui me fala quantos elementos deste tipo existem
    var delay = 3000;
    // Inicialidadores das funções
    initSlider();
    cliqueSlider();
    //funções:

  
    //função slider
    function initSlider(){
        for(var i = 0; i < indiceMaximo; i++){
            if(i == 0){
            $('.bullets-nav').append('<span style="background:#069;"></span>');
            }else{
                $('.bullets-nav').append('<span></span>')
            }
        }
       // $('.slider img').eq(0).fadeIn(); // faz a mesma coisa que o de baixo nesta ocasiao
        $('.slider img').each(function(i){
            if(i==0){
              
                $(this).stop().fadeIn();
               
            }
        })
    }
    setInterval(function(){
        alternarSlider();
    },delay);
    
    // onde existe animação como no fadeIn e fadeOut o ideal é trabalhar com o STOP() tambem para que nao haja incavalamento de animações
    function alternarSlider(){
        $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
        indiceAtual = indiceAtual + 1;
        if(indiceAtual == indiceMaximo){
            indiceAtual = 0;
        }
        $('.bullets-nav span').css('background-color','#ccc')
        $('.bullets-nav span').eq(indiceAtual).css('background-color','#069');
        $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
    }
    function cliqueSlider(){
        $('.bullets-nav span').click(function(){
            $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
            indiceAtual = $(this).index();
            $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
            $('.bullets-nav span').css('background-color','#ccc');
            $(this).css('background-color','#069');
        });
    }
	$('.bars').click(function(event){
        $('.menu-mobile').slideToggle();
        event.stopPropagation();
    })
    $('body').click(function(){
        $('.menu-mobile').fadeOut();
    })
});
