const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//A
copiaPokemon1={...pokemon1}

copiaPokemon1.nome='Squirtle'
copiaPokemon1.tipo='Água'

//B
pokemon1.ataques=[]
pokemon1.ataques.push({
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100,
})

//C
copiaPokemon1.ataque={...pokemon1.ataques}

//D
pokemon1.push=({
    nome:'Folha de navalha',
    dano:45,
    precisao:100,
    tipo:'Grama',
});

//E
copiaPokemon1.push=({
    nome:'jato de Agua',
    dano:40,
    precisao:100,
    tipo:'Agua',
});

//F
console.log('Objeto Original',pokemon1);
console.log('Copia do objeto pokemon1',copiaPokemon1);