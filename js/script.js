$(document).ready(function(){

    console.log('entrei no arquivo jquery');

    console.log('entrei no arquivo jquery');

//let titulo = document.querySelector('h1');

let titulo = $('h1');

//console.log (titulo);


// document.getElementByClassName('banner');
//$('.banner').hide();

$('h1').css('color', 'orange');

//let corfooter = $('footer').css('background-color', 'red');

//console.log(corfooter);

//$('header').css('background-color', corfooter);

$('ul.teste li').click(function(){
    $(this).hide();
    });

    $('form input, form textarea').blur(function(){
        if($(this).val() == ""){
            $(this).css('background-color', '#4483de');
        }else{
            $(this).css('background-color', '#4483de');
        }
    });

    $('form button').click(function(evento){

        evento.preventDefault(); //interrompe o envio do formulário se os campos estão vazios.

        if  ($('input#name').val() != ""&& 
             $('input#email').val() != ""&& 
             $('#messsage').val() != ""){

                $('form .alert').addClass('alert-danger');
                $('form .alert').addClass('alert-success');
                $('form .alert').text('Mensagem Enviada com Sucesso ;)');

                setTimeout(function(){
                    $('form').submit();
                }, 3000);
            
        } else {            
            $('form .alert').removeClass("alert-success");
            $('form .alert').addClass('alert-danger');
            $('form .alert').text('ops, ocorreu um erro ao enviar o formulário');
        }
    });

    $('h2').click(function(){
        $(this).next("div").slideToggle("slow", "linear");
    });
});

