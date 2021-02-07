function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    
    //verificar idade
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novemente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = " " //Verificar gênero
        var img = document.createElement("img") // cria imagem
        img.setAttribute('id', 'foto') //imagem com id = "foto"
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bebeh.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemh.jpg')
            }else if (idade > 21 && idade < 60) {
                //Adulto
                img.setAttribute('src', 'adultoh.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosoh.jpg')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bebem.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemm.jpg')
            }else if (idade > 21 && idade < 60) {
                //Adulto
                img.setAttribute('src', 'adultom.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosom.jpg' )
            }
        }
        res.style.textAlign = "center" //centralizar pelo JS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}