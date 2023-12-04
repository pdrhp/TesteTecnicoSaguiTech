const NomePrestadorInput = document.getElementById('nomePrestadorPrestador');
const EnderecoPrestadorInput = document.getElementById('enderecoPrestador');
const CepPrestadorInput = document.getElementById('cepPrestador');
const emailPrestadorInput = document.getElementById('emailPrestador');
const TelefonePrestadorInput = document.getElementById('telefonePrestador');
const NomeTomadorInput = document.getElementById('nomeTomador');
const EnderecoTomadorInput = document.getElementById('enderecoTomador');
const CepTomadorInput = document.getElementById('cepTomador');
const emailTomadorInput = document.getElementById('emailTomador');
const TelefoneTomadorInput = document.getElementById('telefoneTomador');
const buttonGerarNfsE = document.getElementById('buttonGerarNfsE');
const notaFiscalServico = document.getElementById('notaFiscalDeServico');
const NomeDoPrestadorNFS = document.getElementById('NomeDoPrestadorNFS');
const EnderecoPrestadorNFS = document.getElementById('EnderecoPrestadorNFS');
const CepPrestadorNFS = document.getElementById('CepPrestadorNFS');
const TelefonePrestadorNFS = document.getElementById('TelefonePrestadorNFS');
const EmailPrestadorNFS = document.getElementById('EmailPrestadorNFS');


buttonGerarNfsE.addEventListener('click', function() {
    var nomePrestador = NomePrestadorInput.value;
    var enderecoPrestador = EnderecoPrestadorInput.value;
    var cepPrestador = CepPrestadorInput.value;
    var emailPrestador = emailPrestadorInput.value;
    var telefonePrestador = TelefonePrestadorInput.value;
    var nomeTomador = NomeTomadorInput.value;
    var enderecoTomador = EnderecoTomadorInput.value;
    var cepTomador = CepTomadorInput.value;
    var emailTomador = emailTomadorInput.value;
    var telefoneTomador = TelefoneTomadorInput.value;


    NomeDoPrestadorNFS.innerHTML = nomePrestador;
    CepPrestadorNFS.innerHTML = cepPrestador;
    TelefonePrestadorNFS.innerHTML = telefonePrestador;
    EnderecoPrestadorNFS.innerHTML = enderecoPrestador; 
    EmailPrestadorNFS.innerHTML = emailPrestador;   

    





    notaFiscalServico.style.display = 'block';
});



