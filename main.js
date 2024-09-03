const caixaPrincipal = document.querySelector(".caixa-principal"); 
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixalternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaTexto = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando descobriram o Brasil ?",
        alternativas: ["1500","1400","1200"]
    },
    {
        enunciado: "Qual a data da independência do Brasil ?",
        alternativas: ["07 de setembro","15 de novembro","21 de abril"]
    },
    {
        enunciado: "Qual a data da proclamação da república ?",
        alternativas: ["15 de novembro","07 de agosto","15 de julho"]
    
    },    
    {
        enunciado: "Quem foi o primeiro presidente do Brasil ?",
        alternativas: ["Dom Pedro","Deodoro da Fonscenca","Jair Messias Bolsonaro"]
    },    


];

