
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verfique os dados e tente novamente !')
        
    }else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                img.setAttribute('src', 'imagem/bebe-m.png')
            }else if (idade < 18){
                img.setAttribute('src', 'imagem/jovem-m.png')
            }else if (idade < 45){
                img.setAttribute('src', 'imagem/adulto-m.png')
            }else {
                img.setAttribute('src', 'imagem/idoso-m.png')
            }
        }
        if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                img.setAttribute('src', 'imagem/bebe-f.png')
            }else if (idade < 18){
                img.setAttribute('src', 'imagem/jovem-f.png')
            }else if (idade < 45){
                img.setAttribute('src', 'imagem/adulto-f.png')
            }else {
                img.setAttribute('src', 'imagem/idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos.`
        res.style.textAlign = 'center'
        res.style.fontSize = '20px'
        var foto = window.document.getElementById('foto')
        foto.append(img)

    }
    
        
        var button = window.document.getElementById('button')
        button.remove()

        var bto = window.document.getElementById('bto1')
        var button = document.createElement('button');
        button.setAttribute('type','button')
        button.appendChild(document.createTextNode('Nova Consulta'));
        bto.appendChild(button);
        bto.setAttribute('onclick', 'refreshPage()' )
      


}

function refreshPage(){
    window.location.reload();

} 