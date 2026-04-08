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
    let telefone = document.getElementById("Telefone").value;
    let cpf = document.getElementById("CPF").value;
    let idade = document.getElementById("Idade").value;
    let cidade = document.getElementById("Cidade").value;

    let cpfCadastrados = ["125678900", "1111111111"];

    if (nome.length < 3) return alert("Nome Inválido");
    if (!email.includes("@")) return alert("Email Inválido");
    if (telefone.length < 8) return alert("Telefone Inválido");
    if (cpfCadastrados.includes(cpf)) return alert("CPF já cadastrado");
    if (cpf == "") return alert("CPF Obrigatório");
    if (idade < 18) return alert("Deve ser maior de 18!");
    if (idade == "") return alert("Idade obrigatória!");
    if (cidade == "") return alert("Cidade obrigatória!");
    if (moradia == "") return alert("Moradia obrigatória!");
    if (!quintal) return alert("Informe sobre o quintal!");
    if (!pets) return alert("Informe se ja teve pets!");
    if (horas == "" || isNaN(horas)) return alert("Horas inválidas");
    if (motivo.length < 10) return alert("Motivo muito curto!");
    if (!termos) return alert("Resposta inválida para termos de condições");

    if (moradia == "apartamento" && quintal.value == "sim") {
        return alert("Apartamento não pode ter quintal!");
    }

    if (moradia == "apartamento" && !permite) {
        return alert("Apartamento não permite animais!");
    }

    if (moradia == "casa" && !seguro) {
        return alert("Informe se o quintal é seguro!");
    }

    if (horas > 8) {
        return alert("Animal ficará muito tempo sozinho!");
    }

    if (pet.value == "nao") {
        return alert("A ONG poderá acompanhar sua adaptação!");
    }

    let motivosInvalidos = ["quero", "porque sim"];
    if (motivosInvalidos.includes(motivo.toLowerCase())) {
        return alert("Motivo inválido");
    }

    if (!financeiro) {
        return alert("Sem condições financeiras");
    }

    if (impulso) {
        return alert("Cuidado com sua decisão impulsiva");
    }

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome:" + nome;
});

