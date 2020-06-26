function startApp() {

    let button = document.getElementById('btnlogin');
    button.onclick = function() {
        verifica();
    };
}

function verfica() {
    let id = document.getElementById("idaluno").value
    var senha = document.getElementById("senha").value

    if (id == "") {
        let paragraph = document.getElementsByClassName('result1');
        paragraph.innerHTML = 'Campo Obrigatorio ';
    }
    if (pass == "") {
        let paragraph = document.getElementsByClassName('result2');
        paragraph.innerHTML = 'Campo Obrigatorio ';
    }
    if (id || senha == "") {
        let paragraph = document.getElementsByClassName('result2');
        paragraph.innerHTML = 'Senha/Password invalidos';

    } else {
        alert("Seja Bem vindo!")
    }


}