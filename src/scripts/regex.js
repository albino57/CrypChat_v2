// /src/scripts/regex.js


export function isInputNameSafe(text) {          // Aceita letras, espaços e acentos.
    const regex = /^[a-zA-Z\s\u00C0-\u00FF]+$/; 
    return regex.test(text);
}

export function isInputEmailSafe(text) {         // Aceita letras, números e @ . _ -
    const regex = /^[a-zA-Z0-9@._-]+$/;
    return regex.test(text);
}

export function isInputPasswordSafe(text) {      // Aceita letras, acentos, números e símbolos comuns
    const regex = /^[a-zA-Z0-9!@#$%&*._-\s\u00C0-\u00FF]+$/; 
    return regex.test(text);
}