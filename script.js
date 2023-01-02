function inserir (caractere) {
    let display = document.getElementById('display').innerHTML

    if (display === '0') {
        document.getElementById('display').innerHTML = caractere
    } else if (isNaN(display[display.length - 1]) && isNaN(caractere)) {
        display = display.substring(0, display.length - 1)
        document.getElementById('display').innerHTML = display + caractere
    } else {
        document.getElementById('display').innerHTML = display + caractere
    }
}

function limpar () {
    document.getElementById('display').innerHTML = '0'
}

function excluir () {
    let display = document.getElementById('display').innerHTML

    if (display.length === 1) {
        document.getElementById('display').innerHTML = '0'
    } else {
        document.getElementById('display').innerHTML = display.substring(0, display.length -1)
    }
}

function calcular () {
    let display = document.getElementById('display').innerHTML

    if (display && display != '0') {
        document.getElementById('display').innerHTML = eval(display)
    }
}
