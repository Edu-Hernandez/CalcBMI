function calcularBMI() {
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var resultadoBMI = document.getElementById('resultadoBMI');
    var resultadoCategoria = document.getElementById('resultadoCategoria');
    
    if (altura === "" || peso === "") {
        alert("Por favor, complete ambos campos.");
        return;
    }
    
    altura = parseFloat(altura);
    peso = parseFloat(peso);
    
    var bmi = peso / ((altura / 100) ** 2);
    bmi = bmi.toFixed(2); // Redondear a dos decimales
    
    resultadoBMI.innerText = "BMI: " + bmi;
    
    var categoria;
    if (bmi < 18.5) {
        categoria = "Bajo de peso";
    } else if (bmi >= 18.5 && bmi < 25) {
        categoria = "Peso normal";
    } else if (bmi >= 25 && bmi < 30) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidad";
    }
    
    resultadoCategoria.innerText = "Categoría: " + categoria;
}

function limpiarCampos() {
    document.getElementById('altura').value = "";
    document.getElementById('peso').value = "";
    document.getElementById('resultadoBMI').innerText = "BMI: ";
    document.getElementById('resultadoCategoria').innerText = "Categoría: ";
}
