//as funçãos so serão adicionadas quando o html estiver todo carregado na tela
$(document).ready(function(){

    //valor active que se repete direto 
    var clasActive = 'active';

    //pega o primeiro elemento que achar e adiciona a classe ativo, para quando der o refresh do site, já apareça alguma coisa
    $('.animais .tab-menu a').first().addClass(clasActive);
    $('.animais .item').first().addClass(clasActive); 


    //identificar se o usuario clicou
    $('.animais .tab-menu a').click(function(evento){
        //tira a definição padrao do elemento a
        evento.preventDefault();

        //identifica qual href foi clicado
        var itemId = $(this).attr('href');

        //remove a classe ativa de um enquanto, para deixar um ativo por vez (a ordem no script importa)
        $('.animais .tab-menu a, .animais .item').removeClass(clasActive);

        //adiciona a classe do css active
        $(this).addClass(clasActive);

        //adiciona a  a variavel item id a classe active
        $(itemId).addClass(clasActive);

        
    });//fim função

    // sem otimização 

    //pega o primeiro elemento que achar e adiciona a classe ativo, para quando der o refresh do site, já apareça alguma coisa
    $('.florestas .tab-menu a').first().addClass(clasActive);
    $('.florestas .item').first().addClass(clasActive);

    //identificar se o usuario clicou
    $('.florestas .tab-menu a').click(function(evento){
        //tira a definição padrao do elemento a
        evento.preventDefault();

        //identifica qual href foi clicado
        var itemId = $(this).attr('href');

        //remove a classe ativa de um enquanto, para deixar um ativo por vez (a ordem no script importa)
        $('.florestas .tab-menu a, .florestas .item').removeClass(clasActive);

        //adiciona a classe do css active
        $(this).addClass(clasActive);

        //adiciona a  a variavel item id a classe active
        $(itemId).addClass(clasActive);

        
    });//fim função
    
});

