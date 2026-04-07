document.getElementById("adoption-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("Nome").value;
    let email = document.getElementById("Email").value;
    let moradia = document.getElementById("Moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked').value;
    let pets = document.querySelector('input[name="pets"]:checked').value;
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let permite = document.querySelector('input[name="permite"]:checked').value;
    let financeiro = document.querySelector('input[name="financeiro"]:checked').value;
    let impulso = document.querySelector('input[name="impulso"]:checked').value;
    let termos = document.querySelector('input[name="termos"]:checked').value;

    if (nome.length < 3) return alert("Nome Inválido");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome:" + nome;
});