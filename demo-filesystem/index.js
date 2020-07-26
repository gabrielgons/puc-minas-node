const fs = require('fs');

fs.mkdir('./teste', function(){
    console.log("Criei o diretorio teste");
});


fs.writeFile('./teste/abcd.json', '{"property":"value"}',() => console.log('Criado arquivo.'));


fs.readFile('./teste/abcd.json', (err, data)=> console.log('O meu arquivo possui o texto: ', data.toString()));