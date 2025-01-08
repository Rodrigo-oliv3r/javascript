function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
  
    msg.innerHTML = `Agora é exatamente ${hora} horas e ${min} minutos.`

    if(hora >= 0 && hora < 12){
        img.scr = 'imagens/manha-250.png'
        document.body.style.background = '#cfa65f'
    }else if(hora >= 12 && hora < 18){
        img.src = 'imagens/tarde-250.png'
        document.body.style.background = '#7f451d'
    }else{
        img.src = 'imagens/noite-250.png'
        document.body.style.background = '#293347'
    }
}