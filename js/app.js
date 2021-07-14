//pegando elementos pelo data
$('[data-group]').each(function(){
    //variavel com todos os datas targets e groups e active
    var $alltarget = $(this).find('[data-target]'), 
        $allclicks = $(this).find('[data-click]'),
        activeClass = 'active'; // em [] seleciona todos os itens

    //adicionando a clas active aos datas target e click
    $alltarget.first().addClass(activeClass);
    $allclicks.first().addClass(activeClass);

    //função de click
    $allclicks.click(function(evento){
        evento.preventDefault();

        // pega o valor do click
        var id_click = $(this).data('click'),
            $target = $('[data-target="'+ id_click+'"]');

        //tirar ativo de todos os elementos
        $allclicks.removeClass(activeClass);
        $alltarget.removeClass(activeClass);

        //adiciona classe active
        $target.addClass(activeClass);
        $(this).addClass(activeClass);

    });

});