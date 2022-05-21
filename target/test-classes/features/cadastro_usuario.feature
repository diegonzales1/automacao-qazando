#language: pt

  @cadastro_usuario
  Funcionalidade: Cadastro de usuário
    Eu como usuário do sistema
    Quero me cadastrar
    Para finalizar uma compra no site

    Contexto: Acessar aplicação
      Dado que eu estou na tela de login

    @validar_nome_vazio
    Cenario: Nome do usuário vazio
      Quando acesso a tela de cadastro de usuário
      E clico em cadastrar
      Entao vejo mensagem de campo nome não preenchido
