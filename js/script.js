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
const inputDescricaoServico = document.getElementById('DescricaoServicoForm');
const DescricaoServicoNFS = document.getElementById('descricaoServicoNFS');
const inputValorServico = document.getElementById('ValorServicoForm');
const ValorTotalServicosNFS = document.getElementById('ValorTotalServicosNFS');
const TributoISSValorNFS = document.getElementById('TributoISSValorNFS');
const TributoCOFINSValorNFS = document.getElementById('TributoCOFINSValorNFS');
const TributoPISValorNFS = document.getElementById('TributoPISValorNFS');
const TributoCSLLValorNFS = document.getElementById('TributoCSLLValorNFS');
const TributoINSSValorNFS = document.getElementById('TributoINSSValorNFS');





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
    var descricaoServico = inputDescricaoServico.value;
    var valorServico = inputValorServico.value;
    var ValorImpostos = calcularImpostos(valorServico);
    var ValorTotal = parseFloat(valorServico) + parseFloat(ValorImpostos.COFINS) + parseFloat(ValorImpostos.CSLL) + parseFloat(ValorImpostos.INSS) + parseFloat(ValorImpostos.ISS) + parseFloat(ValorImpostos.PIS);
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
    DescricaoServicoNFS.innerHTML = descricaoServico;
    ValorTotalServicosNFS.innerHTML = FormatarValor(ValorTotal);
    TributoISSValorNFS.innerHTML = FormatarValor(ValorImpostos.ISS);
    TributoCOFINSValorNFS.innerHTML = FormatarValor(ValorImpostos.COFINS);
    TributoPISValorNFS.innerHTML = FormatarValor(ValorImpostos.PIS); 
    TributoCSLLValorNFS.innerHTML = FormatarValor(ValorImpostos.CSLL); 
    TributoINSSValorNFS.innerHTML = FormatarValor(ValorImpostos.INSS);




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

function FormatarValor(valor){
    const valorFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);

    return valorFormatado;
}

function calcularImpostos(valor) {
    const aliquotas = {
        ISS: 0.02,    // 2%
        COFINS: 0.076, // 7,6%
        PIS: 0.0165,  // 1,65%
        CSLL: 0.09,   // 9%
        INSS: 0.20    // 20%
    };

    let impostos = {
        ISS: valor * aliquotas.ISS,
        COFINS: valor * aliquotas.COFINS,
        PIS: valor * aliquotas.PIS,
        CSLL: valor * aliquotas.CSLL,
        INSS: valor * aliquotas.INSS
    };

    return impostos;
}



