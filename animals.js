// No arquivo animals.js, armazene em uma constante animals uma array com alguns Animais
//   Exemplo: const animals = ["macaco", "tucano", "elefante", "pavão", "hipopótamo", "leão"];

const animals = ["macaco", "tucano", "elefante", "pavão", "hipopótamo", "leão"];

// 6 - Faça o seguinte:
//    - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
//     array. Se não existir, exiba no console a mensagem "Leão não existe no array  
//     animals.";
//   - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
//   Dica: Usar includes includes e o operador !(Diferente)

if (animals.includes(!"leão")) {
    console.log("Leão não existe no array animals.");
} else {
    console.log("Existe um leão no array animals.");
}