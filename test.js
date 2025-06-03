const soma = require('./index');

function testSoma() {
  const resultado = soma(2, 3);
  if (resultado === 5) {
    console.log('Teste passou!');
    process.exit(0);  // sucesso
  } else {
    console.error('Teste falhou!');
    process.exit(1);  // erro
  }
}

testSoma();
