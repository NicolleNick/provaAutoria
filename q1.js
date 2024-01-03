function formatarContato(contato) {
  const { nome, email, telefone } = contato;
  return `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`;
}

const contatoExemplo = {
  nome: "Ana Silva",
  email: "ana.silva@example.com",
  telefone: "123456789"
};

const resultadoFormatado = formatarContato(contatoExemplo);
console.log(resultadoFormatado);


