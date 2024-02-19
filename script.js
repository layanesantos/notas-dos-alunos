
const aluno = [
    {
        nome:"Lara",
        nota1: 6,
        nota2: 7,
    },
    {
       nome: "fernando",
       nota1: 9,
       nota2: 7,
    },
    {
       nome: "Valeria",
       nota1: 10,
       nota2: 7,
    },
    {
        nome: "JOÃO",
        nota1: 8,
        nota2: 2,
    }
]
function printAlunosNotas (aluno){
  notas = ((aluno.nota1 + aluno.nota2)/ 2)
   if(notas >= 7){
   alert(` A média do aluno (a) ${aluno.nome} e de : ${notas}
    Parabéns, ${aluno.nome} você foi aprovado no concurso`)

   }else{
    alert(` A média do aluno (a) ${aluno.nome} e de : ${notas}
    Não foi dessa, ${aluno.nome}, continue estudando, você reprovou`)
   }
}
printAlunosNotas(aluno [0])
printAlunosNotas(aluno [1])
printAlunosNotas(aluno [2])
printAlunosNotas(aluno [3])