const form = document.getElementsByTagName("form") [0];

function handleSubmit(event){
    event.preventDefault();
    const rep = 5;
    let arrayValues = [];
    let isValid = true;

    for(var i = 0; i< rep; i++){
        
        const errorField = document.getElementById(form[i].id + "-error");

        if(errorField){
            errorField.textContent ="";
        }
    
        
        if(form[i].id === "name" && !form[i].value) {
            errorField.textContent ="Nome obrigatório";
            let isValid = false;
        }

        if(form[i].id === "lastName" && !form[i].value) {
            errorField.textContent ="Sobrenome obrigatório";
            let isValid = false;
        }

        if(form[i].id === "email") {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(!emailRegex.test(form[i].value))
            errorField.textContent ="E-mail obrigatório";
            let isValid = false;
        }

        if(form[i].id === "telefone"){
            if(form[i].value.length !== 16 ){
                errorField.textContent = "Pelo menos 11 caracteres";
                let isValid = false;
            }

            
            if(!form[i].value){
             errorField.textContent ="O telefone é obrigatorio";
             let isValid = false;
            }
        }
        
        
        arrayValues.push(form[i].value);
    }

    if (isValid){
        alert(arrayValues);
    }
   
}


// Obtém o elemento de entrada de telefone
const telefoneInput = document.getElementById('telefone');

// Adiciona um ouvinte de evento de entrada para formatar o número à medida que é digitado
telefoneInput.addEventListener('input', function () {
  const value = telefoneInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  if (value.length <= 2) {
    telefoneInput.value = `(${value}`;
  } else if (value.length <= 3) {
    telefoneInput.value = `(${value}`;
  } else if (value.length <= 4) {
    telefoneInput.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  } else if (value.length <= 9) {
    telefoneInput.value = `(${value.slice(0, 2)}) ${value.slice(2, 3)} ${value.slice(3)}`;
  } else {
    telefoneInput.value = `(${value.slice(0, 2)}) ${value.slice(2, 3)} ${value.slice(3, 7)}-${value.slice(7, 11)}`;
  }
});