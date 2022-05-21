package pages;

import org.openqa.selenium.By;
import runner.RunCucumber;

public class CadastroUsuarioPage extends RunCucumber {

    private By btnCadastrar = By.id("btnRegister");

    private By errorMessageName = By.id("errorMessageFirstName");


    public void clicarEmCadastrar() {
        getDriver().findElement(btnCadastrar).click();
    }

    public String validaMensagemErroNome() {
        String messageErrorNome = getDriver().findElement(errorMessageName).getText();
        return messageErrorNome;
    }
}
