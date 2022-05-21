package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import runner.RunCucumber;

public class LoginPage extends RunCucumber {

    private By btnLogin = By.id("btnLogin");
    private By btnNovoCadastro = By.id("createAccount");

    private By inputUser = By.id("user");
    private By inputSenha = By.id("password");


    public void preencherEmail(String email){
        getDriver().findElement(inputUser).sendKeys(email);
    }
    
    public void preencherSenha(String senha){
        getDriver().findElement(inputSenha).sendKeys(senha);
    }

    public void clicarLogin() {
        getDriver().findElement(btnLogin).click();
    }

    public void verificaLoginSucesso(){
            String textLoginSucesso = getDriver().findElement(By.id("swal2-title")).getText();
            Assert.assertEquals("Mensagem diferente","Login realizado", textLoginSucesso);
    }

    public void verificaLoginComErro(String message){
        String textError = getDriver().findElement(By.className("invalid_input")).getText();
        Assert.assertEquals(message, textError);
    }

    public void acessarTelaCadastro() throws InterruptedException {
        Thread.sleep(5000);
        getDriver().findElement(btnNovoCadastro).click();
    }
}
