  //Máscaras
  $(document).ready(function(){
     $("#cpf").mask('000.000.000-00', {reverse: true});
    //A data já vem com máscara
  });

  // Função que executa a Validação do formulário com JQuery

  $(document).ready(function(){
    $("#form").validate({
      rules:{
            nome:{
              required:true,
              minlength:2,
              maxlength:15
            },

            sobrenome:{
              required:true,
              minlength:2,
              maxlength:30
            },
        
            cpf:{
              required: true,
              cpfBR:true
                  },

            dataDeNascimento:{required:true},
              
            email:{
              required:true,
              email:true
            },

            password:{
              required:true,
              minlength:5,

            },

            confirmPass:{
              required:true,
              equalTo: '#password'
            }
            }
                        }),
    //Ativando função RESET do botão do formulário.
  $("#reset").click(function () {location.reload(true); });
});
