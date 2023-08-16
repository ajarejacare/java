function enviar(){
     var nome = document. getElementById("nomeid");
     
     if(nome.value != ""){
        alert('bom dia sr(a) '+ nome.value + ' sua clonagem de cartão foi bem feita') 
     }
     else{
        alert('COLOCA A PORRA DO SEU NOME')
     }
}
function limpa_formulario_cep(){
   document.getElementById('rua').value=("");
   document.getElementById('bairro').value=("");
   document.getElementById('cidade').value=("");
   document.getElementById('uf').value=("");
}

function meu_callback(conteudo){
   if(!("erro" in conteudo)){
      document.getElementById('rua').value=(conteudo.logradouro);
      document.getElementById('bairro').value=(conteudo.bairro);
      document.getElementById('cidade').value=(conteudo.cidade);
      document.getElementById('uf').value=(conteudo.uf);
   }else{
      limpa_formulario_cep();
      alert('vc sabia que 1 a cada 100mil de pessoas erra o cep, vc é uma delas')
   }
}
function pesquisacep(valor){

   var cep = valor.replace(/\D/g,'');
   if (cep !=""){
      var validacep= /^[0-9]{8}$/;
         if(validacep.test(cep)){
            document.getElementById('rua').value ="...";
            document.getElementById('bairro').value ="...";
            document.getElementById('cidade').value ="...";
            document.getElementById('uf').value = "...";
         
            var script = document.createElement('script');

            script.src='https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
         } else{
            limpa_formulario_cep();
            alert('crl, n sabe a PORRA DO SEU CEP???????????? tbm não')
         }
   } else{
      limpa_formulario_cep();
   }
   }
   