async function fetchAlunos() {
  const resposta = await fetch("http://localhost:4000/alunos");
  const dados = await resposta.json();
  return dados;
}
export default fetchAlunos;
