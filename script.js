function insert(num) {
    document.forms.textview.value = document.forms.textview.value + num;
}

function equal () {
    var exp= document.forms.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp)
    }
}

function percent (){
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp) / 100;
    }
}

function squareRoot() {
    var exp = document.form.textview.value;
    if(!exp) {
        alert('digite um valor');
        return;

}

var a = 1, b = 0;
for (var i = 0; i < exp; i++) {
        b = valor / a;
        a = (b+ a) / 2;
    }
    
    document.form.textview.value = a.toFixed(11);
}

