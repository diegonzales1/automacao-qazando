#language: pt

  @login
  Funcionalidade: Login
    Eu como usuário do sistema
    Quero fazer login
    Para fazer uma compra no site

    @login-sucesso
  Cenario: Login com sucesso
    Dado que eu estou na tela de login
    Quando preencho login "diego@gmail.com" e senha "123456"
    E clico em Login
    Entao sou logado na aplicação

  @login-campos-vazios
    Esquema do Cenário: Cenario: Login com campos vazio
    Dado que eu estou na tela de login
    Quando preencho login "<user>" e senha "<password>"
    E clico em Login
    Entao vejo mensagem "<mensagem>" de campo não preenchido

      Exemplos:
      | user            | password | mensagem |
      |                 | 123445   | E-mail inválido.  |
      | email@email.com |          | Senha inválida.  |
      |                 |          | E-mail inválido. |
