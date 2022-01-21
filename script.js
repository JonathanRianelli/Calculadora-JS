var n = []
var o = []
var r = false
var nAtual = ''


function addn(p) {

    if (p === '.' && res.innerHTML.indexOf('.') !== -1) {
        
    } else {
        if (r == true){
        res.innerHTML = ''
        r = false
        res.style.color = 'black'
        }
        nAtual += p
        res.innerHTML += p
    }
    


}

function addo(p) {
    if (res.innerHTML[0] == '-'){
        nAtual = ~nAtual + 1
    }
    if (r == true){

    } else if (res.innerHTML == '' && p !== '-') {
        alert('Digite um numero primeiro')
    } else if (res.innerHTML == '' && p === '-') {
        res.innerHTML += p
    } else {
        n.push(Number(nAtual))
        o.push(p)
        res.innerHTML = ''
        nAtual = ''
    }

}

igu.addEventListener('click', function(){
    if (res.innerHTML[0] == '-'){
        nAtual = ~nAtual + 1
    }
    var resultado = Number(n[0])
    n.push(Number(nAtual))
    nAtual = ''
    r = true
    for (var i = 0; i < n.length; i++){
        if (o[i] == '+') {
            resultado += n[i+1]
        } else if (o[i] == '-') {
            resultado -= n[i+1]
        } else if (o[i] == '/') {
            resultado /= n[i+1]
        } else if (o[i] == 'x') {
            resultado *= n[i+1]
        } 
    }
    if (resultado == 'Infinity'){
        res.innerHTML = 'Impossível'
        res.style.fontsize = '1px'
    } else if (n.length < 2) {
        res.style.color = 'blue'
    } else {
        res.innerHTML = resultado
        res.style.color = 'blue'
    }
    
    resultado = 0
    n = []
    o = []
})

apa.addEventListener('click', function(){
    if (r === true) {
        res.style.color = 'black'
        r = false
        nAtual = ''
        res.innerHTML = ''
        n = []
        o = []        
    } else {
        var x = res.innerHTML
        var y = nAtual
        res.innerHTML = x.substring(0, x.length - 1)
        nAtual = y.substring(0, y.length - 1) 
    }
   
    })

lim.addEventListener('click', function(){
    res.style.color = 'black'
    r = false
    nAtual = ''
    res.innerHTML = ''
    n = []
    o = []
})

mem.addEventListener('click', function(){

    if (res.innerHTML[0] === '-') {
        res.innerHTML = res.innerHTML.substring(1)
    } else if (r == true) {

    } else {
        res.innerHTML = '-' + res.innerHTML
    }
})