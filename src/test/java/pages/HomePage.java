package pages;

import com.trivago.rta.CluecumberReportPlugin;
import com.trivago.rta.logging.CluecumberLogger;
import org.openqa.selenium.By;
import org.openqa.selenium.TakesScreenshot;
import runner.RunCucumber;

public class HomePage extends RunCucumber {


    private String URL = "http://automationpratice.com.br/";
    private By bntAcessarTelaLogin = By.cssSelector(".right_list_fix > li > a > .fa-user");

    public void acessarAplicacao(){
        getDriver().get(URL);
    }

    public void acessarTelaLogin(){
        getDriver().findElement(bntAcessarTelaLogin).click();
    }
}
