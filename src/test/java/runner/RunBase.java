package runner;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class RunBase {

    private static WebDriver driver;
    public enum Browser {CHROME, FIREFOX, EDGE}

    //Inicia o driver
    public static WebDriver initDriver(Browser browser){

        if(driver != null){
            driver.quit();
        }

        switch (browser){
            case CHROME:
                driver = new ChromeDriver();
                break;
            case FIREFOX:
                driver = new FirefoxDriver();
                break;
            case EDGE:
                throw new IllegalArgumentException("Edge não suportado");
            default:
                throw new IllegalArgumentException("Navegador não encontrado! Passe um navegador existente");
        }

        if(driver != null){
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
            driver.manage().window().maximize();
        }

        return driver;
    }

    // retornar o driver criado
    public static WebDriver getDriver(){
        return driver;
    }
}
