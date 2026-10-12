function generateUser() {
  return {
    nome: 'QA User',
    email: 'qa_' + java.util.UUID.randomUUID() + '@test.com',
    password: '123456',
    administrador: 'true'
  };
}