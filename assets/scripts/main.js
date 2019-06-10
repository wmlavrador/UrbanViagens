$(function(){

    $("#innerHeader").load("/parts/headerPart.html");
    $("#innerFooter").load("/parts/footerPart.html");

    var jsonAcomodacoes = {
        0:{
            cidadeAcomodacao: "São Paulo",
            valorAcomodacao: "530,00",
            fotoAcomodacao: "https://a0.muscache.com/im/pictures/74ff060d-cda5-4b55-aca8-c79024b57903.jpg?aki_policy=poster",
            ratingAcomodacao: "5"
        },
        1:{
            cidadeAcomodacao: "São Paulo",
            valorAcomodacao: "530,00",
            fotoAcomodacao: "https://a0.muscache.com/im/pictures/cadad952-2ecf-41ad-b8b4-e9cf192d4f88.jpg?aki_policy=poster",
            ratingAcomodacao: "2"
        },
        2:{
            cidadeAcomodacao: "São Paulo",
            valorAcomodacao: "530,00",
            fotoAcomodacao: "https://a0.muscache.com/im/pictures/943d0233-e522-40fe-ac16-d39efd49a0eb.jpg?aki_policy=poster",
            ratingAcomodacao: "3"
        },
        3:{
            cidadeAcomodacao: "São Paulo",
            valorAcomodacao: "530,00",
            fotoAcomodacao: "https://a0.muscache.com/im/pictures/944989e8-89f0-472f-9512-cb4acf5c4a0f.jpg?aki_policy=poster",
            ratingAcomodacao: "5"
        },
        4:{
            cidadeAcomodacao: "São Paulo",
            valorAcomodacao: "530,00",
            fotoAcomodacao: "https://a0.muscache.com/im/pictures/a8245753-b5c9-4d48-a9d7-5c895ea077ea.jpg?aki_policy=poster",
            ratingAcomodacao: "1"
        },
        5:{
            cidadeAcomodacao: "São Paulo",
            valorAcomodacao: "530,00",
            fotoAcomodacao: "https://a0.muscache.com/im/pictures/ebd6939c-4424-4075-b96a-b31a04ce7fb3.jpg?aki_policy=large",
            ratingAcomodacao: "3"
        }
    };
    
    $.each(jsonAcomodacoes, function(key, value){
        // cria as estrelas, de acordo com o ratingAcomodacao
        var ratingAcomodacao = '';
        for(var i = 0; i < value.ratingAcomodacao; i++){
            ratingAcomodacao += '<img src="assets/imgs/icon-star.png" width="13" style="margin-right:5px;">';
        }

        var acomodacoesItem = '<div class="acomodacoesItem mt-5 mb-5 col "><div class="itemHead"> <span><img src="assets/imgs/icon-gps.png" alt=""></span> <span class="itemTitle">'+value.cidadeAcomodacao+',</span> <span class="vlDiaria">R$ '+value.valorAcomodacao+'</span> <span class="vlDiariaLabel">/diaria</span></div><div class="itemBody" style="background:url('+value.fotoAcomodacao+') no-repeat"> </div><div class="itemBottom d-flex"><div class="rating col-md-7"> '+ratingAcomodacao+' </div><div class="buttonMore col">Detalhes</div></div></div>';
        $("#acomodacoesSection").append(acomodacoesItem);
    });

    $(".menuOpen").click(function(){
        $(this).hide();
        $(".menuVertical").show();
        $(".menuCancel").show();
    });

    $(".menuCancel").click(function(){
        $(this).hide();
        $(".menuOpen").show();
        $(".menuVertical").hide();
    });

    $(".menuVertical ul li").click(function(){
        $(this).hide();
        $(".menuOpen").show();
        $(".menuVertical").hide();
    });

});