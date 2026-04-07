document.getElementById("adoption-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("Nome").value;
    let email = document.getElementById("Email").value;
    let moradia = document.getElementById("Moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked').value;

    if(nome.length < 3)  return alert("Nome Inválido");

        document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>"+"Nome:"  + nome;
});
