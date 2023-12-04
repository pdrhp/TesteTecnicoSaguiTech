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
const CnpjPrestador = document.getElementById('CnpjPrestador');
const CnpjPrestadorNFS = document.getElementById('CnpjPrestadorNFS');
const DataGerecaoNfs = document.getElementById('DataGerecaoNfs');
const DataEmissaoNFS = document.getElementById('DataEmissaoNFS');
const CpfCnpjTomadorNFS = document.getElementById('CpfCnpjTomadorNFS');
const NomeRazaoSocialTomadorNFS = document.getElementById('NomeRazaoSocialTomadorNFS');
const EnderecoTomadorNFS = document.getElementById('EnderecoTomadorNFS');
const ComplementoTomadorNFS = document.getElementById('ComplementoTomadorNFS');
const CEPTomadorNFS = document.getElementById('CEPTomadorNFS');
const TelefoneTomadorNFS = document.getElementById('TelefoneTomadorNFS');
const emailTomadorNSF = document.getElementById('emailTomadorNSF');




buttonGerarNfsE.addEventListener('click', function() {
    var nomePrestador = NomePrestadorInput.value;
    var enderecoPrestador = EnderecoPrestadorInput.value;
    var cepPrestador = CepPrestadorInput.value;
    var emailPrestador = emailPrestadorInput.value;
    var telefonePrestador = TelefonePrestadorInput.value;
    var cnpjPrestador = CnpjPrestador.value;
    var nomeTomador = NomeTomadorInput.value;
    var enderecoTomador = EnderecoTomadorInput.value;
    var cepTomador = CepTomadorInput.value;
    var emailTomador = emailTomadorInput.value;
    var telefoneTomador = TelefoneTomadorInput.value;
    var horaAtual = obterHoraAtual();
    var dataAtual = obterDataAtual();



    NomeDoPrestadorNFS.innerHTML = nomePrestador;
    CepPrestadorNFS.innerHTML = cepPrestador;
    TelefonePrestadorNFS.innerHTML = telefonePrestador;
    EnderecoPrestadorNFS.innerHTML = enderecoPrestador; 
    EmailPrestadorNFS.innerHTML = emailPrestador;   
    CnpjPrestadorNFS.innerHTML = cnpjPrestador;
    DataGerecaoNfs.innerHTML = `${dataAtual} ${horaAtual}`;
    DataEmissaoNFS.innerHTML = `${dataAtual} ${horaAtual}`;
    NomeRazaoSocialTomadorNFS.innerHTML = nomeTomador;
    EnderecoTomadorNFS.innerHTML = enderecoTomador;
    ComplementoTomadorNFS.innerHTML = enderecoTomador;
    CEPTomadorNFS.innerHTML = cepTomador;
    emailTomadorNSF.innerHTML = emailTomador;
    TelefoneTomadorNFS.innerHTML = telefoneTomador;


    





    notaFiscalServico.style.display = 'block';
});


function obterDataAtual() {
    const agora = new Date();

    const data = agora.toLocaleDateString('pt-BR');


    return data;
}

function obterHoraAtual(){
    const agora = new Date();

    const hora = agora.toLocaleTimeString('pt-BR')

    return hora;
}



