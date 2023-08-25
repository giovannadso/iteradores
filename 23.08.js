const hobbies = ['jogar volêi', 'escutar música', 'ler']

//Atividade 1
hobbies.forEach(function(hobbies) {
    console.log("Olá, eu sou o hobby " + hobbies + "!");
    });

//desafio
hobbies.push('assistir série')
hobbies.push('dormir')
hobbies.push('comer')
hobbies.push('treinar')

hobbies.forEach(function(hobby) {
    console.log("Olá, eu sou o hobby " + hobby + "!");
    });

//Atividade 2
const bookTitles = hobbies.map(function(hobby) {
    return "O incrível mundo de " + hobby;
    });
    console.log(bookTitles);

//desafio
const catalogos = ['É assim que acaba', 'É assim que começa', 'verity']
const catalogo = catalogos.map(function(livros) {
    return "No meu catálogo tem: " + livros;
    });
    console.log(catalogo);

//Atividade 3
const dHobbies = hobbies.filter(function(hobby) {
    return hobby[0] === 'd';
    } );
    
    console.log(dHobbies);

//desafio
const cHobbies = hobbies.filter(function(hobby) {
    return hobby[0] === 'c';
    } );
    
    console.log(cHobbies);

//Atividade 4 e desafio
const treinarPosition = hobbies.findIndex(function(hobby) {
    return hobby === 'treinar';
    });

const lerPosition = hobbies.findIndex(function(hobby) {
        return hobby === 'ler';
        });
    console.log("Treinar está na posição: " + treinarPosition + ". Ler está na posição: " + lerPosition);

//Atividade 5 reduce()
const allHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + ", " + hobby; });
    
    console.log("Meus hobbies são: " + allHobbies);

//desafio
const myHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + ", " + hobby; });
    
    console.log("O que eu gosto de fazer no meu tempo livre é: " + myHobbies);

//Atividade 5 some()
const hasVHobby = hobbies.some(function(hobby) {
    return hobby[0] === 'v'; });
    
    console.log("Eu tenho um hobby que começa com 'v'? " + hasVHobby);

//desafio
const hasMaior = hobbies.some(function(hobby) { return hobby.length > 8; });
console.log("Algun hobby possui mais que 8 letras? " + hasMaior);

//Atividade 6
const allShort = hobbies.every(function(hobby) { return hobby.length < 15; });
console.log("Todos os meus hobbies têm menos de 15 letras? " + allShort);

//desafio
const allMinusculas = hobbies.every(function(hobby) { return hobby === hobby.toLowerCase(); });
console.log("Todos os meus hobbies têm letras minúsculas? " + allMinusculas);

//Atividade 7
const fiveLetterHobby = hobbies.find(function(hobby) {
    return hobby.length === 5; });
    console.log("Meu primeiro hobby com 5 letras é: " + fiveLetterHobby);

//desafio
const letterZHobby = hobbies.find(function(hobby) {
    return hobby.includes ("z"); });
    console.log("Meu hobby que contém a letra z é: " + letterZHobby);


//Atividade 8 
const firstThreeHobbies = hobbies.slice(0, 3); console.log("Meus três primeiros hobbies são: ",
firstThreeHobbies);

//desafio
const secondFourthHobbies = hobbies.slice(1, 4); console.log("Meus hobbies do segundo ao quarto são: ",
secondFourthHobbies);