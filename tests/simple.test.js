// Exemplo de teste simples (apenas para demonstração do pipeline)

// Em um projeto real, usaríamos um framework como Jest, Mocha, etc.

// Simula um teste que sempre passa
function testAddition() {
  if (1 + 1 === 2) {
    console.log("Teste de adição passou!");
    return true;
  } else {
    console.error("Teste de adição falhou!");
    process.exit(1); // Falha o processo se o teste falhar
  }
}

testAddition();

