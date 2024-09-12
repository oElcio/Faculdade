document.getElementById('transformarBtn').addEventListener('click', function() {
    const mat = document.getElementById('mat').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;
    
   
    if (!mat || !nome || !idade || !cpf) {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    else if (!Number.isInteger(parseInt(mat))) {
        alert('A matricula deve ser um número inteiro!');
        return;
 
    }
    
        else if (!Number.isInteger(parseInt(idade))) {
        alert('Idade deve ser um número inteiro!');
        return;
    }

    
    const aluno = {
        matricula: mat,
        nome: nome,
        idade: idade,
        cpf: cpf
    };

    document.getElementById('jsonOutput').textContent = JSON.stringify(aluno);
});