const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    let obj ={
        nome:req.query.nome
    };
    
    res.render('home', obj)
});

router.get("/rota2", (req, res) => {
    let obj ={
        mostrar: true,
        grade: ['SEG- 7:40-11:20Gestão Ágil de Projetos de Software', 'TER- 7:40-11:20Banco de Dados - Não relacional','QUA-11:20-13:00Interação Humano Computador', 'SEX- 7:40-11:20Técnica de Programação II',
        'QUA- 7:40-11:20Desenvolvimento Web III', 'QUI- 7:40-11:20Álgebra Linear' ]
    };
    
    res.render('home02', obj)
});


router.get("/rota3", (req, res) => {
    let obj ={
        mostrar: true,
        historico: ['Algoritmo e Lógica de Programação-APROVADO', 'Modelagem de Banco de Dados-APROVADO','Banco de Dados – Relacional -APROVADO', 'Estrutura de Dados -APROVADO','Engenharia de Software I -APROVADO',
        'Engenharia de Software II -APROVADO', 'Álgebra Linear', 'Técnica de Programação I-APROVADO', 'Sistemas Operacionais e Redes de Computadores-APROVADO', 
        'Desenvolvimento Web I-APROVADO', 'Design Digital-APROVADO', 'Matemática para Computação-APROVADO','Desenvolvimento Web II- PENDENTE' ]
    };
    
    res.render('home03', obj)
});


module.exports = router;