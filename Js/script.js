document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const copyButton = document.querySelector('.copy');

    // Validación de texto
    function validateText(text) {
        const regex = /^[a-z\s]*$/;
        return regex.test(text);
    }

    // Función para encriptar
    function encrypt(text) {
        return text.replace(/e/g, "enter")
                   .replace(/i/g, "imes")
                   .replace(/a/g, "ai")
                   .replace(/o/g, "ober")
                   .replace(/u/g, "ufat");
    }

    // Función para desencriptar
    function decrypt(text) {
        return text.replace(/enter/g, "e")
                   .replace(/imes/g, "i")
                   .replace(/ai/g, "a")
                   .replace(/ober/g, "o")
                   .replace(/ufat/g, "u");
    }

    // Mostrar el botón de copiar si hay contenido en el outputText
    function showCopyButton() {
        if (outputText.value.trim() !== "") {
            copyButton.style.display = 'block';
        } else {
            copyButton.style.display = 'none';
        }
    }

    // Función para copiar el texto
    function copyText() {
        outputText.select();
        outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
        document.execCommand("copy");
        alert("Texto copiado: " + outputText.value);
    }

    // Encriptar al hacer clic en el botón
    document.querySelector('.encrypt').addEventListener('click', () => {
        const text = inputText.value;
        if (validateText(text)) {
            outputText.value = encrypt(text);
            showCopyButton();
        } else {
            alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        }
    });

    // Desencriptar al hacer clic en el botón
    document.querySelector('.decrypt').addEventListener('click', () => {
        const text = inputText.value;
        if (validateText(text)) {
            outputText.value = decrypt(text);
            showCopyButton();
        } else {
            alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        }
    });

    // Copiar el texto al hacer clic en el botón de copiar
    copyButton.addEventListener('click', copyText);

    // Verificar si hay texto en el outputText al cargar la página
    showCopyButton();
});
