$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "    Eu como usuário do sistema\n    Quero fazer login\n    Para fazer uma compra no site",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Login com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login-sucesso"
    }
  ]
});
formatter.step({
  "name": "que eu estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_eu_estou_na_tela_de_login()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Cannot find firefox binary in PATH. Make sure firefox is installed. OS appears to be: WIN10\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GFT-BPR2QQPSZMU\u0027, ip: \u0027192.168.15.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:100)\r\n\tat java.util.Optional.orElseGet(Optional.java:267)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:187)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat runner.RunBase.initDriver(RunBase.java:26)\r\n\tat steps.LoginSteps.que_eu_estou_na_tela_de_login(LoginSteps.java:26)\r\n\tat ✽.que eu estou na tela de login(src/test/resources/features/Login.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "preencho login \"diego@gmail.com\" e senha \"123456\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.preenchoLoginESenha(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clico em Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "sou logado na aplicação",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.souLogadoNaAplicação()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Cenario: Login com campos vazio",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@login-campos-vazios"
    }
  ]
});
formatter.step({
  "name": "que eu estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "name": "preencho login \"\u003cuser\u003e\" e senha \"\u003cpassword\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "clico em Login",
  "keyword": "E "
});
formatter.step({
  "name": "vejo mensagem \"\u003cmensagem\u003e\" de campo não preenchido",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "user",
        "password",
        "mensagem"
      ]
    },
    {
      "cells": [
        "",
        "123445",
        "E-mail inválido."
      ]
    },
    {
      "cells": [
        "email@email.com",
        "",
        "Senha inválida."
      ]
    },
    {
      "cells": [
        "",
        "",
        "E-mail inválido."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Cenario: Login com campos vazio",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login-campos-vazios"
    }
  ]
});
formatter.step({
  "name": "que eu estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_eu_estou_na_tela_de_login()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Cannot find firefox binary in PATH. Make sure firefox is installed. OS appears to be: WIN10\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GFT-BPR2QQPSZMU\u0027, ip: \u0027192.168.15.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:100)\r\n\tat java.util.Optional.orElseGet(Optional.java:267)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:187)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat runner.RunBase.initDriver(RunBase.java:26)\r\n\tat steps.LoginSteps.que_eu_estou_na_tela_de_login(LoginSteps.java:26)\r\n\tat ✽.que eu estou na tela de login(src/test/resources/features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "preencho login \"\" e senha \"123445\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.preenchoLoginESenha(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clico em Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "vejo mensagem \"E-mail inválido.\" de campo não preenchido",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.vejoMensagemDeCampoNãoPreenchido(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Cenario: Login com campos vazio",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login-campos-vazios"
    }
  ]
});
formatter.step({
  "name": "que eu estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_eu_estou_na_tela_de_login()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Cannot find firefox binary in PATH. Make sure firefox is installed. OS appears to be: WIN10\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GFT-BPR2QQPSZMU\u0027, ip: \u0027192.168.15.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:100)\r\n\tat java.util.Optional.orElseGet(Optional.java:267)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:187)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat runner.RunBase.initDriver(RunBase.java:26)\r\n\tat steps.LoginSteps.que_eu_estou_na_tela_de_login(LoginSteps.java:26)\r\n\tat ✽.que eu estou na tela de login(src/test/resources/features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "preencho login \"email@email.com\" e senha \"\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.preenchoLoginESenha(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clico em Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "vejo mensagem \"Senha inválida.\" de campo não preenchido",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.vejoMensagemDeCampoNãoPreenchido(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Cenario: Login com campos vazio",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login-campos-vazios"
    }
  ]
});
formatter.step({
  "name": "que eu estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_eu_estou_na_tela_de_login()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Cannot find firefox binary in PATH. Make sure firefox is installed. OS appears to be: WIN10\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GFT-BPR2QQPSZMU\u0027, ip: \u0027192.168.15.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:100)\r\n\tat java.util.Optional.orElseGet(Optional.java:267)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:187)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat runner.RunBase.initDriver(RunBase.java:26)\r\n\tat steps.LoginSteps.que_eu_estou_na_tela_de_login(LoginSteps.java:26)\r\n\tat ✽.que eu estou na tela de login(src/test/resources/features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "preencho login \"\" e senha \"\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.preenchoLoginESenha(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clico em Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "vejo mensagem \"E-mail inválido.\" de campo não preenchido",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.vejoMensagemDeCampoNãoPreenchido(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/features/cadastro_usuario.feature");
formatter.feature({
  "name": "Cadastro de usuário",
  "description": "    Eu como usuário do sistema\n    Quero me cadastrar\n    Para finalizar uma compra no site",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@cadastro_usuario"
    }
  ]
});
formatter.background({
  "name": "Acessar aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que eu estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_eu_estou_na_tela_de_login()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Cannot find firefox binary in PATH. Make sure firefox is installed. OS appears to be: WIN10\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GFT-BPR2QQPSZMU\u0027, ip: \u0027192.168.15.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:100)\r\n\tat java.util.Optional.orElseGet(Optional.java:267)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:187)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat runner.RunBase.initDriver(RunBase.java:26)\r\n\tat steps.LoginSteps.que_eu_estou_na_tela_de_login(LoginSteps.java:26)\r\n\tat ✽.que eu estou na tela de login(src/test/resources/features/cadastro_usuario.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Nome do usuário vazio",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro_usuario"
    },
    {
      "name": "@validar_nome_vazio"
    }
  ]
});
formatter.step({
  "name": "acesso a tela de cadastro de usuário",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.acessoATelaDeCadastroDeUsuário()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clico em cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarioSteps.clico_em_cadastrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "vejo mensagem de campo nome não preenchido",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroUsuarioSteps.vejo_mensagem_de_campo_nome_não_preenchido()"
});
formatter.result({
  "status": "skipped"
});
});