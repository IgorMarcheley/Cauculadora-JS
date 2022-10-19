function insert(num) {
    document.forms.textview.value = document.forms.textview.value + num;
}

function equal () {
    var valor= document.forms.textview.value;
    if (valor) {
        document.form.textview.value = eval(valor)
    }
}

function percent (){
    var valor = document.form.textview.value;
    if (valor) {
        document.form.textview.value = eval(valor) / 100;
    }
}