package steps;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.HomePage;
import pages.LoginPage;
import runner.RunCucumber;

import java.util.concurrent.TimeUnit;

public class LoginSteps extends RunCucumber {

    HomePage homePage = new HomePage();
    LoginPage loginPage = new LoginPage();



    @Dado("^que eu estou na tela de login$")
    public void que_eu_estou_na_tela_de_login() {
        initDriver(Browser.FIREFOX);
        homePage.acessarAplicacao();
        homePage.acessarTelaLogin();
    }

    @Quando("^preencho login \"([^\"]*)\" e senha \"([^\"]*)\"$")
    public void preenchoLoginESenha(String email, String senha)  {
        loginPage.preencherEmail(email);
        loginPage.preencherSenha(senha);
    }

    @Quando("^clico em Login$")
    public void clico_em_Login() {
        loginPage.clicarLogin();
    }

    @Entao("^sou logado na aplicação$")
    public void souLogadoNaAplicação() {
        loginPage.verificaLoginSucesso();
    }

    @Entao("^vejo mensagem \"([^\"]*)\" de campo não preenchido$")
    public void vejoMensagemDeCampoNãoPreenchido(String message) {
        loginPage.verificaLoginComErro(message);
    }

    @Quando("^acesso a tela de cadastro de usuário$")
    public void acessoATelaDeCadastroDeUsuário() throws InterruptedException {
        loginPage.acessarTelaCadastro();
    }
}
