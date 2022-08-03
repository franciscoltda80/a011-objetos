const sacolao=[];

console.log('Array vazio',sacolao);

const compras=[{
        nome:'laranja',
        preco:5,
        disponibilidade:'true'},
    {
        nome:'banana',
        preco:7,
        disponibilidade:'true',
    },
        {nome:'pera',
         preco:12,
         disponibilidade:'false',

    },
];
console.log('Lista de compras',compras);



sacolao.push(compras);
console.log(sacolao);